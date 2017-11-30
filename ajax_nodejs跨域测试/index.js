var express = require('express');

var bodyParser = require('body-parser');

var urllib=require('url');

var web = express();

web.use(express.static('www'));
web.use(bodyParser.urlencoded({extended:true}));

web.get('/getTest',function(req,res){
	var jsonData = {message:'ok',data:[{name:'张三'},{name:'李四'},{name:'王五'}]}
	/*get跨域*/
	var str =  req.query.callback + '(' + JSON.stringify(jsonData) + ')';//jsonp
	if (req.query && req.query.callback) {
		res.send(str)
	}else{
		res.send(JSON.stringify(jsonData))
	}
})

web.get('/test1',function(req,res){
	res.send('test1')
})
web.get('/test2',function(req,res){
	res.send('test2')
})
web.get('/test3',function(req,res){
	res.send('test3')
})

web.post('/postTest',function(req,res){
	/*post跨域*/
	res.setHeader('Access-Control-Allow-Origin','*');
	var jsonData = {message:'ok',data:[{name:'张三'},{name:'李四'},{name:'王五'}]}
	res.send(JSON.stringify(jsonData))
})

web.listen('8080',function(){
	console.log('server run success')
})
