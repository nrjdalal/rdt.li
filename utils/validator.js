const validate = require('validate.js')

const isUrl = (url) => {
  const res = validate({ website: url }, { website: { url: true } })

  if (res) {
    return false
  } else {
    return true
  }
}

module.exports = { isUrl }
