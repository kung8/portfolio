const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const axios = require('axios');
const { CATEGORIES, GENRES, METHODS, PROTEIN, TYPES } = require('../data/recipes/constants');

class RecipeWebScraper {
    constructor() {
        this.commonSelectors = {
            // JSON-LD structured data
            jsonLd: 'script[type="application/ld+json"]',
            
            // Common recipe selectors
            title: [
                'h1.recipe-title',
                'h1.entry-title', 
                'h1[class*="title"]',
                '.recipe-header h1',
                '[data-recipe-title]',
                'h1'
            ],
            ingredients: [
                '.recipe-ingredients li',
                '.ingredients li', 
                '[data-ingredient]',
                '.recipe-ingredient',
                'ul.ingredients li',
                '.ingredient-list li'
            ],
            instructions: [
                '.recipe-instructions li',
                '.instructions li',
                '.recipe-method li',
                '.directions li',
                '[data-instruction]',
                '.recipe-instruction',
                'ol.instructions li'
            ],
            prepTime: [
                '[data-prep-time]',
                '.prep-time',
                '.recipe-prep-time'
            ],
            cookTime: [
                '[data-cook-time]',
                '.cook-time', 
                '.recipe-cook-time'
            ],
            servings: [
                '[data-servings]',
                '.servings',
                '.recipe-servings',
                '.yield'
            ]
        };
    }

    async scrapeRecipe(url) {
        const startTime = Date.now();
        try {
            console.log(`[${new Date().toISOString()}] Starting recipe scrape from: ${url}`);
            
            // Validate URL format
            if (!url.match(/^https?:\/\/.+/)) {
                throw new Error('Invalid URL format');
            }
            
            // First try with simple HTTP request (faster)
            let html;
            let method = 'HTTP';
            try {
                console.log('Attempting simple HTTP request...');
                const response = await axios.get(url, {
                    headers: {
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
                        'Accept-Language': 'en-US,en;q=0.5',
                        'Accept-Encoding': 'gzip, deflate, br',
                        'Connection': 'keep-alive',
                        'Upgrade-Insecure-Requests': '1',
                        'Sec-Fetch-Dest': 'document',
                        'Sec-Fetch-Mode': 'navigate',
                        'Sec-Fetch-Site': 'none'
                    },
                    timeout: 8000,
                    maxRedirects: 5
                });
                html = response.data;
                console.log(`HTTP request successful (${Date.now() - startTime}ms)`);
            } catch (httpError) {
                console.log(`HTTP request failed: ${httpError.message}. Falling back to Puppeteer...`);
                method = 'Browser';
                html = await this.scrapeWithPuppeteer(url);
            }

            if (!html || html.length < 100) {
                throw new Error('Retrieved HTML is too short or empty');
            }

            const $ = cheerio.load(html);
            
            // Try to extract from JSON-LD first (most reliable)
            console.log('Searching for JSON-LD structured data...');
            const jsonLdData = this.extractFromJsonLd($);
            if (jsonLdData) {
                const elapsed = Date.now() - startTime;
                console.log(`✅ Successfully extracted from JSON-LD via ${method} (${elapsed}ms)`);
                return jsonLdData;
            }
            
            // Fallback to HTML scraping
            console.log('JSON-LD not found, falling back to HTML selector scraping...');
            const htmlData = this.extractFromHtml($, url);
            const elapsed = Date.now() - startTime;
            console.log(`✅ Successfully extracted via HTML selectors and ${method} (${elapsed}ms)`);
            return htmlData;
            
        } catch (error) {
            const elapsed = Date.now() - startTime;
            console.error(`❌ Recipe scraping failed after ${elapsed}ms:`, error.message);
            throw new Error(`Failed to scrape recipe: ${error.message}`);
        }
    }

