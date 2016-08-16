var express = require('express');
var app = express();

app.engine('html', require('ejs').renderFile);

app.use("/assets", express.static(__dirname + "/assets"));
app.use("/node_modules", express.static(__dirname + "/node_modules"));

app.get('/', function (req, res) {
  res.render('../index.html');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
