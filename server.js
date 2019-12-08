const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/api/form', (req, res) => {
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
      <h3>Contact Details</h3>
      <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
        <li>Repo: ${req.body.repo}</li>
        <li>URL: ${req.body.url}</li>
      </ul>
    `

    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: "wyncoder33@gmail.com",
        pass: "Wyncode3345"
      }
    })

    let mailOptions = {
      from: 'wyncoder33@gmail.com',
      to: 'darcimarie33@gmail.com',
      subject: 'Code Challenge',
      html: htmlEmail
    }

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return console.log(err)
      }

      console.log('Message sent %s', info.message)
      console.log('Message URL: %s', nodemailer.getTestMessageUrl(info))
    })
  })
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`) 
})

