const nodemailer = require('nodemailer');
const { EMAIL, PASSWORD } = process.env;

module.exports = {
    message: async (req, res) => {
        const { name, message, email, type } = req.body;

        try {
            let transporter = await nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: EMAIL,
                    pass: PASSWORD
                }
            });
            await transporter.sendMail({
                from: `'${name}' <${email}>`,
                to: EMAIL,
                subject: `Re: Request for ${type} from ${name}`,
                text: message,
                html: `<div>
                    <h1>${name}</h1>        
                    <h3>Email:${email}</h3>  
                    <p>${message}</p>
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