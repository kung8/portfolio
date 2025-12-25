const fs = require('fs');
const path = require('path');

class RecipeFileGenerator {
    constructor() {
        this.recipesDir = path.join(__dirname, '../data/recipes');
        this.templatePath = path.join(this.recipesDir, 'template.js');
    }

    async generateRecipeFile(recipeData) {
        try {
            // Create filename from recipe name
            const baseFilename = this.createFilename(recipeData.name);
            const finalFilename = this.resolveFilenameConflict(baseFilename);
            const filepath = path.join(this.recipesDir, `${finalFilename}.js`);

            // Generate the recipe file content
            const fileContent = this.generateFileContent(recipeData);

            // Write the file
            fs.writeFileSync(filepath, fileContent, 'utf8');

            console.log(`Recipe file created: ${finalFilename}.js`);
            return {
                success: true,
                filename: `${finalFilename}.js`,
                filePath: filepath,
                message: `Recipe file ${finalFilename}.js created successfully`
            };

        } catch (error) {
            console.error('Error generating recipe file:', error);
            throw error;
        }
    }

    resolveFilenameConflict(baseFilename) {
        let filename = baseFilename;
        let counter = 1;

        // Keep checking and incrementing until we find an available filename
        while (fs.existsSync(path.join(this.recipesDir, `${filename}.js`))) {
            filename = `${baseFilename}-${counter}`;
            counter++;
        }

        return filename;
    }

    createFilename(name) {
        return name
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
            .replace(/\s+/g, '-') // Replace spaces with hyphens
            .replace(/-+/g, '-') // Replace multiple hyphens with single
            .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
    }

    generateFileContent(data) {
        return `${this.generateImageImports(data)}
const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');

module.exports = {
    wip: true,
    cardName: '${this.escapeString(data.name)}',
    name: '${this.escapeString(data.name)}',
    img: '',
    available: true,
    recommended: false,
    category: ${this.formatConstantArray('CATEGORIES', data.category.split(' ').join('_').toUpperCase(), 'DINNER')},
    genre: ${this.formatConstantArray('GENRES', data.genre.split(' ').join('_').toUpperCase(), 'AMERICAN')},
    method: ${this.formatConstantArray('METHODS', data.method.split(' ').join('_').toUpperCase(), 'BAKE')},
    protein: ${this.formatConstantArray('PROTEIN', data.protein.split(' ').join('_').toUpperCase(), '')},
    type: ${this.formatConstantArray('TYPES', data.type.split(' ').join('_').toUpperCase(), 'MAIN_COURSE')},
    yields: { amount: ${data.yields?.amount || 4}, unit: YIELD_UNITS.${data.yields?.unit || 'SERVING'} },
    prepTime: { amount: ${data.prepTime?.amount || 15}, unit: TIME_UNITS.${data.prepTime?.unit || 'MINUTE'} },
    cookTime: { amount: ${data.cookTime?.amount || 30}, unit: TIME_UNITS.${data.cookTime?.unit || 'MINUTE'} },
    waitTime: { amount: ${data.waitTime?.amount || 0}, unit: TIME_UNITS.${data.waitTime?.unit || 'MINUTE'} },
    websites: [
        ${this.generateWebsites(data.websites)}
    ],
    ingredients: [
        ${this.generateIngredients(data.ingredients)}
    ],
    appliances: [
        ${this.generateAppliances(data.appliances)}
    ],
    supplies: [
        ${this.generateSupplies(data.supplies)}
    ],
    directions: [
        ${this.generateDirections(data.directions)}
    ],
    notes: [
        ${this.generateNotes(data.notes)}
    ],
    store: [
        // {
        //     duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
        //     location: STORAGE_LOCATION.FRIDGE,
        //     container: STORAGE_CONTAINER.AIRTIGHT,
        // },
    ],
    reheat: [
        // {
        //     method: REHEAT_METHODS.BAKE,
        //     instruction: '',
        // },
    ],
    mealPrep: true,
};`;
    }

    generateImageImports(_data) {
        // For now, return empty string. Could be enhanced to suggest image imports
        return '// Add image imports here if available\n';
    }

    generateImports(_data) {
        // Don't import individual ingredients - use simple objects instead
        // This avoids issues with non-existent ingredient constants
        return [];
    }

    nameToConstant(name) {
        return name
            .toUpperCase()
            .replace(/[^A-Z0-9\s]/g, '') // Remove special characters
            .replace(/\s+/g, '_') // Replace spaces with underscores
            .replace(/_+/g, '_') // Replace multiple underscores with single
            .replace(/^_|_$/g, ''); // Remove leading/trailing underscores
    }

