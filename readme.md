## for canvas more easily to use

### EasyCanvas-constructor
- el: canvas元素的ID
### API
- useFont
  使用自定义字体：传入字体别名与字体url，返回Promise，为保证后续绘制过程正常使用自定义字体，建议使用await等待字体文件加载成功再使用
- useText
  渲染文本：在给定的(x,y)坐标上进行文字渲染，支持自定义文字style
- setPattern
  创建图案，暂只支持img类型，传入图片资源地址，返回Promise,当图片加载成功，将图片元素转换为图案返回。
- useImg
  使用图片绘制到canvas画布上，返回Promise
- getImageData
  从canvas上获取ImageData对象
- putImageData
  将ImageData对象以位图的形式绘制到canvas
- useVideo
  使用视频资源
- userFill
  使用填充功能
- useGraphics
  图形绘制接口
- usePaintBrush
  使用画笔，用于线段绘制，支持直线和曲线绘制
- userCustomset
  用户自定义配置
- executeCustomFn
  用户自定义执行函数