const express = require('express')
const router = express.Router()
const db = require('../models')
const ejsLayouts = require('express-ejs-layouts')

// POST /threads - create a new thread
router.post('/', (req, res) => {
    db.threads.create({
      title: req.body.title,
      content: req.body.content,
      user_name: req.body.user_name,
      user_id: req.body.user_id
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
      var user_name = res.locals.user.user_name;
        res.render('threads/new', { user: user_name})
    }
  }) 
  
//   // GET /threads/:id - display a specific thread and its comments
//   router.get('/:id', (req, res) => {
//     db.threads.findOne({
//       where: { id: req.params.id },
//       include: [db.user_id, db.comments]
//     })
//     .then((threads) => {
//       if (!threads) throw Error()
//       console.log(threads.user_id)
//       res.render('threads/show', { user_id: user_id })
//     })
//     .catch((error) => {
//       console.log(error)
//       res.status(400).render('main/404')
//     })
//   })
  
//   // POST :3000/threads/:id/comments - route to save comment to
//   router.post("/:id/comments", async (req, res) => {
//     //get data from rec.body
//     //create new comment from data
//     //console.log new comment
//     // rerender the page so user can see comment
//     try {
//       const newComment = await db.comments.create({
//           user_name: req.body.user_name,
//           user_id: req.body.user_id,
//           content: req.body.content,
//           thread_id: req.params.id
//         })
//         res.redirect(`/threads/${req.params.id}`)
//       }catch(err){
//         console.log(err)
//     }
//   })
  
  
  
  module.exports = router