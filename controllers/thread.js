const express = require('express')
const router = express.Router()
const db = require('../models')
const ejsLayouts = require('express-ejs-layouts')
const moment = require('moment')

// GET /threads - get all threads
router.get('/', (req, res) => {
  db.threads.findAll()
   .then((threads) => {
    if (!threads) throw Error()
    res.render('threads/home', { threads: threads })
  })
  .catch((error) => {
    console.log(error)
  })
})





// POST /threads - create a new thread
router.post('/', (req, res) => {
  console.log("req.body", req.body)
    db.threads.create({
      title: req.body.title,
      content: req.body.content,
      user_name: req.body.userName,
      userId: req.body.userId
    })
    .then((post) => {
      res.redirect('/')
    })
    .catch((error) => {
    console.log(error)
    })
  })
  
  // GET /threads/new - display form for creating new threads
  router.get('/new', (req, res) => {
    if  (res.locals.user){
      console.log("cookie", res.locals.user)
        res.render('threads/new', { user: res.locals.user})
    }
  }) 
  
  // GET /threads/:id - display a specific thread and its comments
  router.get('/:id', (req, res) => {
    db.threads.findOne({
      where: { id: req.params.id },
      include: [db.users, db.comments]
    })
    .then((thread) => {
      if (!thread) throw Error()
      console.log(thread.id)
      res.render('threads/show', { thread: thread })
    })
    .catch((error) => {
      console.log(error)
    })
  })
  
  // POST :3000/threads/:id/comments - route to save comment to
  router.post("/:id/comments", async (req, res) => {
    //get data from rec.body
    //create new comment from data
    //console.log new comment
    // rerender the page so user can see comment
    try {
      const newComment = await db.comments.create({
          user_name: req.body.user_name,
          userId: req.body.userId,
          content: req.body.content,
          threadId: req.params.id
        })
        res.redirect(`/threads/${req.params.id}`)
      }catch(err){
        console.log(err)
    }
  })
  
  
  
  module.exports = router