const https = require('https')
const authRoute = require('express').Router()

function getSlackAccessToken(code, callback) {

  return https.get({

    host: 'slack.com',
 
    path: '/api/oauth.access?client_id='+process.env.SLACK_CID+'&client_secret='+process.env.SLACK_SECRET+'&code='+code
    }, function(response) {
        // Continuously update stream with data
        var body = '';
        response.on('data', function(d) {
          body += d;
        });
        response.on('end', function() {
          callback(JSON.parse(body));
        });
    });
}

authRoute.get('/login', function(req, res) {
  res.render('login');
});

authRoute.get('/logout', function(req, res) {
  console.log("Logout: "+req.session.username);
  req.session.authenticated = false;
  req.session.destroy();
  req.app.locals.authenticated = false;
  res.redirect('/ngsdb/auth/login/');
});

authRoute.get('/slack/redirect', function(req, res) {
  console.log("Auth - Slack redirect");
  getSlackAccessToken(req.query.code, function(data) {
    console.log("Slack auth token response. ",data);
    req.session.authenticated = true;
    req.session.username = data.user.name;
    res.redirect('/ngsdb/');
  });
});

module.exports = authRoute
