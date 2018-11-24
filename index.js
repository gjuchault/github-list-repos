const express = require('express')
const bodyParser = require('body-parser')
const passport = require('passport')
const passportGH = require('passport-github2')

const app = express()

passport.use(passportGH())

app.use(express.static('client/dist'))
app.use(bodyParser.json())

app.use(express.session({ secret: 'somerandomsecret' }))
app.use(passport.initialize())
app.use(passport.session())


app.post(
  '/login',
  passport.authenticate('github2'),
  (_, res) => res.json({})
)

app.post(
  '/repos',

)

app.listen(3000, () => {
  console.log('github-list-repos listening on port 3000')
})
