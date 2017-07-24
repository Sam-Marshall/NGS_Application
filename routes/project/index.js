const projectRoute = require('express').Router()

//const project = require('../../models').Project

projectRoute.get('/', function(req, res) {
  res.render('projects');
});

projectRoute.get('/:prjid', function(req, res) {
  res.render('project');
});

module.exports = projectRoute
