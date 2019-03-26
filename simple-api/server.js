// See http://expressjs.com/en/starter/hello-world.html
var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.status(200);
  res.header('content-type', 'application/hal+json');
  res.json({"message": "Hello World!"});
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
