const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const passport = require('passport')
const GitHubStrategy = require('passport-github2')

const app = express()

passport.serializeUser((user, done) => done(null, user))
passport.deserializeUser((obj, done) => done(null, obj))

passport.use(new GitHubStrategy(
  {
    clientID: process.env.GH_ID,
    clientSecret: process.env.GH_SECRET,
    callbackURL: `${process.env.PUBLIC_URL}/auth/github/callback`
  },
  (accessToken, refreshToken, profile, done) => {
    process.nextTick(() => done(null, profile))
  })
)

app.use(express.static('client/dist'))
app.use(bodyParser.json())

app.use(session({ secret: 'somerandomsecret', resave: false, saveUninitialized: false }))
app.use(passport.initialize())
app.use(passport.session())


app.get(
  '/login',
  passport.authenticate('github', { scope: [ 'read:user' ] })
)

app.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/' }),
  (req, res) => res.redirect('/')
)

app.post(
  '/repos',
  (req, res, next) => { req.isAuthenticated() ? next() : res.redirect('/') },
  (req, res) => {
    res.json({ status: 'ok' })
  }
)

app.listen(3000, () => {
  console.log('github-list-repos listening on port 3000')
})
