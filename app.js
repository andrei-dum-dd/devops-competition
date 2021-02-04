const express = require('express');
const app = express();
const router = express.Router();

const path = __dirname + '/views/';
const port = 9000;

router.use(function (req,res,next) {
  console.log('/' + req.method);
  next();
});

router.get('/', function(req,res){
  res.sendFile(path + 'index.html');
});

router.get('/', function(req,res){
  res.sendFile(path + 'part1.html');
});

app.use(express.static(path));
app.use('/', router);

app.listen(port, function () {
  console.log('This static website is now active and runs on 9000. Press CTRL+C to kill the process or run in the background with node app.js &')
})
