var webpack = require('webpack');
var express = require('express');
var config = require('./webpack.config.hot');
var app = express();
var compiler = webpack(config);
var bodyParser = require('body-parser');
var bs = require('browser-sync').create();
// 创建 application/x-www-form-urlencoded 编码解析
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(require('webpack-dev-middleware')(compiler, {
	publicPath: config.output.publicPath,
	hot: true,
	historyApiFallback: true,
	inline: true,
	progress: true,
	stats: {
	colors: true
	}
}));

app.use(require('webpack-hot-middleware')(compiler));

/**
* 将其他路由，全部返回index.html
*/
app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html')
});
app.get('/getData', function(req, res) {
	res.sendFile(__dirname + '/src/mock/data.json')
});
app.listen(8088, function() {
	console.log('正常打开8088端口');
	bs.init({
		open: false,
		ui: false,
		notify: false,
		proxy: 'localhost:8088',
		files: ['./src/index.html'],
		port: 8088
	});
});
