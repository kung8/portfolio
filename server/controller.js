const nodemailer = require('nodemailer');
const { EMAIL, PASSWORD } = process.env;
const heroes = require('./data/superheroData');

const components = require('./data/components');
const education = require('./data/education');
const experiences = require('./data/experiences');
const featuredRecipes = require('./data/featured-recipes');
const friends = require('./data/episodes/friends');
const hymns = require('./data/hymns');
const ingredients = require('./data/recipes/ingredients');
const ingredientCategories = require('./data/recipes/ingredient-categories');
const music = require('./data/music');
const products = require('./data/products');
const projects = require('./data/projects');
const recipes = require('./data/recipes');
const recipeCategories = require('./data/recipes/constants');
const recommendations = require('./data/recommendations');

const data = {
    components,
    education,
    experiences,
    friends,
    hymns,
    music,
    products,
    projects,
    recipes,
    recommendations,
}

const convertIdToName = (id) =>
    id.split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

module.exports = {
    getHeroData: (_req, res) => {
        res.send(heroes);
    },
    getData: (req, res) => {
        const { type, id } = req.query;
        if (id) {
            const name = convertIdToName(id).replace(/-/g, ' ').toLowerCase();
            const item = data[type].filter(item => item.name.replace(/-/g, ' ').toLowerCase() === name);
            return res.send(item);
        }
        return res.send(data[type] ?? []);
    },
    getIngredients: (_req, res) => {
        res.send(ingredients);
    },
    getIngredientCategories: (_req, res) => {
        res.send(ingredientCategories);
    },
    getFeaturedRecipes: (_req, res) => {
        res.send(featuredRecipes);
    },
    getRecipeCategories: (_req, res) => {
        // get the unique values for each type of recipe categorization      
        const category = [...new Set(recipes.flatMap(recipe => recipe.available ? recipe.category : []))].filter(Boolean);
        const diet = [...new Set(recipes.flatMap(recipe => recipe.available ? recipe.diet : []))].filter(Boolean);
        const genre = [...new Set(recipes.flatMap(recipe => recipe.available ? recipe.genre : []))].filter(Boolean);
        const method = [...new Set(recipes.flatMap(recipe => recipe.available ? recipe.method : []))].filter(Boolean);
        const protein = [...new Set(recipes.flatMap(recipe => recipe.available ? recipe.protein : []))].filter(Boolean);
        const type = [...new Set(recipes.flatMap(recipe => recipe.available ? recipe.type : []))].filter(Boolean);

        // only return the values that are included within at least one found recipe
        return res.send({
            CATEGORIES: Object.values(recipeCategories.CATEGORIES).filter(item => category.includes(item)),
            DIET: Object.values(recipeCategories.DIET).filter(item => diet.includes(item)),
            GENRES: Object.values(recipeCategories.GENRES).filter(item => genre.includes(item)),
            METHODS: Object.values(recipeCategories.METHODS).filter(item => method.includes(item)),
            PROTEIN: Object.values(recipeCategories.PROTEIN).filter(item => protein.includes(item)),
            TYPES: Object.values(recipeCategories.TYPES).filter(item => type.includes(item)),
        });
    },
    message: async (req, res) => {
        const { name, message, email, subject } = req.body;

        try {
            let transporter = await nodemailer.createTransport({
                host: 'smtp.gmail.com',
                service: 'gmail',
                port: 587,
                secure: false,
                auth: {
                    user: EMAIL,
                    pass: PASSWORD
                }
            });
            await transporter.sendMail({
                from: `'${name}' <${email}>`,
                to: EMAIL,
                subject: subject,
                text: message,
                html: `<div>
                    <p>${message}</p>
                    <p>Sincerely,<br/>${name}<br/>${email}</p>
                </div>`
            }, async (err, response) => {
                if (err) {
                    console.log('err', err);
                } else {
                    res.sendStatus(200);
                }
            })
        } catch (err) {
            console.log(err);
            res.sendStatus(500);
        }
    }
}