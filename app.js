require('dotenv').config()

// environment
const HOST = process.env.HOST || 'localhost:' + process.argv[2]
const PORT = process.env.PORT || process.argv[2]
const MGDB = process.env.MONGO || 'mongodb://localhost:27017/azile'

// modules
const express = require('express')
const mongoose = require('mongoose')

// models
const Redirector = require('./models/redirector')

// utils
const shuffler = require('./utils/shuffler')
const validator = require('./utils/validator')

// express setup
const app = express()
app.listen(PORT)

// mongodb setup
mongoose.connect(MGDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

console.log('\n' + shuffler(41) + '\n')

app.use('/', async (req, res) => {
  if (req.url !== '/favicon.ico') {
    const host = req.headers.host.slice(0, -HOST.length - 1)
    const url = req.url.split('~/~')
    const link = host + url[0]
    const subLink = validator.isUrl('https://' + link)

    if (subLink) {
      console.log(link)
    } else {
      console.log(HOST + url)
    }

    // if (!url[1]) {
    //   url[1] = shuffler(6)
    // }

    // try {
    //   const data = { title: url[1], url: link }
    //   await Redirector.create(data)
    //   return res.send(JSON.stringify(data))
    // } catch {
    //   return res.send('It looks like the record already exists!')
    // }

    return res.send("What's my purpose?")
  }
})
