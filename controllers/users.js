const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const db = require('../db/connection') 
require("dotenv").config()

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const SALT_ROUNDS = process.env.SALT_ROUNDS
const TOKEN_KEY = process.env.TOKEN_KEY


const signUp = async (req, res) => {

 

    try {
        const { username, email, password } = req.body
        const password_digest = await bcrypt.hash(password,Number(SALT_ROUNDS) )
        const user = new User({
            username,
            email,
            password_digest
        })

        await user.save()

        const payload = {
            username: user.username,
            email: user.email
        }

        const token = jwt.sign(payload, TOKEN_KEY)
        res.status(201).json({ token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}

const signIn = async (req, res) => {

       
    try {
      const { username, password } = req.body
      const user = await User.findOne({ username: username })
      if (await bcrypt.compare(password, user.password_digest)) {
          const payload = {
              username: user.username,
              email: user.email
          }

          const token = jwt.sign(payload, TOKEN_KEY)
          res.status(201).json({ token })
      } else {
          res.status(401).send('Invalid Credentials')
      }
  } catch (error) {
      res.status(500).json({ error: error.message })
  }
}

const verify =  async (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        const payload = jwt.verify(token, TOKEN_KEY)
        if(payload) {
            res.json(payload)
        }
    } catch (e) {
        res.status(401).send('Not Authorized')
    }
}

const changePassword = async (req, res) => { }

module.exports = {
    signUp,
    signIn,
    verify,
    changePassword
}
