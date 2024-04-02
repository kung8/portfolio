const nodemailer = require('nodemailer');
const { EMAIL, PASSWORD } = process.env;
const heroes = require('./data/superheroData');
const components = require('./data/components');
const education = require('./data/education');
const experiences = require('./data/experiences');
const products = require('./data/products');
const projects = require('./data/projects');
const recipes = require('./data/recipes');
const recipeCategories = require('./data/recipes/constants');
const music = require('./data/music');

const data = {
    components,
    education,
    experiences,
    products,
    projects,
    recipes,
    music,
    // heroes, 
}

const convertIdToName = (id) =>
    id.split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

module.exports = {
    getHeroData: async (_req, res) => {
        res.send(heroes);
    },
    getData: async (req, res) => {
        const { type, id } = req.query;
        if (id) {
            const name = convertIdToName(id).toLowerCase();
            const item = data[type].filter(item => item.name.toLowerCase() === name);
            return res.send(item);
        }
        return res.send(data[type] ?? []);
    },
    getRecipeCategories: async (_req, res) => {
        const category = recipes.flatMap(recipe => recipe.category);
        const diet = recipes.flatMap(recipe => recipe.diet);
        const genre = recipes.flatMap(recipe => recipe.genre);
        const method = recipes.flatMap(recipe => recipe.method);
        const protein = recipes.flatMap(recipe => recipe.protein);
        const type = recipes.flatMap(recipe => recipe.type);

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