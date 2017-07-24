const models = require('../models');

const routes = require('express').Router();

const user = require('./user');
const project = require('./project');
const auth = require('./auth');

routes.use('/user', user);
routes.use('/project', project);
routes.use('/auth', auth);

routes.get('/', function (req, res) {
  if (("authenticated" in req.session) && (req.session.authenticated == true)) {
    req.app.locals.authenticated = true;
    res.render('home', req.session);
  }
  else
    res.redirect('/ngsdb/auth/login/');
});


module.exports = routes;



