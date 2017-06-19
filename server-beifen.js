var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// 创建 application/x-www-form-urlencoded 编码解析
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static('build'))

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/build/index.html')
});

var server = app.listen(8088, function () {
	console.log('正常打开8088端口');
})
