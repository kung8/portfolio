const Tesseract = require('tesseract.js');

class RecipeImageParser {
    constructor() {
        this.commonMeasurements = [
            'cup', 'cups', 'tablespoon', 'tablespoons', 'tbsp', 'teaspoon', 'teaspoons', 'tsp',
            'pound', 'pounds', 'lb', 'lbs', 'ounce', 'ounces', 'oz', 'gram', 'grams', 'g',
            'kilogram', 'kilograms', 'kg', 'liter', 'liters', 'l', 'milliliter', 'milliliters', 'ml',
            'pint', 'pints', 'pt', 'quart', 'quarts', 'qt', 'gallon', 'gallons', 'gal',
            'inch', 'inches', 'in', 'piece', 'pieces', 'slice', 'slices', 'clove', 'cloves'
        ];

        this.cookingActions = [
            'preheat', 'bake', 'cook', 'boil', 'simmer', 'fry', 'sauté', 'roast', 'grill',
            'mix', 'stir', 'whisk', 'beat', 'fold', 'chop', 'dice', 'slice', 'mince',
            'heat', 'add', 'combine', 'season', 'serve', 'garnish', 'drain', 'rinse'
        ];

        this.timeKeywords = ['minutes', 'mins', 'hours', 'hrs', 'seconds', 'secs'];
    }

    async extractTextFromImage(imagePath) {
        try {
            console.log('Starting OCR processing...');
            const { data: { text } } = await Tesseract.recognize(imagePath, 'eng', {
                logger: m => console.log('OCR Progress:', m),
                tessedit_pageseg_mode: Tesseract.PSM.AUTO,
                tessedit_ocr_engine_mode: Tesseract.OEM.LSTM_ONLY,
                preserve_interword_spaces: '1'
            });
            
            console.log('Raw OCR text:', text);
            return this.cleanOcrText(text);
        } catch (error) {
            console.error('OCR Error:', error);
            throw new Error('Failed to extract text from image');
        }
    }

    cleanOcrText(text) {
        // Clean up common OCR errors
        let cleaned = text
            .replace(/\|/g, 'I')  // Replace pipes with I
            .replace(/[""'']/g, '"')  // Normalize quotes
            .replace(/[–—]/g, '-')  // Normalize dashes
            .replace(/\s+/g, ' ')  // Normalize whitespace
            .replace(/(\d)\s+([/])\s+(\d)/g, '$1$2$3')  // Fix fractional spacing: "1 / 2" -> "1/2"
            .replace(/(\d)\s*([½¼¾⅓⅔⅛⅜⅝⅞])/g, '$1$2')  // Join numbers with fractions
            .trim();

        return cleaned;
    }

    parseRecipeText(text) {
        const lines = text.split('\n').filter(line => line.trim().length > 0);
        
        const recipe = {
            name: this.extractRecipeName(lines),
            category: 'DINNER', // Default category
            genre: 'AMERICAN', // Default genre
            method: 'BAKE', // Default method
            protein: '', // Will be determined from ingredients
            type: 'MAIN_DISH',
            yields: { amount: 4, unit: 'SERVING' },
            prepTime: this.extractTime(text, 'prep'),
            cookTime: this.extractTime(text, 'cook'),
            waitTime: { amount: 0, unit: 'MINUTE' },
            ingredients: this.extractIngredients(lines),
            appliances: this.extractAppliances(text),
            supplies: this.extractSupplies(text),
            directions: this.extractDirections(lines)
        };

        // Try to determine protein from ingredients
        recipe.protein = this.determineProtein(recipe.ingredients);
        
        return recipe;
    }

    extractRecipeName(lines) {
        // Look for recipe title in first few lines, often the first or second line
        for (let i = 0; i < Math.min(3, lines.length); i++) {
            const line = lines[i].trim();
            
            // Skip very short lines or lines that look like headers/categories
            if (line.length < 3 || /^(serves?|prep|cook|ingredients?|directions?)$/i.test(line)) {
                continue;
            }
            
            // Check if it's not an ingredient (no numbers/measurements)
            if (!this.looksLikeIngredient(line) && line.length >= 5 && line.length <= 60) {
                // Clean up common OCR artifacts
                let cleanedTitle = line
                    .replace(/[|]/g, 'I')
                    .replace(/^\d+\.\s*/, '') // Remove leading numbers
                    .trim();
                
                if (cleanedTitle.length >= 5) {
                    return cleanedTitle;
                }
            }
        }
        return 'Extracted Recipe';
    }

