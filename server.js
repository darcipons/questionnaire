const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const app = express()
const path = require('path')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/api/form', (req, res) => {
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
      <h3>Code Challenge</h3>
      <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
        <li>Repo: ${req.body.repo}</li>
        <li>URL: ${req.body.url}</li>
        <li>Using best practices for OOP: ${req.body.rating1}</li>
        <li>Modular development: ${req.body.rating2}</li>
        <li>Full-stack workflow understanding: ${req.body.rating3}</li>
        <li>Testing: ${req.body.rating4}</li>
        <li>Database knowledge: ${req.body.rating5}</li>
        <li>Debugging: ${req.body.rating6}</li>
        <li>Problem solving skills: ${req.body.rating7}</li>
        <li>Javascript: ${req.body.rating8}</li>
        <li>HTML: ${req.body.rating9}</li>
        <li>CSS: ${req.body.rating10}</li>
        <li>Working on a team: ${req.body.rating11}</li>
        <li>Self motivation: ${req.body.rating12}</li>
        <li>Communication skills: ${req.body.rating13}</li>
        <li>Your own energy level: ${req.body.rating14}</li>
        <li>Intelligence / Aptitude: ${req.body.rating15}</li>
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
      from: 'darcimarie33@gmail.com',
      to: 'darcimarie33@gmail.com',
      subject: 'Code Challenge',
      html: htmlEmail
    }

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return console.log(err)
      }
      
    })
  })
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`) 
})

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')))
  // Handle React routing, return all requests to React app
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  })
}
