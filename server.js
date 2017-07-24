//Using dotenv to provide environment variables to application from .env file
require('dotenv').config();

const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);

const routes = require('./routes');

// Very basic 'Handlebars' configuration
const hbs = exphbs.create({
  extname: '.hbs',
  defaultLayout: 'main'
})

// Configure database parameters for session manangement
const sessionOptions = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
};

const sessionStore = new MySQLStore(sessionOptions);

const app = express()

// Set an app level variable for the authentication status
app.locals.authenticated = false;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/static', express.static('public'));

// Configure the session management for the app.
app.use(session({
    key: process.env.SESSION_KEY,
    secret: process.env.SESSION_SECRET,
    store: sessionStore,
    resave: false,
    saveUninitialized: false
}));


app.use('/'+process.env.URL_PREFIX, routes);

// Set 'handlebars' as the templating engine.
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

// Define the port to be used by the server 
const appPort = process.env.APP_PORT || 8080;

app.listen(appPort, function () {
  console.log('Example app listening on port: '+appPort)
})