    extractTime(text, type) {
        const patterns = {
            prep: /prep(?:aration)?\s*(?:time)?:?\s*(\d+)\s*(minutes?|mins?|hours?|hrs?)/i,
            cook: /cook(?:ing)?\s*(?:time)?:?\s*(\d+)\s*(minutes?|mins?|hours?|hrs?)/i
        };

        const match = text.match(patterns[type]);
        if (match) {
            const amount = parseInt(match[1]);
            const unit = match[2].toLowerCase();
            const timeUnit = unit.includes('hour') || unit.includes('hr') ? 'HOUR' : 'MINUTE';
            return { amount, unit: timeUnit };
        }
        
        return { amount: type === 'prep' ? 15 : 30, unit: 'MINUTE' }; // Default values
    }

    extractIngredients(lines) {
        const ingredients = [];
        let currentSection = 'MAIN';
        
        for (const line of lines) {
            const cleanLine = line.trim();
            
            // Check for ingredients section headers (including sub-sections)
            if (/^(ingredients?|marinade|chicken|sauce|honey|crystal hot honey|coating|batter)$/i.test(cleanLine) && cleanLine.length < 30) {
                // Determine section type
                if (/marinade/i.test(cleanLine)) currentSection = 'MARINADE';
                else if (/chicken/i.test(cleanLine)) currentSection = 'MAIN';
                else if (/sauce|honey/i.test(cleanLine)) currentSection = 'SAUCE';
                else if (/coating|batter/i.test(cleanLine)) currentSection = 'COATING';
                continue;
            }
            
            // Stop if we hit a directions section
            if (/^(\d+\.|directions?|instructions?|steps?|method|make|heat|cook|bake|fry|place|combine|whisk|in a)/i.test(cleanLine)) {
                break; // Stop processing ingredients when we hit directions
            }
            
            // Skip section headers like "SERVES 4 TO 6"
            if (/^serves?\s+\d+/i.test(cleanLine)) {
                continue;
            }
            
            if (this.looksLikeIngredient(cleanLine)) {
                const ingredient = this.parseIngredientLine(cleanLine);
                if (ingredient && ingredient.name.length > 2) {
                    ingredient.section = currentSection;
                    ingredients.push(ingredient);
                }
            }
        }
        
        return ingredients;
    }

    looksLikeIngredient(line) {
        const cleanLine = line.trim().toLowerCase();
        
        // Skip very short lines or obvious non-ingredients
        if (cleanLine.length < 3) return false;
        if (/^(step|directions?|instructions?|notes?|serves?|prep|cook|total)/.test(cleanLine)) return false;
        
        // Check if line starts with a number or fraction
        if (/^\d/.test(cleanLine) || /^[½¼¾⅓⅔⅛⅜⅝⅞]/.test(cleanLine)) {
            return true;
        }
        
        // Check if line contains common measurements
        for (const measurement of this.commonMeasurements) {
            if (cleanLine.includes(' ' + measurement.toLowerCase()) || cleanLine.startsWith(measurement.toLowerCase())) {
                return true;
            }
        }
        
        return false;
    }

