cmd  window命令提示符，在装有node的前提下，执行node index命令运行服务器，在控制台查看效果

index.js内部有get跨域jsonp的解决方案
  var str =  req.query.callback + '(' + JSON.stringify(jsonData) + ')';//jsonp
	if (req.query && req.query.callback) {
    /*跨域的条件下返回还有callback的数据*/
		res.send(str)
	}else{
    /*正常情况下正常返回*/
		res.send(JSON.stringify(jsonData))
	}
  
  还有post请求cors的解决方案
  只需设置回应头res.setHeader('Access-Control-Allow-Origin','*');
