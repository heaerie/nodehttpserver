var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var requestIp = require('request-ip');
var useragent = require('useragent');
var geoip = require('geoip-lite');
var cookieParser  = require('cookie-parser');

var device     = require('express-device')
var ms     = require('ms');

var secretkey ="KEY1";
var sessionExpSec =60*15;

var jwt = require('jsonwebtoken');


 Promise = require('bluebird'),
 request = Promise.promisify(require('request'));

var app = express();

var https = require('https');
var http = require('http');
var fs = require('fs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(device.capture());
app.set('view options', { layout: true });
device.enableViewRouting(app);
app.use(cookieParser());
app.use(session({secret: 'glbladmin',
resave: false,
saveUninitialized: true
}));
var sess ;
console.log(new Date());



function dbError(err)
{
	console.log(err);
}

var chkpwd=0, username="durai145@live.in" ,password ="1qaz2wsx" ; 

app.use(bodyParser.json());

app.set('view engine', 'ejs');

app.get('/hello.txt', function(req, res){
  res.send('Hello World');
});
app.post('/GenTool/GenJson_21.html' , function(req,res) {

res.redirect('GenTool/GenJson_21.html');

}
);

app.post('/jsonSchema/:sjson' , function(req,res) {

});



console.log(__dirname);
app.use(express.static(__dirname+'/public'));

var server = app.listen(5001, function() {
    console.log('Listening on port %d', server.address().port);
});

