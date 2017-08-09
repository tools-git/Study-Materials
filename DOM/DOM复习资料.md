## DOM元素的特性（Attribute）和属性（Property）
区别：
1. Attribute就是DOM节点自带的属性，例如html中常用的id、class、title、align等：
```html
<div id="dv1" class="dvClass" title="divTitle"></div>
```
2. Property是这个DOM元素在JavaScript中作为对象，其附加的属性，例如childNodes、firstChild等
3. 很多attribute节点还有一个对应的property属性，但是对于自定义的Attribute节点，或者自定义property，两者就没有关系了
4. DOM元素一些默认常见的attribute节点都有与之对应的property属性，比较特殊的是一些值为Boolean类型的property，如一些表单元素：
```javascript
<input type="radio" checked="checked" id="raido">
var radio = document.getElementById( 'radio' );
console.log( radio.getAttribute('checked') ); // checked
console.log( radio.checked ); // true
```
对于这些特殊的attribute节点，只有存在该节点，对应的property的值就为true

- property: 属性 是DOM中的属性，是JavaScript里的对象
	+ DOM有其默认的基本属性，而这些属性就是所谓的property，无论如何，它们都会在初始化的时候在DOM对象上创建
	+ 如果在标签对这些属性进行赋值，那么这些值就会作为初始值赋给DON对象上同名的属性
- attribute: 特性 是HTML标签上的特性，它的值只能够是字符串
	+ 在HTML标签中定义的属性和值会保存该DOM对象的attribute属性里面
	+ 这些Attribute属性的JavaScript中的类型是Attr，而不仅仅是保存属性名和值这么简单
- property能够从JavaScript中得到同步
- Attribute不会同步property上的值
- Attribute和property之间的数据绑定是单向，Attribute->property
- 更改property和attribute是上的任意值，都会将更新反映到HTML页面中

## 什么是盒子模型
- css盒子模型，包含了元素内容(content)，内边距(padding)，边框(border)和外边距(margin)四个属性，是在网页设计中css技术使用的一种思维模型，每一个标签都可以看做一个盒子

## 什么是css hack
- 由于不同厂商的浏览器或者某浏览器的不同版本，对css的支持、解析不一样，导致在不同浏览器的环境中呈现出不一致的页面展现效果。为了统一的页面效果，就需要针对不同的浏览器或不同版本写特定的css样式，我们把这个针对不同的浏览器/不同版本写相应的css代码的过程，叫做css hack.
- 方式一：条件注释法
```
	<!-- 只在IE6下生效 -->
	<!--[if IE 6]>
	这段文字只在IE6浏览器显示
	<![endif]-->
```
- 方式二：类内属性前缀法
```
“-″减号是IE6专有的hack
“\9″ IE6/IE7/IE8/IE9/IE10都生效
“\0″ IE8/IE9/IE10都生效，是IE8/9/10的hack
“\9\0″ 只对IE9/IE10生效，是IE9/10的hack
```
- 方式三：选择器前缀法
```
*html *前缀只对IE6生效
*+html *+前缀只对IE7生效
@media screen\9{...}只对IE6/7生效
@media \0screen {body { background: red; }}只对IE8有效
@media \0screen\,screen\9{body { background: blue; }}只对IE6/7/8有效
@media screen\0 {body { background: green; }} 只对IE8/9/10有效
@media screen and (min-width:0\0) {body { background: gray; }} 只对IE9/10有效
@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {body { background: orange; }} 只对IE10有效
```
- 利弊
使用hack虽然对页面表现的一致性有好处，但过多的滥用会造成html文档混乱不堪，增加管路和维护的负担。

## 简述一下src和href的区别
- href标识超文本引用，用在link和a等元素上，href是引用和页面关联，是在当前元素和引用资源之间建立联系。例如link关联一个css文件，浏览器会识别该文档为css文档，并行下载该文档，并且不会停止对当前文档的处理。这也是建议使用link，而不采用@import加载css的原因

- src表示引用资源，表示替换当前元素，用在img，script，iframe上，当浏览器解析该类元素时，会暂停浏览器的渲染，知道该资源加载完毕。这也是将js脚本放在底部而不是头部的原因

## 简述同步和异步的区别
- 同步：指发送一个请求，需要等待返回，然后才能够发送下一请求，有个等待过程。同步请求将锁死浏览器，用户其他操作必须等待这次请求完成才可执行。
- 异步：指发送一个请求，不需要等待返回，随时可以再发送下一次请求，既不需要等待。浏览器可以自如的继续做事，在服务器返回数据的时候通知浏览器，浏览器在把返回的数据在渲染到页面，局部更新

## 浏览器的内核
- IE：trident 内核
- Firefox：gecko 内核
- Chrome：Blink 内核（2013年之前是用webkit）
- Safari：webkit 内核
- Opera：Presto 内核

## 添加、移除、移动、复制、创建和查找节点
- 创建新节点
	+ createDocumentFragment() //创建一个文档碎片节点
	+ createElement(tagname) //创建一个标签名为tagname的元素节点
	+ createTextNode(text) //创建一个文本节点
	+ createComment(text) //创建带文本text的注释节点
	+ createAttribute(naem) //用指定名称name创建特性节点
- 添加、移除、替换、插入
	+ appendChild() // parent.appendChild(child) 将child子元素添加到parent父元素中
	+ removeChild() // parent.removeChild(child) 将child子元素从父元素中删除
	+ replaceChild() //parent.replaceChild(new,old) 将parent父元素中old子元素替换成new新元素
	+ insertBefore() //parent.inserBefore(new,child) 将new新元素插入父元素中child子元素之前
- 查找
	+ document.getElementById() //通过Id查找，返回节点本身
	+ document.getElementsByTagName() //通过标签查找，返回伪数组
	+ document.getElementsByName() //通过name属性查找，返回伪数组
	+ document.getElementsByClassName() //通过
- 复制
	+ cloneNode()方法，用于复制节点，接受一个布尔值参数，true 表示深复制（复制节点及其所有子节点），false 表示浅复制（复制节点本身，不复制子节点）

## css 中 position 有哪些值
- 