const http = require('http')
const url = require('url')

const server = http.createServer(function (request,response) {
	// 设置响应头
	response.writeHead(200,{"Content-Type":"text/plain"})
	// 获取url中输入的字符串
	const params = url.parse(request.url,true).query
	const input = params.number
	// 转换成数字四舍五入
	const numInput = new Number(input)
	const numOutput = new Number(Math.random()*numInput).toFixed(0)
	response.write(numOutput)

	// 结束服务
	response.end()
})

server.listen("8080",function () {
	console.log("http://loaclhost:8080")
})