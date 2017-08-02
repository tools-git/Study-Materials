### DOM元素的特性（Attribute）和属性（Property）
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