### for canvas more easily to iuse

##### globalAlpha透明度处理

这个属性影响到 canvas 里所有图形的透明度，有效的值范围是 0.0（完全透明）到 1.0（完全不透明），默认是 1.0
不过对 strokeStyle 和 fillStyle 设置 rgba 值的透明度更好

##### canvasGradient自定义渐变
用线性或者径向的渐变来填充或描边，可以赋给图形的 fillStyle 或 strokeStyle 属性

##### path2D路径复用

可接受另一个 path2D 实例作为参数完成路径的复用；
也可以接收 svg path 数据构建路径

##### 常用 api

@color:可以是表示 CSS 颜色值的字符串，渐变对象或者图案对象,默认是黑色

-   fillStyle: color; 设置图形的填充颜色
-   strokeStyle: color; 设置图形轮廓的颜色