    async scrapeWithPuppeteer(url) {
        let browser;
        let page;
        try {
            console.log('Launching Puppeteer browser...');
            browser = await puppeteer.launch({ 
                headless: true,
                args: [
                    '--no-sandbox',
                    '--disable-setuid-sandbox',
                    '--disable-dev-shm-usage',
                    '--disable-accelerated-2d-canvas',
                    '--no-first-run',
                    '--no-zygote',
                    '--disable-gpu'
                ]
            });
            
            page = await browser.newPage();
            
            // Set reasonable resource limits
            await page.setViewport({ width: 1024, height: 768 });
            await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');
            
            // Block unnecessary resources to speed up loading
            await page.setRequestInterception(true);
            page.on('request', (req) => {
                const resourceType = req.resourceType();
                if (resourceType === 'image' || resourceType === 'stylesheet' || resourceType === 'font') {
                    req.abort();
                } else {
                    req.continue();
                }
            });
            
            console.log(`Navigating to: ${url}`);
            // Use domcontentloaded instead of networkidle0 for faster loading
            await page.goto(url, { 
                waitUntil: 'domcontentloaded', 
                timeout: 15000 
            });
            
            // Give a brief moment for any essential scripts to run
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            const html = await page.content();
            console.log('Successfully retrieved page content');
            return html;
        } catch (error) {
            console.error('Puppeteer error:', error.message);
            throw new Error(`Browser scraping failed: ${error.message}`);
        } finally {
            try {
                if (page) await page.close();
                if (browser) await browser.close();
                console.log('Browser closed successfully');
            } catch (closeError) {
                console.error('Error closing browser:', closeError.message);
            }
        }
    }

    extractFromJsonLd($) {
        try {
            const jsonLdScripts = $(this.commonSelectors.jsonLd);
            
            for (let i = 0; i < jsonLdScripts.length; i++) {
                const script = $(jsonLdScripts[i]);
                const jsonText = script.html();
                
                if (!jsonText) continue;
                
                try {
                    const data = JSON.parse(jsonText);
                    const recipes = this.findRecipeInJsonLd(data);
                    
                    if (recipes.length > 0) {
                        return this.parseJsonLdRecipe(recipes[0]);
                    }
                } catch (parseError) {
                    console.log('Failed to parse JSON-LD:', parseError.message);
                }
            }
        } catch (error) {
            console.log('Error extracting JSON-LD:', error.message);
        }
        
        return null;
    }

    findRecipeInJsonLd(data) {
        const recipes = [];
        
        const searchForRecipe = (obj) => {
            if (Array.isArray(obj)) {
                obj.forEach(searchForRecipe);
            } else if (obj && typeof obj === 'object') {
                // Handle both single type and array of types
                const type = obj['@type'] || obj.type;
                const isRecipe = type === 'Recipe' || (Array.isArray(type) && type.includes('Recipe'));
                
                if (isRecipe) {
                    recipes.push(obj);
                }
                Object.values(obj).forEach(searchForRecipe);
            }
        };
        
        searchForRecipe(data);
        return recipes;
    }

    parseJsonLdRecipe(recipe) {
        const parseTime = (timeStr) => {
            if (!timeStr) return { amount: 0, unit: 'MINUTE' };
            
            // Parse ISO 8601 duration format (PT15M, PT1H30M, etc.)
            const match = timeStr.match(/PT(?:(\d+)H)?(?:(\d+)M)?/);
            if (match) {
                const hours = parseInt(match[1]) || 0;
                const minutes = parseInt(match[2]) || 0;
                const totalMinutes = hours * 60 + minutes;
                return { amount: totalMinutes, unit: 'MINUTE' };
            }
            
            // Parse text format (30 minutes, 1 hour, etc.)
            const textMatch = timeStr.match(/(\d+)\s*(hours?|hrs?|minutes?|mins?)/i);
            if (textMatch) {
                const amount = parseInt(textMatch[1]);
                const unit = textMatch[2].toLowerCase();
                const timeUnit = unit.includes('hour') || unit.includes('hr') ? 'HOUR' : 'MINUTE';
                return { amount, unit: timeUnit };
            }
            
            return { amount: 0, unit: 'MINUTE' };
        };

        const parseIngredients = (ingredients) => {
            if (!ingredients) return [];
            
            return ingredients.map(ingredient => {
                let ingredientText = '';
                
                if (typeof ingredient === 'string') {
                    ingredientText = ingredient;
                } else if (ingredient.text) {
                    ingredientText = ingredient.text;
                } else {
                    ingredientText = ingredient.toString();
                }
                
                const parsed = this.parseIngredientText(ingredientText);
                
                // Ensure we always have valid values to prevent React crashes
                return {
                    name: parsed.name || ingredientText,
                    amount: parsed.amount || '',
                    unit: parsed.unit || '',
                    additionalDetails: parsed.additionalDetails || '',
                    section: parsed.section || 'MAIN'
                };
            });
        };

        const parseInstructions = (instructions) => {
            if (!instructions) return [];
            
            return instructions.map((instruction) => {
                let text = '';
                
                if (typeof instruction === 'string') {
                    text = instruction;
                } else if (instruction.text) {
                    text = instruction.text;
                } else if (instruction.name) {
                    text = instruction.name;
                }
                
                return {
                    step: text.trim(),
                    section: 'MAIN'
                };
            });
        };

        return {
            name: recipe.name || 'Scraped Recipe',
            category: this.getDisplayValue('CATEGORIES', this.categorizeRecipe(recipe)),
            genre: this.getDisplayValue('GENRES', this.determineGenreFromRecipe(recipe)),
            method: this.getDisplayValue('METHODS', this.determineMethod(recipe)),
            protein: this.getDisplayValue('PROTEIN', this.determineProteinFromRecipe(recipe)),
            type: this.getDisplayValue('TYPES', this.determineTypeFromRecipe(recipe)),
            yields: this.parseYield(recipe.recipeYield || recipe.yield),
            prepTime: parseTime(recipe.prepTime),
            cookTime: parseTime(recipe.cookTime || recipe.totalTime),
            waitTime: { amount: 0, unit: 'MINUTE' },
            ingredients: parseIngredients(recipe.recipeIngredient),
            appliances: this.extractAppliancesFromInstructions(recipe.recipeInstructions),
            supplies: this.extractSuppliesFromInstructions(recipe.recipeInstructions),
            directions: parseInstructions(recipe.recipeInstructions),
            websites: [{
                label: recipe.name || '',
                link: recipe.url || '',
                authors: [recipe.author?.name || ''],
                finder: 'Kevin Ung'
            }]
        };
    }

