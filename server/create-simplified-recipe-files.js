const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const { CATEGORIES, GENRES, METHODS, PROTEIN, TYPES } = require('./data/recipes/constants');

const simplifiedTemplateFilePath = path.join(__dirname, '..', 'server', 'data', 'recipes', 'simplified-template.js');
const recipesFilePath = path.join(__dirname, '..', 'server', 'data', 'recipes.js');

const convertValuesToKeys = (obj, selectedValues, objPrefix) => {
    const selectedOptions = Object.entries(obj);
    return selectedValues.map(option => objPrefix + selectedOptions.find(([_, value]) => value === option)[0]);
};

const convertKebabToCamelCase = (str) => {
    return str.replace(/-./g, (match) => match.charAt(1).toUpperCase());
};

const createPrompt = async () => {
    if (!fs.existsSync(simplifiedTemplateFilePath)) {
        console.log(`Template file ${simplifiedTemplateFilePath} does not exist.`);
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
            name: 'label',
            message: 'Enter any websites displayed label:',
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter website link:',
        }
    ]).then(async (answers) => {
        const template = fs.readFileSync(simplifiedTemplateFilePath, 'utf8');
        const matchingCategories = convertValuesToKeys(CATEGORIES, answers.categories, 'CATEGORIES.');
        const matchingGenres = convertValuesToKeys(GENRES, answers.genres, 'GENRES.');
        const matchingMethods = convertValuesToKeys(METHODS, answers.methods, 'METHODS.');
        const matchingProtein = convertValuesToKeys(PROTEIN, answers.protein, 'PROTEIN.');
        const matchingTypes = convertValuesToKeys(TYPES, answers.types, 'TYPES.');

        let customizedTemplate = template
            .replace(/{{cardName}}/g, answers.cardName)
            .replace(/{{name}}/g, answers.name ? answers.name : answers.cardName)
            .replace(/'{{category}}'/g, '[' + matchingCategories + ']')
            .replace(/'{{genre}}'/g, '[' + matchingGenres + ']')
            .replace(/'{{method}}'/g, '[' + matchingMethods + ']')
            .replace(/'{{protein}}'/g, '[' + matchingProtein + ']')
            .replace(/'{{type}}'/g, '[' + matchingTypes + ']')
            .replace(/{{label}}/g, answers.label)
            .replace(/{{link}}/g, answers.link)

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