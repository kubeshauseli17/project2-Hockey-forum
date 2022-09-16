const express = require('express')
const router = express.Router()
const db = require('../models')
const ejsLayouts = require('express-ejs-layouts')
const moment = require('moment')
const fs = require('fs')

// GET /comments - get all comments
router.get('/', (req, res) => {
  db.comments.findAll()
   .then((comments) => {
    if (!comments) throw Error()
    res.render('comments/home', { comments: comments })
  })
  .catch((error) => {
    console.log(error)
  })
})


module.exports = router