const nodemailer = require('nodemailer');
const { EMAIL, PASSWORD } = process.env;
const heroes = require('./data/superheroData');
const components = require('./data/components');

const data = {
    components, 
    // heroes, 
}


module.exports = {
    getHeroData: async (_req, res) => {
        res.send(heroes);
    },
    getData: async (req, res) => {
        const { type } = req.query;
        res.send(data[type] ?? []);
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