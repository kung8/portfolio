const nodemailer = require('nodemailer');
const { EMAIL, PASSWORD } = process.env;
const componentArr = require('./data/componentsData');
const heroData = require('./data/superheroData');

module.exports = {
    getComponentArrData: async (req, res) => {
        res.send(componentArr);
    },
    getHeroData: async (req, res) => {
        res.send(heroData);
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