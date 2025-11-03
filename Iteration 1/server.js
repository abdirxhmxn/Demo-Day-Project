// server.js

const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const MongoClient = require('mongodb').MongoClient
const mongoose = require('mongoose');
const path = require('path');

// const morgan       = require('morgan');
// const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
// const session      = require('express-session');

const configDB = require('./config/database.js');

let db

// configuration ===============================================================
MongoClient.connect(configDB.url)
    .then(client => {
        console.log('Connected to Database')
        const db = client.db('Al-Bayaan')
        const quotesCollection = db.collection('Users')

        require('./app/routes.js')(app, db);
    })
    .catch(error => console.error(error)) // connect to our database

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'))
app.use(express.json())

app.set('view engine', 'ejs'); // set up ejs for templating



// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);