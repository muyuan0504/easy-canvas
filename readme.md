## for canvas more easily to use

node: 16.14.2

<编译后的代码未经过 babel 转译，引入后自行配置 babel 规则>

### EasyCanvas-constructor

-   el: canvas 元素的 ID

### API

-   useFont
    使用自定义字体：传入字体别名与字体 url，返回 Promise，为保证后续绘制过程正常使用自定义字体，建议使用 await 等待字体文件加载成功再使用
-   useText
    渲染文本：在给定的(x,y)坐标上进行文字渲染，支持自定义文字 style
-   setPattern
    创建图案，暂只支持 img 类型，传入图片资源地址，返回 Promise,当图片加载成功，将图片元素转换为图案返回。
-   useImg
    使用图片绘制到 canvas 画布上，返回 Promise
-   getImageData
    从 canvas 上获取 ImageData 对象
-   putImageData
    将 ImageData 对象以位图的形式绘制到 canvas
-   useVideo
    使用视频资源
-   userFill
    使用填充功能
-   useGraphics
    图形绘制接口
-   usePaintBrush
    使用画笔，用于线段绘制，支持直线和曲线绘制
-   userCustomset
    用户自定义配置
-   executeCustomFn
    用户自定义执行函数
