const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const { CATEGORIES, GENRES, METHODS, PROTEIN, TYPES, YIELD_UNITS, TIME_UNITS } = require('./data/recipes/constants');

const templateFilePath = path.join(__dirname, '..', 'server', 'data', 'recipes', 'template.js');
const recipesFilePath = path.join(__dirname, '..', 'server', 'data', 'recipes.js');

const convertValuesToKeys = (obj, selectedValues, objPrefix) => {
    const selectedOptions = Object.entries(obj);
    return selectedValues.map(option => objPrefix + selectedOptions.find(([_, value]) => value === option)[0]);
}

const convertUnitToKey = (obj, selectedUnit, objPrefix) => {
    const selectedOptions = Object.entries(obj);
    return objPrefix + selectedOptions.find(option => option[1].s === selectedUnit)[0];
}

const convertKebabToCamelCase = (str) => {
    return str.replace(/-./g, (match) => match.charAt(1).toUpperCase());
}

const createPrompt = async () => {
    if (!fs.existsSync(templateFilePath)) {
        console.log(`Template file ${templateFilePath} does not exist.`);
        return;
    }

    let filePath;
    await inquirer.prompt([
        {
            type: 'input',
            name: 'fileName',
            message: 'Enter recipe file name:',
            validate: (fileName) => {
                filePath = path.join(__dirname, '..', 'server', 'data', 'recipes', `${fileName}.js`);
                if (fs.existsSync(filePath)) {
                    return `${fileName}.js already exists. Please enter a new file name.`
                }

                return true;
            }
        },
        {
            type: 'input',
            name: 'cardName',
            message: 'Enter recipe card name:',
            validate: (name) => {
                if (!name) {
                    return 'Please enter a recipe name.';
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'name',
            message: 'Enter recipe name:',
        },
        {
            type: 'input',
            name: 'author',
            message: 'Enter recipe author (optional):',
        },
        {
            type: 'input',
            name: 'finder',
            message: 'Enter recipe finder (optional):',
        },
        {
            type: 'checkbox',
            name: 'categories',
            message: 'Select recipe categories:',
            choices: Object.values(CATEGORIES),
            validate: (answer) => {
                if (answer.length < 1) {
                    return 'You must choose at least one category.';
                }
                return true;
            }
        },
        {
            type: 'checkbox',
            name: 'genres',
            message: 'Select recipe genres:',
            choices: Object.values(GENRES),
            validate: (answer) => {
                if (answer.length < 1) {
                    return 'You must choose at least one category.';
                }
                return true;
            }
        },
        {
            type: 'checkbox',
            name: 'methods',
            message: 'Select recipe methods of cooking:',
            choices: Object.values(METHODS),
            validate: (answer) => {
                if (answer.length < 1) {
                    return 'You must choose at least one category.';
                }
                return true;
            }
        },
        {
            type: 'checkbox',
            name: 'protein',
            message: 'Select recipe protein (optional):',
            choices: Object.values(PROTEIN),
        },
        {
            type: 'checkbox',
            name: 'types',
            message: 'Select recipe types:',
            choices: Object.values(TYPES),
            validate: (answer) => {
                if (answer.length < 1) {
                    return 'You must choose at least one category.';
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'yields',
            message: 'How much does it yield?',
            validate: (yields) => {
                const formattedYields = yields.replace(/[a-zA-Z]/g, '');
                if (yields !== formattedYields || isNaN(Number(eval(formattedYields)))) {
                    return 'Please enter a valid number.';
                }
                return true;
            }
        },
        {
            type: 'list',
            name: 'yieldUnit',
            message: 'Select yield unit:',
            choices: Object.values(YIELD_UNITS).map(unit => unit.s),
            default: YIELD_UNITS.SERVING.s,
        },
        {
            type: 'input',
            name: 'prepTime',
            message: 'How long does it take to prep?',
            validate: (yields) => {
                const formattedYields = yields.replace(/[a-zA-Z]/g, '');
                if (yields !== formattedYields || isNaN(Number(eval(formattedYields)))) {
                    return 'Please enter a valid number.';
                }
                return true;
            }
        },
        {
            type: 'list',
            name: 'prepTimeUnit',
            message: 'Select prep time unit:',
            choices: Object.values(TIME_UNITS).map(unit => unit.s),
            default: TIME_UNITS.MINUTE.s,
        },
        {
            type: 'input',
            name: 'cookTime',
            message: 'How long does it take to cook?',
            validate: (yields) => {
                const formattedYields = yields.replace(/[a-zA-Z]/g, '');
                if (yields !== formattedYields || isNaN(Number(eval(formattedYields)))) {
                    return 'Please enter a valid number.';
                }
                return true;
            }
        },
        {
            type: 'list',
            name: 'cookTimeUnit',
            message: 'Select cook time unit:',
            choices: Object.values(TIME_UNITS).map(unit => unit.s),
            default: TIME_UNITS.MINUTE.s,
        },
        {
            type: 'input',
            name: 'waitTime',
            message: 'How long do you need to wait?',
            validate: (yields) => {
                const formattedYields = yields.replace(/[a-zA-Z]/g, '');
                if (yields !== formattedYields || isNaN(Number(eval(formattedYields)))) {
                    return 'Please enter a valid number.';
                }
                return true;
            }
        },
        {
            type: 'list',
            name: 'waitTimeUnit',
            message: 'Select wait time unit:',
            choices: Object.values(TIME_UNITS).map(unit => unit.s),
            default: TIME_UNITS.MINUTE.s,
        },
        {
            type: 'input',
            name: 'label',
            message: 'Enter any websites displayed label:',
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter website link:',
        },
        {
            type: 'confirm',
            name: 'separated',
            message: 'Is the recipe separated?',
            default: true,
            validate: (separated) => {
                if (separated !== 'y' && separated !== 'n') {
                    return 'Please enter y or n.';
                }
                return true;
            }
        },
        {
            type: 'confirm',
            name: 'available',
            message: 'Is the recipe available?',
            default: true,
            validate: (available) => {
                if (available !== 'y' && available !== 'n') {
                    return 'Please enter y or n.';
                }
                return true;
            }
        },
    ]).then(async (answers) => {
        const template = fs.readFileSync(templateFilePath, 'utf8');
        const matchingCategories = convertValuesToKeys(CATEGORIES, answers.categories, 'CATEGORIES.');
        const matchingGenres = convertValuesToKeys(GENRES, answers.genres, 'GENRES.');
        const matchingMethods = convertValuesToKeys(METHODS, answers.methods, 'METHODS.');
        const matchingProtein = convertValuesToKeys(PROTEIN, answers.protein, 'PROTEIN.');
        const matchingTypes = convertValuesToKeys(TYPES, answers.types, 'TYPES.');
        const matchingYieldUnit = convertUnitToKey(YIELD_UNITS, answers.yieldUnit, 'YIELD_UNITS.');
        const matchingPrepTimeUnit = convertUnitToKey(TIME_UNITS, answers.prepTimeUnit, 'TIME_UNITS.');
        const matchingCookTimeUnit = convertUnitToKey(TIME_UNITS, answers.cookTimeUnit, 'TIME_UNITS.');
        const matchingWaitTimeUnit = convertUnitToKey(TIME_UNITS, answers.waitTimeUnit, 'TIME_UNITS.');

        let customizedTemplate = template
            .replace(/{{cardName}}/g, answers.cardName)
            .replace(/{{name}}/g, answers.name ? answers.name : answers.cardName)
            .replace(/{{author}}/g, answers.author)
            .replace(/{{finder}}/g, answers.finder)
            .replace(/'{{category}}'/g, '[' + matchingCategories + ']')
            .replace(/'{{genre}}'/g, '[' + matchingGenres + ']')
            .replace(/'{{method}}'/g, '[' + matchingMethods + ']')
            .replace(/'{{protein}}'/g, '[' + matchingProtein + ']')
            .replace(/'{{type}}'/g, '[' + matchingTypes + ']')
            .replace(/'{{yields}}'/g, answers.yields)
            .replace(/'{{yieldUnit}}'/g, matchingYieldUnit)
            .replace(/'{{prepTime}}'/g, answers.prepTime)
            .replace(/'{{prepTimeUnit}}'/g, matchingPrepTimeUnit)
            .replace(/'{{cookTime}}'/g, answers.cookTime)
            .replace(/'{{cookTimeUnit}}'/g, matchingCookTimeUnit)
            .replace(/'{{waitTime}}'/g, answers.waitTime)
            .replace(/'{{waitTimeUnit}}'/g, matchingWaitTimeUnit)
            .replace(/{{label}}/g, answers.label)
            .replace(/{{link}}/g, answers.link)
            .replace(/'{{separated}}'/g, answers.separated)
            .replace(/'{{available}}'/g, answers.available)

        // create the new recipe file
        fs.writeFileSync(filePath, customizedTemplate, 'utf8');

        // update the recipes.js file to import the new recipe file
        const recipesFileContent = fs.readFileSync(recipesFilePath, 'utf8');
        const newImport = `const ${convertKebabToCamelCase(answers.fileName)} = require('./recipes/${answers.fileName}.js');\n`;
        const endOfImportsIndex = recipesFileContent.indexOf('// END OF IMPORTS');
        const updatedRecipesFileContent = recipesFileContent.slice(0, endOfImportsIndex) + newImport + recipesFileContent.slice(endOfImportsIndex);
        fs.writeFileSync(recipesFilePath, updatedRecipesFileContent, 'utf8');

        // alphabetically sort the imports in the recipes.js file
        const endOfImportsIndex2 = updatedRecipesFileContent.indexOf('// END OF IMPORTS');
        const importsSection = updatedRecipesFileContent.slice(0, endOfImportsIndex2);
        const sortedImports = importsSection.split('\n').sort().filter(line => !!line).join('\n') + '\n\n';
        const updatedRecipesFileContent2 = sortedImports + updatedRecipesFileContent.slice(endOfImportsIndex2);
        fs.writeFileSync(recipesFilePath, updatedRecipesFileContent2, 'utf8');
        console.log(`File ${answers.fileName}.js has been created and added to the imports in recipes.js.`);
    })
}

createPrompt();