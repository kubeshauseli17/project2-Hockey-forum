const express = require('express');
const router = express.Router();
const db = require('../models');
const ejsLayouts = require('express-ejs-layouts');
const moment = require('moment');
const fs = require('fs');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// GET /threads - get all threads
router.get('/', (req, res) => {
  db.threads.findAll()
   .then((threads) => {
    if (!threads) throw Error();
    res.render('threads/home', { threads: threads });
  })
  .catch((error) => {
    console.log(error);
  });
});

// GET /threads/search - search all threads
router.get('/search', (req, res) => {
  let {term} = req.query;
  term = term.toLowerCase();
  console.log(term, "hola");
  db.threads.findAll({ where: { content: { [Op.like]: `%${term}%` }}})
    .then(thread => res.redirect(`threads/${req.params.id}`, { thread }))
    .catch(err => console.log(err));
});

 
// POST /threads - create a new thread
router.post('/', (req, res) => {
    db.threads.create({
      title: req.body.title,
      content: req.body.content,
      user_name: req.body.userName,
      userId: req.body.userId
    })
    .then((post) => {
      res.redirect(`/threads/${post.id}`);
    })
    .catch((error) => {
    console.log(error);
    });
  });
  
  // GET /threads/new - display form for creating new threads
  router.get('/new', (req, res) => {
    if  (res.locals.user){
      console.log("cookiebs", res.locals.user);
        res.render('threads/new', { user: res.locals.user});
    }
  });
  
  // GET /threads/:id - display a specific thread and its comments
  router.get('/:id', (req, res) => {
    db.threads.findOne({
      where: { id: req.params.id },
      include: [db.users, db.comments]
    })
    .then((thread) => {
      console.log(thread, thread.comments);
      if (!thread) throw Error();
      console.log(thread.id);
      res.render('threads/show', { thread: thread, user: res.locals.user });
    })
    .catch((error) => {
      console.log(error);
    });
  });
  
  // POST :3000/threads/:id/comments - route to save comment to
  router.post('/:id/comments', async (req, res) => {
    //get data from rec.body
    //create new comment from data
    //console.log new comment
    // rerender the page so user can see comment
    try {
      console.log(req.body, "comments");
      const newComment = await db.comments.create({
          user_name: req.body.userName,
          userId: req.body.userId,
          content: req.body.content,
          threadId: req.params.id
        });
        res.status(200).redirect(`/threads/${req.params.id}`);
      }catch(err){
        console.log(err);
    }
  });

 
  // PUT /threads/:id - Edit users thread


  router.put('/:id', async (req, res) => {
    try {
      db.threads.findOne({
        where: { id: req.params.id },
      }).then((thread) => {
        thread.update({
          title: req.body.title,
          content: req.body.content
        }).then((result) => {
          res.redirect(`/threads/${req.params.id}`);
        });
      });
    }catch(err) {
      console.log(err);
    }
  });


  // DELETE /threads/:id - Delete users thread
  router.delete('/:id', async (req, res) => {
    try {
      const threadToDelete = await db.threads.destroy({
        where: {
          id: req.params.id
        }
      });
      res.redirect('/');
    } catch(error) {
      console.log(error);
    }
  });  
  
  module.exports = router;