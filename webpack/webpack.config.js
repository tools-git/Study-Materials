// require module 是node中的包的引用
// 引入path
conset path = require("path")

module.exports = {
	// 入口
	entry: path.join(__dirname,"main.js"),
	// path.join与path.resolve的区别
	// join是你写什么路径就是什么路径
	// resolve是当前执行文件的绝对路径从盘符开始

	// loader加载器
	module:{
		// webpack1 loader
		// webpack2 rules
		rules:[
			// 每一个loader放在一个对象中处理
			// 源文件->loader->
			{
				test:/\.css$/,
				// css-loader 将css样式提取到bundle。js中
				// style-loader 将提取后的样式作用到页面上
				use:['style-loader','css-loader']
			}
			{
				test:/\.(png|jpg|jpeg|gif)$/
				use:[]
			}
		]
	}

	// plugin

	// 出口
	output:{
		path:path.join(__dirname."dist"),
		filename:"bundle.js"
	}
}