    parseIngredientLine(line) {
        const cleanLine = line.trim();
        
        // Enhanced pattern matching for ingredient lines
        const patterns = [
            // Pattern: "2 cups all-purpose flour"
            /^(\d+(?:[½¼¾⅓⅔⅛⅜⅝⅞])?(?:\/\d+)?)\s+((?:cup|tablespoon|teaspoon|pound|ounce|gram|kilogram|liter|milliliter|pint|quart|gallon|tsp|tbsp|lb|oz|g|kg|l|ml|pt|qt|gal)s?)\s+(.+)/i,
            // Pattern: "1½ cups flour"
            /^(\d*[½¼¾⅓⅔⅛⅜⅝⅞])\s+((?:cup|tablespoon|teaspoon|pound|ounce|gram|kilogram|liter|milliliter|pint|quart|gallon|tsp|tbsp|lb|oz|g|kg|l|ml|pt|qt|gal)s?)\s+(.+)/i,
            // Pattern: "Salt to taste" or "6 boneless chicken thighs"
            /^(\d+)?\s*(.+?)(?:\s+(to\s+taste|finely\s+chopped|diced|minced|sliced|grated|freshly\s+ground|ground).*)?$/i
        ];

        for (let i = 0; i < patterns.length; i++) {
            const match = cleanLine.match(patterns[i]);
            if (match) {
                let amount = '', unit = '', name = '', additionalDetails = '';
                
                if (i < 2) {
                    // First two patterns have clear amount, unit, name structure
                    amount = this.parseAmount(match[1]) || '';
                    unit = this.normalizeUnit(match[2]) || '';
                    name = match[3]?.trim() || '';
                } else {
                    // Third pattern is more flexible
                    amount = match[1] ? this.parseAmount(match[1]) : '';
                    name = match[2]?.trim() || '';
                    additionalDetails = match[3]?.trim() || '';
                }
                
                // Extract additional details (like "chopped", "diced", etc.)
                const detailsMatch = name.match(/,\s*(.+)$/);
                if (detailsMatch) {
                    additionalDetails = detailsMatch[1];
                    name = name.replace(/,\s*.+$/, '');
                }
                
                return {
                    name: name.trim(),
                    amount: amount,
                    unit: unit,
                    additionalDetails: additionalDetails.trim(),
                    section: 'MAIN'
                };
            }
        }
        
        // If no pattern matches, return the line as ingredient name
        return {
            name: cleanLine,
            amount: '',
            unit: '',
            additionalDetails: '',
            section: 'MAIN'
        };
    }

    parseAmount(amountStr) {
        if (!amountStr) return '';
        
        const cleanAmount = amountStr.toString().trim();
        
        // Convert mixed fractions to improper fractions as mathematical expressions
        const mixedMatch = cleanAmount.match(/^(\d+)\s+(\d+)\/(\d+)$/);
        if (mixedMatch) {
            const whole = parseInt(mixedMatch[1]);
            const numerator = parseInt(mixedMatch[2]);
            const denominator = parseInt(mixedMatch[3]);
            const improperNumerator = (whole * denominator) + numerator;
            return `${improperNumerator}/${denominator}`;
        }
        
        // Keep simple fractions as mathematical expressions when generating files
        if (/^\d+\/\d+$/.test(cleanAmount)) {
            return cleanAmount;
        }
        
        // Handle Unicode fractions - convert to improper fractions if mixed
        const unicodeFractionMap = {
            '½': '1/2', '¼': '1/4', '¾': '3/4', '⅓': '1/3', '⅔': '2/3',
            '⅛': '1/8', '⅜': '3/8', '⅝': '5/8', '⅞': '7/8'
        };
        
        for (const [unicode, textFraction] of Object.entries(unicodeFractionMap)) {
            if (cleanAmount.includes(unicode)) {
                const number = cleanAmount.replace(unicode, '').trim();
                if (number) {
                    // Convert mixed unicode fraction to improper fraction
                    const whole = parseInt(number);
                    const [fNum, fDenom] = textFraction.split('/').map(n => parseInt(n));
                    const improperNumerator = (whole * fDenom) + fNum;
                    return `${improperNumerator}/${fDenom}`;
                } else {
                    return textFraction;
                }
            }
        }
        
        // Handle regular numbers (integers and decimals)
        const number = parseFloat(cleanAmount);
        return isNaN(number) ? '' : number;
    }

    normalizeUnit(unit) {
        if (!unit) return '';
        
        const unitMap = {
            'cup': 'CUP', 'cups': 'CUP',
            'tablespoon': 'TABLESPOON', 'tablespoons': 'TABLESPOON', 'tbsp': 'TABLESPOON',
            'teaspoon': 'TEASPOON', 'teaspoons': 'TEASPOON', 'tsp': 'TEASPOON',
            'pound': 'POUND', 'pounds': 'POUND', 'lb': 'POUND', 'lbs': 'POUND',
            'ounce': 'OUNCE', 'ounces': 'OUNCE', 'oz': 'OUNCE',
            'gram': 'GRAM', 'grams': 'GRAM', 'g': 'GRAM',
            'kilogram': 'KILOGRAM', 'kg': 'KILOGRAM',
            'piece': 'PIECE', 'pieces': 'PIECE',
            'slice': 'SLICE', 'slices': 'SLICE',
            'clove': 'CLOVE', 'cloves': 'CLOVE'
        };
        
        return unitMap[unit.toLowerCase()] || unit.toUpperCase();
    }

