const mongoose = require('mongoose')

const redirector = new mongoose.Schema({
  title: { type: String, unique: true, required: true },
  url: { type: String, required: true },
  date: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Redirector', redirector, 'redirector')
