const path = require('path')
const multer = require('multer')
const moment = require('moment')

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, path.resolve(__dirname, '../../', 'static'))
  },
  filename(req, file, cb) {
    cb(null, `${file.originalname}-${moment().format('DDMMYYYY-HHmmss_SSS')}`)
  }
})

const fileFilter = (req, file, cb) => {
  if (file.mintype === 'image/png' || file.mintype === 'image/jpeg') {
    cb(null, true)
  } else {
    cb(null, false)
  }
}

module.exports = multer({
  storage,
  fileFilter,
  limits: { fileSize: 1024 * 1024 * 5 }
})
