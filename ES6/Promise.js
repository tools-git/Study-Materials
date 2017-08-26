const {readFile} = require("fs")

const p = new Promise(function (resolve,reject) {
	console.log("pending...")
	readFile("./ES6.md","utf8",function(err,data){
		if(err){
			console.log("rejected")
			reject(err)
		}else{
			console.log("resolved")
			resolve(data)
		}
	})
})

// 每个Promise实例都有一个方法then
// 第一个参数函数是Promise的resolve方法
// 第二个参数函数是Promise的reject方法
p.then(function(data){
	console.log(data.toString())
},function (err) {
	console.log("失败")
})