    generateWebsites(websites) {
        if (!websites || websites.length === 0) {
            return "// { label: '', link: '', authors: [''], finder: 'Kevin Ung' }";
        }

        return websites.map(website =>
            `{ label: '${this.escapeString(website.label)}', link: '${website.link}', authors: [${website.authors.map(author => `'${this.escapeString(author)}'`).join(', ')}], finder: 'Kevin Ung' }`
        ).join(',\n        ');
    }

    generateIngredients(ingredients) {
        if (!ingredients || ingredients.length === 0) {
            return '// Add ingredients here';
        }

        return ingredients.map(ingredient => {
            const name = this.escapeString(ingredient.name);
            const amount = this.convertAmountToNumber(ingredient.amount);
            const unit = ingredient.unit ? `INGREDIENT_UNITS.${ingredient.unit}` : "''";
            const additionalDetails = ingredient.additionalDetails || '';
            const section = ingredient.section ? `SECTIONS.` + ingredient.section.split(' ').join('_').toUpperCase() : 'SECTIONS.MAIN';

            return `{ name: '${name}', amount: ${amount}, unit: ${unit}, additionalDetails: '${this.escapeString(additionalDetails)}', section: ${section} }`;
        }).join(',\n        ');
    }

    formatConstantArray(constantType, value, defaultValue) {
        if (!value || value === '') {
            return defaultValue ? `[${constantType}.${defaultValue}]` : '[]';
        }

        // Handle arrays of values
        if (Array.isArray(value)) {
            const validValues = value.filter(v => v && v !== '');
            if (validValues.length === 0) {
                return defaultValue ? `[${constantType}.${defaultValue}]` : '[]';
            }
            return `[${validValues.map(v => `${constantType}.${v}`).join(', ')}]`;
        }

        // Handle single values - convert to array format
        return `[${constantType}.${value}]`;
    }

    convertAmountToNumber(amount) {
        if (!amount || amount === '') return "''";
        if (typeof amount === 'number') return amount;

        const amountStr = amount.toString().trim();

        // Convert mixed fractions to improper fractions as mathematical expressions
        const mixedMatch = amountStr.match(/^(\d+)\s+(\d+)\/(\d+)$/);
        if (mixedMatch) {
            const whole = parseInt(mixedMatch[1]);
            const numerator = parseInt(mixedMatch[2]);
            const denominator = parseInt(mixedMatch[3]);
            const improperNumerator = (whole * denominator) + numerator;
            return `${improperNumerator} / ${denominator}`;
        }

        // Convert simple fractions to mathematical expressions
        if (/^\d+\/\d+$/.test(amountStr)) {
            const [numerator, denominator] = amountStr.split('/');
            return `${numerator} / ${denominator}`;
        }

        // Handle regular numbers (integers or decimals)
        const number = parseFloat(amountStr);
        return isNaN(number) ? "''" : number;
    }

    generateAppliances(appliances) {
        if (!appliances || appliances.length === 0) {
            return '// Add appliances here if needed';
        }

        return appliances.map(appliance => {
            const constantName = this.nameToConstant(appliance.name);
            return constantName;
        }).join(',\n        ');
    }

    generateSupplies(supplies) {
        if (!supplies || supplies.length === 0) {
            return '// Add supplies here if needed';
        }

        return supplies.map(supply => {
            const constantName = this.nameToConstant(supply.name);
            return constantName;
        }).join(',\n        ');
    }

    generateNotes(notes) {
        if (!notes || notes.length === 0) {
            return '// Add any additional notes here';
        }

        return notes.map(note => {
            const noteText = typeof note === 'string' ? note : (note.note || note);
            return `        { note: '${noteText.replace(/'/g, "\\'")}' }`;
        }).join(',\n');
    }

    generateDirections(directions) {
        if (!directions || directions.length === 0) {
            return "{ step: 'Instructions were not clearly detected. Please review and add steps manually.', section: SECTIONS.MAIN }";
        }

        return directions.map(direction => {
            const step = this.escapeString(direction.step);
            const section = direction.section ? `SECTIONS.` + direction.section.split(' ').join('_').toUpperCase() : 'SECTIONS.MAIN';
            return `{ step: \`${step}\`, section: ${section} }`;
        }).join(',\n        ');
    }

    escapeString(str) {
        if (!str) return '';
        return str.replace(/'/g, "\\'").replace(/`/g, '\\`');
    }

    // Utility method to validate recipe data
    validateRecipeData(data) {
        const required = ['name'];
        const missing = required.filter(field => !data[field]);

        if (missing.length > 0) {
            throw new Error(`Missing required fields: ${missing.join(', ')}`);
        }

        return true;
    }
}

module.exports = RecipeFileGenerator;