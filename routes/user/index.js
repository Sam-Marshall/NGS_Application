const userRoute = require('express').Router()

const user = require('../../models').User

userRoute.get('/', function(req, res) {
  console.log("GET all users");
  user.findAll().then(users => {
    console.log("Number of returned items: "+users.length);
    for (var i = 0; i < users.length; i++) {
      console.log("Username: "+users[i].UserName+" id: "+users[i].id);
    }
    res.render('users', {users: users});
  });
});

userRoute.get('/:userid', function(req, res) {
  console.log("GET User: "+req.params.userid);
  user.findById(req.params.userid).then(user => {
    
    res.render('user', {layout: 'modal', username: user.UserName, role: user.UserType});
  })
});

userRoute.post('/', function(req, res) {
  console.log('POST user. username: '+req.body.username+' role: '+req.body.role);
  user.findOrCreate({where:{UserName:req.body.username}, defaults:{UserType: req.body.role}})
      .spread((user, created) => {
        console.log(created)
      })
  res.json({status: 'OK', code: 200});
});

module.exports = userRoute
