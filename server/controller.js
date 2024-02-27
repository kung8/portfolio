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

const data = {
    components,
    education,
    experiences,
    products,
    projects,
    recipes,
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
        return res.send({
            CATEGORIES: recipeCategories.CATEGORIES,
            GENRES: recipeCategories.GENRES
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