    extractDirections(lines) {
        const directions = [];
        let inInstructions = false;
        
        for (const line of lines) {
            const cleanLine = line.trim();
            
            // Check if we've reached the instructions section
            if (/^(instructions?|directions?|method|steps?):?$/i.test(cleanLine)) {
                inInstructions = true;
                continue;
            }
            
            // Skip ingredient lines if we haven't reached instructions
            if (!inInstructions && this.looksLikeIngredient(cleanLine)) {
                continue;
            }
            
            // Check if this looks like an instruction
            if (this.looksLikeInstruction(cleanLine)) {
                inInstructions = true;
                directions.push({
                    step: cleanLine.replace(/^\d+\.?\s*/, ''), // Remove step numbers
                    section: 'MAIN'
                });
            }
        }
        
        // If no directions found, add a placeholder
        if (directions.length === 0) {
            directions.push({
                step: 'Instructions not clearly detected from image. Please review and add manually.',
                section: 'MAIN'
            });
        }
        
        return directions;
    }

    looksLikeInstruction(line) {
        const cleanLine = line.toLowerCase();
        
        // Check if line starts with a number (step number)
        if (/^\d+\.?\s/.test(line)) {
            return true;
        }
        
        // Check if line contains cooking actions
        for (const action of this.cookingActions) {
            if (cleanLine.includes(action)) {
                return true;
            }
        }
        
        // Check if line is long enough to be an instruction
        return line.length > 20 && !this.looksLikeIngredient(line);
    }

    extractAppliances(text) {
        const appliances = [];
        const applianceKeywords = {
            'oven': { name: 'oven' },
            'stove': { name: 'stove' },
            'stovetop': { name: 'stove' },
            'microwave': { name: 'microwave' },
            'grill': { name: 'grill' },
            'air fryer': { name: 'air fryer' },
            'slow cooker': { name: 'slow cooker' },
            'pressure cooker': { name: 'pressure cooker' },
            'stand mixer': { name: 'stand mixer' },
            'blender': { name: 'blender' },
            'food processor': { name: 'food processor' }
        };
        
        const lowerText = text.toLowerCase();
        for (const [keyword, appliance] of Object.entries(applianceKeywords)) {
            if (lowerText.includes(keyword) && !appliances.some(a => a.name === appliance.name)) {
                appliances.push(appliance);
            }
        }
        
        return appliances;
    }

    extractSupplies(text) {
        const supplies = [];
        const supplyKeywords = {
            'mixing bowl': { name: 'mixing bowl' },
            'bowl': { name: 'bowl' },
            'baking sheet': { name: 'baking sheet' },
            'baking pan': { name: 'baking pan' },
            'skillet': { name: 'skillet' },
            'pan': { name: 'pan' },
            'pot': { name: 'pot' },
            'knife': { name: 'knife' },
            'cutting board': { name: 'cutting board' },
            'measuring cups': { name: 'measuring cups' },
            'measuring spoons': { name: 'measuring spoons' },
            'whisk': { name: 'whisk' },
            'spatula': { name: 'spatula' },
            'wooden spoon': { name: 'wooden spoon' }
        };
        
        const lowerText = text.toLowerCase();
        for (const [keyword, supply] of Object.entries(supplyKeywords)) {
            if (lowerText.includes(keyword) && !supplies.some(s => s.name === supply.name)) {
                supplies.push(supply);
            }
        }
        
        return supplies;
    }

    determineProtein(ingredients) {
        const proteinMap = {
            'chicken': 'CHICKEN',
            'beef': 'BEEF',
            'pork': 'PORK',
            'fish': 'FISH',
            'salmon': 'FISH',
            'shrimp': 'SEAFOOD',
            'turkey': 'TURKEY',
            'lamb': 'LAMB',
            'tofu': 'TOFU',
            'eggs': 'EGG'
        };
        
        for (const ingredient of ingredients) {
            const name = ingredient.name.toLowerCase();
            for (const [keyword, protein] of Object.entries(proteinMap)) {
                if (name.includes(keyword)) {
                    return protein;
                }
            }
        }
        
        return ''; // No protein detected
    }
}

module.exports = RecipeImageParser;