    extractFromHtml($, url) {
        const getText = (selectors) => {
            for (const selector of selectors) {
                const element = $(selector).first();
                if (element.length && element.text().trim()) {
                    return element.text().trim();
                }
            }
            return '';
        };

        const getTextArray = (selectors) => {
            for (const selector of selectors) {
                const elements = $(selector);
                if (elements.length) {
                    return elements.map((_, el) => $(el).text().trim()).get().filter(text => text);
                }
            }
            return [];
        };

        const name = getText(this.commonSelectors.title) || 'Scraped Recipe';
        const ingredientTexts = getTextArray(this.commonSelectors.ingredients);
        const instructionTexts = getTextArray(this.commonSelectors.instructions);

        const mockRecipe = { name, recipeIngredient: ingredientTexts, recipeInstructions: instructionTexts };
        
        return {
            name,
            category: this.getDisplayValue('CATEGORIES', this.categorizeRecipe(mockRecipe)),
            genre: this.getDisplayValue('GENRES', this.determineGenreFromRecipe(mockRecipe)),
            method: this.getDisplayValue('METHODS', this.determineMethod(mockRecipe)),
            protein: this.getDisplayValue('PROTEIN', this.determineProteinFromRecipe(mockRecipe)),
            type: this.getDisplayValue('TYPES', this.determineTypeFromRecipe(mockRecipe)),
            yields: { amount: 4, unit: 'SERVING' },
            prepTime: { amount: 15, unit: 'MINUTE' },
            cookTime: { amount: 30, unit: 'MINUTE' },
            waitTime: { amount: 0, unit: 'MINUTE' },
            ingredients: ingredientTexts.map(text => this.parseIngredientText(text)),
            appliances: this.extractAppliancesFromText(instructionTexts.join(' ')),
            supplies: this.extractSuppliesFromText(instructionTexts.join(' ')),
            directions: instructionTexts.map(text => ({ step: text, section: 'MAIN' })),
            websites: [{
                label: 'Original Recipe',
                link: url,
                authors: ['Unknown'],
                finder: 'Web Scraper'
            }]
        };
    }

    getDisplayValue(constantType, key) {
        if (!key) return '';
        
        const constants = {
            CATEGORIES,
            GENRES,
            METHODS,
            PROTEIN,
            TYPES
        };
        
        const constantObj = constants[constantType];
        if (constantObj && constantObj[key]) {
            return constantObj[key];
        }
        
        return key; // Fallback to the key itself
    }

