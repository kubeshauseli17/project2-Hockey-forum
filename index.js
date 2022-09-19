// required packages
require('dotenv').config();
const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
const cookieParser = require('cookie-parser');
const db = require('./models');
const moment = require('moment');
const fs = require('fs');
const axios = require('axios');
const crypto = require('crypto-js');
const methodOverride = require('method-override');
let standings;

console.log('server secret:', process.env.ENC_SECRET);

// config express app/middlewares
const app = express();
const PORT = process.env.PORT || 3000
app.set('view engine', 'ejs');
app.use(ejsLayouts);
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));

// middleware that allows us to access the 'moment' library in every EJS view
app.use((req, res, next) => {
    res.locals.moment = moment,
    next();
  });

// our custom auth middleware
app.use(async (req, res, next) => {
    // console.log('hello from a middleware 👋')
    // if there is a cookie on the incoming request
    if (req.cookies.userId) {
        // decrypt the user id before we look up the user in the db
        const decryptedId = crypto.AES.decrypt(req.cookies.userId.toString(), process.env.ENC_SECRET);
        const decryptedIdString = decryptedId.toString(crypto.enc.Utf8);
        // look up the user in the db
        const user = await db.users.findByPk(decryptedIdString);
        // mount the user on the res.locals
        res.locals.user = user
    // if there is no cookie -- set the user to be null in the res.locals
    } else {
        res.locals.user = null
    }
    // move on to the next route or middleware in the chain
    next()
})


// window.fetch() to retrieve data from our data api url
fetch('https://statsapi.web.nhl.com/api/v1/standings')
// Promises -- handle asynchronicity in javascript
// dot then syntax
.then(responseData => {
console.log(responseData, "nhl1");
return responseData.json();
})
.then(jsonData => {
    standings = jsonData;
});
// route definitions
app.get('/', (req, res) => {
    // console.log('incoming cookie 🍪', req.cookies)
    // console.log(res.locals.myData)
    console.log('the currently logged in user is:', res.locals.user);
    res.render('home.ejs');
});



// Controllers
app.use('/users', require('./controllers/users'));
app.use('/threads', require('./controllers/thread'));
app.use('/comments', require('./controllers/comments'));
app.use('/standings', (req, res, next) => {
    res.render('standings.ejs', { standings: standings });
    next();
});
// listen on a port
app.listen(PORT, () => console.log(`you or your loved ones may be entitled to compensation on port: ${PORT}`));