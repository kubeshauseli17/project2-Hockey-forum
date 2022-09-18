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

// PUT /comments/:id - Edit users thread

router.put('/:id', async (req, res) => {
    try {
      db.comments.findOne({
        where: { id: req.params.id },
      }).then((comment) => {
        comment.update({
          content: req.body.content
        }).then((result) => {
          res.redirect('/threads/')
        })
      })
    }catch(err) {
      console.log(err);
    }
  })

  // DELETE /comments/:id - Delete users thread
  router.delete('/:id', async (req, res) => {
    try {
        db.comments.findOne({
            where: { id: req.params.id }
        }).then((comment) => {
            comment.destroy({
                id: req.params.id
            }).then((result) => {
                res.redirect('/threads/')
            })
        })
    } catch(error) {
        console.log(error)
    }
  })  

module.exports = router