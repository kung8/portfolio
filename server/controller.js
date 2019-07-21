const nodemailer = require('nodemailer')
const { EMAIL, PASSWORD } = process.env

module.exports = {
  message: async (req, res) => {
    const db = req.app.get('db')
    const { name, message, email, phone } = req.body

    try {
      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: EMAIL,
          pass: PASSWORD
        }
      });

      let info = await transporter.sendMail({
        from: `'${name}' <${email}>`, 
        to: EMAIL,
        subject: 'YOU ARE ', 
        text: message,
        html:   `<div>
                    <h1>${name}</h1>        
                    <h3>Phone:${phone}</h3>  
                    <h3>Email:${email}</h3>  
                    <p>${message}</p>
                </div>`
        
      }, async(err, response) => {
        if (err) {
          console.log('err', err)
        } else {
          console.log('res', response)
          await db.create_message({name,phone,email,message})
          res.sendStatus(200)
        }
      })
    } catch (err) {
      console.log(err)
      res.sendStatus(500)
    }
  }
}