    parseIngredientText(text) {
        if (!text || text.trim() === '') {
            return { name: '', amount: '', unit: '', additionalDetails: '', section: 'MAIN' };
        }
        
        text = text.trim();
        
        // Enhanced patterns for various JSON-LD formats
        const patterns = [
            // Pattern 1: "2 (21 ounce) cans apple pie filling"
            /^(\d+(?:\.\d+)?)\s*\(([^)]+)\)\s*([a-zA-Z]+)\s*(.+)/,
            // Pattern 2: "1/2 cup butter, melted"  
            /^(\d+(?:\/\d+)?|\d*\.\d+)\s*([a-zA-Z]+)\s*(.+)/,
            // Pattern 3: "1 (15.25 ounce) package yellow cake mix"
            /^(\d+(?:\.\d+)?)\s*\(([^)]+)\)\s*(.+)/,
            // Pattern 4: Just ingredient name with parenthetical details
            /^([^(]+)\s*\(([^)]+)\)$/,
            // Pattern 5: Number + ingredient name
            /^(\d+(?:\.\d+)?)\s*(.+)/,
            // Pattern 6: Fraction + ingredient  
            /^(\d*\/\d+|\.\d+)\s*(.+)/
        ];

        for (const pattern of patterns) {
            const match = text.match(pattern);
            if (match) {
                let amount = '';
                let unit = '';
                let name = text; // Default to full text
                let additionalDetails = '';
                
                if (pattern.source.includes('\\(([^)]+)\\)\\s*([a-zA-Z]+)\\s*(.+)')) {
                    // Pattern 1: "2 (21 ounce) cans apple pie filling"
                    amount = this.parseAmount(match[1]) || match[1];
                    additionalDetails = match[2]; // "21 ounce"
                    unit = this.normalizeUnit(match[3]) || match[3];
                    name = match[4];
                } else if (pattern.source.includes('\\(([^)]+)\\)\\s*(.+)')) {
                    // Pattern 3: "1 (15.25 ounce) package yellow cake mix" 
                    amount = this.parseAmount(match[1]) || match[1];
                    additionalDetails = match[2]; // "15.25 ounce"
                    name = match[3];
                } else if (pattern.source.includes('([a-zA-Z]+)\\s*(.+)')) {
                    // Pattern 2: "1/2 cup butter, melted"
                    amount = this.parseAmount(match[1]) || match[1];
                    unit = this.normalizeUnit(match[2]) || match[2];
                    name = match[3];
                } else if (match.length >= 3) {
                    // Other patterns
                    amount = this.parseAmount(match[1]) || match[1];
                    name = match[2];
                }
                
                // Extract additional details from name if comma-separated
                if (name.includes(',')) {
                    const parts = name.split(',');
                    name = parts[0].trim();
                    if (!additionalDetails && parts[1]) {
                        additionalDetails = parts[1].trim();
                    }
                }
                
                return {
                    name: name.trim(),
                    amount: amount.toString(),
                    unit: unit.toString(),
                    additionalDetails: additionalDetails.trim(),
                    section: 'MAIN'
                };
            }
        }
        
        return {
            name: text.trim(),
            amount: '',
            unit: '',
            additionalDetails: '',
            section: 'MAIN'
        };
    }

    parseAmount(amountStr) {
        if (!amountStr) return '';
        
        const fractionMap = {
            '½': 0.5, '¼': 0.25, '¾': 0.75, '⅓': 0.33, '⅔': 0.67
        };
        
        for (const [fraction, decimal] of Object.entries(fractionMap)) {
            if (amountStr.includes(fraction)) {
                const number = amountStr.replace(fraction, '').trim();
                return number ? parseFloat(number) + decimal : decimal;
            }
        }
        
        const number = parseFloat(amountStr);
        return isNaN(number) ? '' : number;
    }

    normalizeUnit(unit) {
        if (!unit) return '';
        
        const unitLower = unit.toLowerCase();
        
        // Return simple string values for React frontend compatibility
        if (['cup', 'cups'].includes(unitLower)) return 'cup';
        if (['tablespoon', 'tablespoons', 'tbsp'].includes(unitLower)) return 'Tbsp';
        if (['teaspoon', 'teaspoons', 'tsp'].includes(unitLower)) return 'tsp';
        if (['pound', 'pounds', 'lb', 'lbs'].includes(unitLower)) return 'lb';
        if (['ounce', 'ounces', 'oz'].includes(unitLower)) return 'oz';
        if (['gallon', 'gallons', 'gal'].includes(unitLower)) return 'gal';
        if (['quart', 'quarts', 'qt'].includes(unitLower)) return 'qt';
        if (['pint', 'pints', 'pt'].includes(unitLower)) return 'pt';
        if (['fluid ounce', 'fluid ounces', 'fl oz', 'floz'].includes(unitLower)) return 'fl. oz';
        if (['liter', 'liters', 'litre', 'litres', 'l'].includes(unitLower)) return 'l';
        if (['milliliter', 'milliliters', 'millilitre', 'millilitres', 'ml'].includes(unitLower)) return 'ml';
        if (['kilogram', 'kilograms', 'kg'].includes(unitLower)) return 'kg';
        if (['gram', 'grams', 'g'].includes(unitLower)) return 'g';
        if (['pinch', 'pinches'].includes(unitLower)) return 'pinch';
        if (['dash', 'dashes'].includes(unitLower)) return 'dash';
        if (['drop', 'drops'].includes(unitLower)) return 'drop';
        if (['whole', 'entire'].includes(unitLower)) return 'whole';
        if (['half', 'halves'].includes(unitLower)) return 'half';
        if (['quarter', 'quarters'].includes(unitLower)) return 'quarter';
        if (['slice', 'slices'].includes(unitLower)) return 'slice';
        if (['piece', 'pieces'].includes(unitLower)) return 'piece';
        if (['clove', 'cloves'].includes(unitLower)) return 'clove';
        if (['sprig', 'sprigs'].includes(unitLower)) return 'sprig';
        if (['bunch', 'bunches'].includes(unitLower)) return 'bunch';
        if (['head', 'heads'].includes(unitLower)) return 'head';
        if (['ear', 'ears'].includes(unitLower)) return 'ear';
        if (['stalk', 'stalks'].includes(unitLower)) return 'stalk';
        if (['leaf', 'leaves'].includes(unitLower)) return 'leaf';
        
        // Return uppercase if no match found
        return unit.toUpperCase();
    }

    parseYield(yieldStr) {
        if (!yieldStr) return { amount: 4, unit: 'SERVING' };
        
        const match = yieldStr.toString().match(/(\d+)/);
        return {
            amount: match ? parseInt(match[1]) : 4,
            unit: 'SERVING'
        };
    }

    categorizeRecipe(recipe) {
        const name = (recipe.name || '').toLowerCase();
        
        // Check recipe categories and instructions to determine category
        if (name.includes('breakfast') || name.includes('pancake') || name.includes('waffle') || name.includes('oatmeal')) {
            return 'BREAKFAST';
        } else if (name.includes('lunch') || name.includes('sandwich') || name.includes('wrap')) {
            return 'LUNCH';
        } else if (name.includes('dessert') || name.includes('cake') || name.includes('cookie') || name.includes('pie') || name.includes('ice cream')) {
            return 'DESSERT';
        } else if (name.includes('appetizer') || name.includes('starter') || name.includes('finger food')) {
            return 'APPETIZER';
        } else if (name.includes('salad') || name.includes('side')) {
            return 'SIDE_DISH';
        } else if (name.includes('snack') || name.includes('chip') || name.includes('dip')) {
            return 'SNACK';
        } else if (name.includes('drink') || name.includes('smoothie') || name.includes('juice') || name.includes('lemonade')) {
            return 'DRINK';
        } else if (name.includes('sauce') || name.includes('gravy')) {
            return 'SAUCE';
        } else if (name.includes('dressing') || name.includes('vinaigrette')) {
            return 'DINNER';
        }
        
        return 'DINNER';
    }

    determineGenreFromRecipe(recipe) {
        const name = (recipe.name || '').toLowerCase();
        const ingredients = (recipe.recipeIngredient || []).join(' ').toLowerCase();
        const combinedText = `${name} ${ingredients}`;
        
        // Check for specific cuisine indicators
        if (combinedText.includes('italian') || combinedText.includes('pasta') || combinedText.includes('pizza') || combinedText.includes('marinara') || combinedText.includes('parmigiano') || combinedText.includes('basil')) {
            return 'ITALIAN';
        } else if (combinedText.includes('chinese') || combinedText.includes('soy sauce') || combinedText.includes('rice wine') || combinedText.includes('sesame oil') || combinedText.includes('wonton')) {
            return 'CHINESE';
        } else if (combinedText.includes('mexican') || combinedText.includes('taco') || combinedText.includes('salsa') || combinedText.includes('cilantro') || combinedText.includes('jalapeño') || combinedText.includes('cumin')) {
            return 'MEXICAN';
        } else if (combinedText.includes('indian') || combinedText.includes('curry') || combinedText.includes('garam masala') || combinedText.includes('turmeric') || combinedText.includes('naan') || combinedText.includes('basmati')) {
            return 'INDIAN';
        } else if (combinedText.includes('thai') || combinedText.includes('coconut milk') || combinedText.includes('fish sauce') || combinedText.includes('lemongrass') || combinedText.includes('pad thai')) {
            return 'THAI';
        } else if (combinedText.includes('japanese') || combinedText.includes('sushi') || combinedText.includes('miso') || combinedText.includes('teriyaki') || combinedText.includes('sake') || combinedText.includes('dashi')) {
            return 'JAPANESE';
        } else if (combinedText.includes('korean') || combinedText.includes('kimchi') || combinedText.includes('gochujang') || combinedText.includes('bulgogi')) {
            return 'KOREAN';
        } else if (combinedText.includes('french') || combinedText.includes('baguette') || combinedText.includes('herbes de provence') || combinedText.includes('cognac') || combinedText.includes('brie')) {
            return 'FRENCH';
        } else if (combinedText.includes('greek') || combinedText.includes('feta') || combinedText.includes('olive oil') || combinedText.includes('tzatziki') || combinedText.includes('oregano')) {
            return 'GREEK';
        } else if (combinedText.includes('mediterranean') || combinedText.includes('olives') || combinedText.includes('hummus') || combinedText.includes('tahini')) {
            return 'MEDITERRANEAN';
        } else if (combinedText.includes('southern') || combinedText.includes('bbq') || combinedText.includes('grits') || combinedText.includes('cornbread') || combinedText.includes('bourbon')) {
            return 'SOUTHERN';
        } else if (combinedText.includes('cajun') || combinedText.includes('creole') || combinedText.includes('jambalaya') || combinedText.includes('andouille')) {
            return 'CAJUN';
        } else if (combinedText.includes('german') || combinedText.includes('sauerkraut') || combinedText.includes('bratwurst') || combinedText.includes('schnitzel')) {
            return 'GERMAN';
        } else if (combinedText.includes('vietnamese') || combinedText.includes('pho') || combinedText.includes('nuoc mam') || combinedText.includes('rice paper')) {
            return 'VIETNAMESE';
        } else if (combinedText.includes('spanish') || combinedText.includes('paella') || combinedText.includes('saffron') || combinedText.includes('chorizo') || combinedText.includes('sherry')) {
            return 'SPANISH';
        } else if (combinedText.includes('middle eastern') || combinedText.includes('lebanese') || combinedText.includes('sumac') || combinedText.includes('pomegranate molasses')) {
            return 'MIDDLE_EASTERN';
        } else if (combinedText.includes('moroccan') || combinedText.includes('tagine') || combinedText.includes('harissa') || combinedText.includes('preserved lemon')) {
            return 'MOROCCAN';
        } else if (combinedText.includes('african') || combinedText.includes('berbere') || combinedText.includes('injera')) {
            return 'AFRICAN';
        } else if (combinedText.includes('brazilian') || combinedText.includes('feijoada') || combinedText.includes('cachaça')) {
            return 'BRAZILIAN';
        } else if (combinedText.includes('peruvian') || combinedText.includes('aji amarillo') || combinedText.includes('quinoa')) {
            return 'PERUVIAN';
        } else if (combinedText.includes('british') || combinedText.includes('fish and chips') || combinedText.includes('yorkshire pudding')) {
            return 'BRITISH';
        } else if (combinedText.includes('irish') || combinedText.includes('guinness') || combinedText.includes('colcannon')) {
            return 'IRISH';
        }
        
        return 'AMERICAN'; // Default to American
    }

    determineTypeFromRecipe(recipe) {
        const name = (recipe.name || '').toLowerCase();
        const category = this.categorizeRecipe(recipe);
        
        // Check recipe name for specific type indicators
        if (name.includes('pizza')) return 'PIZZA';
        if (name.includes('pasta')) return 'PASTA';
        if (name.includes('burger')) return 'BURGER';
        if (name.includes('sandwich')) return 'SANDWICH';
        if (name.includes('wrap')) return 'WRAP';
        if (name.includes('burrito')) return 'BURRITO';
        if (name.includes('taco')) return 'TACO';
        if (name.includes('salad')) return 'SALAD';
        if (name.includes('soup')) return 'SOUP';
        if (name.includes('curry')) return 'CURRY';
        if (name.includes('stir fry') || name.includes('stir-fry')) return 'STIR_FRY';
        if (name.includes('casserole')) return 'CASSEROLE';
        if (name.includes('noodle')) return 'NOODLE';
        if (name.includes('rice')) return 'RICE';
        if (name.includes('bread')) return 'BREAD';
        if (name.includes('cake')) return 'CAKE';
        if (name.includes('cookie')) return 'COOKIE';
        if (name.includes('brownie')) return 'BROWNIE';
        if (name.includes('muffin')) return 'MUFFIN';
        if (name.includes('cupcake')) return 'CUPCAKE';
        if (name.includes('pie')) return 'PIE';
        if (name.includes('tart')) return 'TART';
        if (name.includes('pastry')) return 'PASTRY';
        if (name.includes('biscuit')) return 'BISCUIT';
        if (name.includes('scone')) return 'SCONES';
        if (name.includes('ice cream')) return 'ICE_CREAM';
        if (name.includes('smoothie')) return 'SMOOTHIE';
        if (name.includes('drink')) return 'DRINK';
        if (name.includes('sauce')) return 'SAUCE';
        if (name.includes('dip')) return 'DIP';
        if (name.includes('candy')) return 'CANDY';
        if (name.includes('chocolate')) return 'CHOCOLATE';
        if (name.includes('fudge')) return 'FUDGE';
        
        // Determine type based on category
        if (category === 'DESSERT') {
            return 'DESSERT';
        } else if (category === 'SIDE_DISH') {
            return 'SIDE_DISH';
        } else if (category === 'APPETIZER') {
            return 'FINGER_FOOD';
        } else if (category === 'DRINK') {
            return 'DRINK';
        } else if (category === 'SAUCE') {
            return 'SAUCE';
        }
        
        return 'MAIN_COURSE'; // Default for main dishes
    }

    determineMethod(recipe) {
        const instructions = (recipe.recipeInstructions || []).join(' ').toLowerCase();
        const recipeName = (recipe.name || '').toLowerCase();
        const combinedText = `${instructions} ${recipeName}`;
        
        // Check for specific cooking methods based on instructions and recipe name
        if (combinedText.includes('bake') || combinedText.includes('oven') || combinedText.includes('baking')) {
            return 'BAKE';
        } else if (combinedText.includes('grill') || combinedText.includes('grilling') || combinedText.includes('barbecue')) {
            return 'GRILL';
        } else if (combinedText.includes('air fry') || combinedText.includes('air fryer')) {
            return 'AIR_FRY';
        } else if (combinedText.includes('deep fry') || combinedText.includes('deep fried')) {
            return 'DEEP_FRY';
        } else if (combinedText.includes('pan fry') || combinedText.includes('pan fried') || combinedText.includes('fry') || combinedText.includes('frying')) {
            return 'PAN_FRY';
        } else if (combinedText.includes('stir fry') || combinedText.includes('stir-fry')) {
            return 'STIR_FRY';
        } else if (combinedText.includes('roast') || combinedText.includes('roasting')) {
            return 'ROAST';
        } else if (combinedText.includes('broil') || combinedText.includes('broiling')) {
            return 'BROIL';
        } else if (combinedText.includes('steam') || combinedText.includes('steaming')) {
            return 'STEAM';
        } else if (combinedText.includes('boil') || combinedText.includes('boiling')) {
            return 'BOIL';
        } else if (combinedText.includes('simmer') || combinedText.includes('simmering')) {
            return 'SIMMER';
        } else if (combinedText.includes('saute') || combinedText.includes('sautéed')) {
            return 'SAUTE';
        } else if (combinedText.includes('slow cook') || combinedText.includes('crockpot') || combinedText.includes('slow cooker')) {
            return 'SLOW_COOK';
        } else if (combinedText.includes('pressure cook') || combinedText.includes('instant pot')) {
            return 'PRESSURE_COOK';
        } else if (combinedText.includes('microwave')) {
            return 'MICROWAVE';
        } else if (combinedText.includes('raw') || combinedText.includes('no cook')) {
            return 'RAW';
        } else if (combinedText.includes('chill') || combinedText.includes('chilled') || combinedText.includes('refrigerat')) {
            return 'CHILLED';
        } else if (combinedText.includes('freeze') || combinedText.includes('frozen')) {
            return 'FREEZE';
        }
        
        return 'BAKE'; // Default method
    }

    determineProteinFromRecipe(recipe) {
        const ingredients = (recipe.recipeIngredient || []).join(' ').toLowerCase();
        const recipeName = (recipe.name || '').toLowerCase();
        const combinedText = `${ingredients} ${recipeName}`;
        
        // Check for specific proteins in ingredients and recipe name
        if (combinedText.includes('chicken') || combinedText.includes('poultry')) {
            return 'CHICKEN';
        } else if (combinedText.includes('beef') || combinedText.includes('ground beef') || combinedText.includes('steak')) {
            return 'BEEF';
        } else if (combinedText.includes('pork') || combinedText.includes('bacon') || combinedText.includes('ham') || combinedText.includes('sausage')) {
            return 'PORK';
        } else if (combinedText.includes('turkey')) {
            return 'TURKEY';
        } else if (combinedText.includes('lamb')) {
            return 'LAMB';
        } else if (combinedText.includes('fish') || combinedText.includes('salmon') || combinedText.includes('cod') || combinedText.includes('tuna')) {
            return 'FISH';
        } else if (combinedText.includes('shrimp') || combinedText.includes('crab') || combinedText.includes('lobster') || combinedText.includes('scallop')) {
            return 'SEAFOOD';
        } else if (combinedText.includes('egg') || combinedText.includes('eggs')) {
            return 'EGG';
        } else if (combinedText.includes('tofu') || combinedText.includes('tempeh')) {
            return 'TOFU';
        } else if (combinedText.includes('bean') || combinedText.includes('beans') || combinedText.includes('black bean') || combinedText.includes('kidney bean')) {
            return 'BEAN';
        } else if (combinedText.includes('lentil') || combinedText.includes('lentils')) {
            return 'LENTILS';
        } else if (combinedText.includes('peanut') || combinedText.includes('peanuts') || combinedText.includes('peanut butter')) {
            return 'PEANUT';
        } else if (combinedText.includes('edamame')) {
            return 'EDAMAME';
        } else if (combinedText.includes('pine nut') || combinedText.includes('pine nuts')) {
            return 'PINE_NUT';
        } else if (combinedText.includes('chocolate') && (combinedText.includes('dessert') || combinedText.includes('cake') || combinedText.includes('cookie'))) {
            return 'CHOCOLATE';
        }
        
        return ''; // No protein detected
    }

    extractAppliancesFromInstructions(instructions) {
        const text = (instructions || []).join(' ').toLowerCase();
        return this.extractAppliancesFromText(text);
    }

    extractSuppliesFromInstructions(instructions) {
        const text = (instructions || []).join(' ').toLowerCase();
        return this.extractSuppliesFromText(text);
    }

    extractAppliancesFromText(text) {
        const appliances = [];
        const applianceKeywords = {
            'oven': { name: 'oven' },
            'stove': { name: 'stove' },
            'microwave': { name: 'microwave' },
            'grill': { name: 'grill' }
        };
        
        for (const [keyword, appliance] of Object.entries(applianceKeywords)) {
            if (text.includes(keyword) && !appliances.some(a => a.name === appliance.name)) {
                appliances.push(appliance);
            }
        }
        
        return appliances;
    }

    extractSuppliesFromText(text) {
        const supplies = [];
        const supplyKeywords = {
            'bowl': { name: 'bowl' },
            'pan': { name: 'pan' },
            'pot': { name: 'pot' },
            'knife': { name: 'knife' }
        };
        
        for (const [keyword, supply] of Object.entries(supplyKeywords)) {
            if (text.includes(keyword) && !supplies.some(s => s.name === supply.name)) {
                supplies.push(supply);
            }
        }
        
        return supplies;
    }
}

module.exports = RecipeWebScraper;