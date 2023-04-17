/** canvas:
 *  浏览器支持：IE9之前的IE浏览器不支持
 *  默认宽高为：300px * 150px
 *  渲染上下文：2D 渲染上下文( WebGL 使用了基于OpenGL ES的 3D 上下文)
 */
import { drawRoundedRect } from './rect-api'
import { textFill } from './font-api'
import { drawImage } from './image-api'
import { oneAnimate } from './animation'
export default class EasyCanvas {
    constructor(elID) {
        const canvasEl = document.getElementById(elID)
        if (canvasEl.getContext) {
            this.canvasCtx = canvasEl.getContext('2d')
        } else {
            throw '当前运行环境不支持canvas'
        }
        // this.canvasCtx.globalAlpha = 0.2
        return {
            el: canvasEl,
            ctx: this.canvasCtx,
        }
    }
    drawImg() {
        drawImage(this.canvasCtx)
    }
    // drawImage() {
    //     const img = new Image()
    //     // img.src = require('@img/01.jpg')
    //     img.src = '../static/image/01.jpg'
    //     img.onload = (msg) => {
    //         console.log('加載成功--', msg)
    //         // 创建图案
    //         var ptrn = this.canvasCtx.createPattern(img, 'repeat-x')
    //         this.canvasCtx.fillStyle = ptrn
    //         this.canvasCtx.fillRect(200, 20, 150, 150)
    //     }
    //     img.onerror = (err) => {
    //         console.log('加載error--', err)
    //     }
    //     console.log(img)
    // }
    /** 绘制矩形 */
    drawRect({ x, y, width, height, fillColor = '', type = 'fill' } = options) {
        // fillRect：绘制一个填充的矩形，需要先填充fillStyle，再绘制才能生效
        if (fillColor) {
            this.canvasCtx.fillStyle = fillColor
        }
        if (type == 'fill') {
            this.canvasCtx.fillRect(x, y, width, height)
        } else {
            this.canvasCtx.strokeRect(x, y, width, height)
        }
    }
    /** 绘制圆角矩形 */
    drawRoundedRect({ x, y, width, height, radius, fillColor } = options) {
        drawRoundedRect.call(this.canvasCtx, x, y, width, height, radius, fillColor)
    }
    /** 清除指定矩形区域，让清除部分完全透明 */
    clearRect(x, y, width, height) {
        this.canvasCtx.clearRect(x, y, width, height)
    }
    /** 绘制路径：图形的基本元素是路径。路径是通过不同颜色和宽度的线段或曲线相连形成的不同形状的点的集合
     * 1. 创建路径起始点;
     * 2. 使用画图命令去画出路径;
     * 3. 把路径封闭;
     * 4. 一旦路径生成，你就能通过描边或填充路径区域来渲染图形
     *
     * lineTo(x, y)：绘制直线
     */
    drawPath() {
        // 生成路径的第一步
        this.canvasCtx.fillStyle = 'red'
        this.canvasCtx.beginPath()
        // 设置起点：将笔触移动到指定的坐标 x 以及 y 上
        this.canvasCtx.moveTo(75, 50)
        this.canvasCtx.lineTo(100, 75)
        this.canvasCtx.lineTo(100, 25)
        // 通过线条来绘制图形轮廓
        this.canvasCtx.stroke()
        // 闭合路径之后图形绘制命令又重新指向到上下文中
        // 闭合路径 closePath(),不是必需的。
        // 这个方法会通过绘制一条从当前点到开始点的直线来闭合图形。
        // 如果图形是已经闭合了的，即当前点为开始点，该函数什么也不做
        // this.canvasCtx.closePath()
        // 当你调用 fill() 函数时，所有没有闭合的形状都会自动闭合，所以你不需要调用 closePath() 函数。
        // 但是调用 stroke() 时不会自动闭合
        this.canvasCtx.fill()

        /** 使用path2D */
        this.canvasCtx.fillStyle = 'blue'
        const drawCircle = new Path2D()
        drawCircle.moveTo(125, 35)
        drawCircle.arc(100, 35, 25, 0, 2 * Math.PI)

        this.canvasCtx.fill(drawCircle)

        for (var i = 0; i < 6; i++) {
            for (var j = 0; j < 6; j++) {
                this.canvasCtx.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ',' + Math.floor(255 - 42.5 * j) + ',0)'
                this.canvasCtx.fillRect(j * 25, i * 25, 25, 25)
            }
        }
    }
    /**
     * arc(x, y, radius, startAngle, endAngle, anticlokwise:boolean-方向)：
     * 绘制圆，画一个以（x,y）为圆心的以 radius 为半径的圆弧（圆），
     * 从 startAngle 开始到 endAngle 结束，按照 anticlockwise 给定的方向（默认为顺时针）来生成
     *
     * arcTo(x1, y1, x2, y2, radius)：绘制圆弧，根据给定的控制点和半径画一段圆弧，再以直线连接两个控制点
     */
    drawCicle() {
        // this.canvasCtx.fillStyle = 'black'
        this.canvasCtx.moveTo(100, 100)
        this.canvasCtx.arc(100, 100, 10, Math.PI * 1, Math.PI * 2, false)
        this.canvasCtx.fill()
    }
    /** 绘制曲线
     * quadraticCurveTo(cp1x, cp1y, x, y)：
     * 绘制二次贝塞尔曲线，cp1x,cp1y 为一个控制点，
     * (x,y) 为结束点x，y坐标，起始点为当前line所画到点，或者moveTo到达的坐标
     *
     * bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)：
     * 绘制三次贝塞尔曲线，cp1x, cp1y为控制点一，cp2x,cp2y为控制点二，x,y为结束点
     *
     * 二次贝塞尔曲线有一个开始点（蓝色）、一个结束点（蓝色）以及一个控制点（红色），而三次贝塞尔曲线有两个控制点
     */
    drawCurve() {
        this.canvasCtx.fillStyle = 'black'
        // 二次贝塞尔曲线
        this.canvasCtx.beginPath()
        this.canvasCtx.moveTo(300, 150)
        this.canvasCtx.quadraticCurveTo(150, 150, 150, 75)
        // this.canvasCtx.quadraticCurveTo(25, 100, 50, 100)
        // this.canvasCtx.quadraticCurveTo(50, 120, 30, 125)
        // this.canvasCtx.quadraticCurveTo(60, 120, 65, 100)
        // this.canvasCtx.quadraticCurveTo(125, 100, 125, 62.5)
        // this.canvasCtx.quadraticCurveTo(125, 25, 75, 25)
        this.canvasCtx.stroke()

        //三次贝塞尔曲线
        // this.canvasCtx.fillStyle = 'red'
        // this.canvasCtx.beginPath()
        // this.canvasCtx.moveTo(75, 40)
        // this.canvasCtx.bezierCurveTo(75, 37, 70, 25, 50, 25)
        // this.canvasCtx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5)
        // this.canvasCtx.bezierCurveTo(20, 80, 40, 102, 75, 120)
        // this.canvasCtx.bezierCurveTo(110, 102, 130, 80, 130, 62.5)
        // this.canvasCtx.bezierCurveTo(130, 62.5, 130, 25, 100, 25)
        // this.canvasCtx.bezierCurveTo(85, 25, 75, 37, 75, 40)
        // this.canvasCtx.fill()
    }
    /** 设置阴影
     * shadowOffsetX
     * shadowOffsetY
     * shadowOffsetX 和 shadowOffsetY 用来设定阴影在 X 和 Y 轴的延伸距离，
     * 它们是不受变换矩阵所影响的。负值表示阴影会往上或左延伸，正值则表示会往下或右延伸，它们默认都为 0
     *
     * shadowBlur = float
     * 用于设定阴影的模糊程度，其数值并不跟像素数量挂钩，也不受变换矩阵的影响，默认为 0
     *
     * shadowColor = color
     * shadowColor 是标准的 CSS 颜色值，用于设定阴影颜色效果，默认是全透明的黑色
     */
    useShadows() {
        this.canvasCtx.shadowOffsetX = 2
        this.canvasCtx.shadowOffsetY = 2
        this.canvasCtx.shadowBlur = 2
        this.canvasCtx.shadowColor = 'rgba(0, 0, 0, 0.5)'

        this.canvasCtx.font = '20px Times New Roman'
        this.canvasCtx.fillStyle = 'Black'
        this.canvasCtx.fillText('Sample String', 5, 30)
    }
    textFill(options) {
        textFill.call(this.canvasCtx, options)
    }
    /** 执行自定义api调用 */
    execuOriginApi(options) {
        for (let key in options) {
            this.canvasCtx[key] = options[key]
        }
    }
    /** 当前配置（即移动，旋转和缩放，见下）入栈：
     * strokeStyle, fillStyle, globalAlpha, lineWidth, lineCap, lineJoin, miterLimit, lineDashOffset, shadowOffsetX, shadowOffsetY, shadowBlur, shadowColor, globalCompositeOperation, font, textAlign, textBaseline, direction, imageSmoothingEnabled
     * 当前的裁切路径（clipping path）
     */
    save() {
        this.canvasCtx.save()
    }
    restore() {
        this.canvasCtx.restore()
    }
    /** translate(x, y) 用来移动 canvas 和它的原点到一个不同的位置
     * translate方法接受两个参数。*x *是左右偏移量，y 是上下偏移量
     */
    translate() {
        this.canvasCtx.translate(80, 0)
        setTimeout(() => {
            this.canvasCtx.translate(0, 0)
            console.log('执行了？')
        }, 2000)
    }
    /** 旋转rotate(angle)
     * 旋转的中心点始终是 canvas 的原点，如果要改变它，我们需要用到 translate方法
     * 这个方法只接受一个参数：旋转的角度 (angle)，它是顺时针方向的，以弧度为单位的值
     */
    rotate(angle) {
        this.canvasCtx.rotate(angle)
    }
    /** 缩放
     * scale(x, y) scale方法可以缩放画布的水平和垂直的单位
     * 两个参数都是实数，可以为负数，x 为水平缩放因子，y 为垂直缩放因子，如果比 1 小，会缩小图形，如果比 1 大会放大图形。默认值为 1，为实际大小
     */
    scale(x, y) {
        this.canvasCtx.scale(x, y)
    }
    /** 裁剪：将当前正在构建的路径转换为当前的裁剪路径 */
    clip() {
        this.canvasCtx.beginPath()
        this.canvasCtx.arc(0, 0, 60, 0, Math.PI * 2, true)
        this.canvasCtx.clip()
    }
    /** 变形：
     * transform(a, b, c, d, e, f)
     * a (m11) 水平方向的缩放
     * b(m12) 竖直方向的倾斜偏移
     * c(m21) 水平方向的倾斜偏移
     * d(m22) 竖直方向的缩放
     * e(dx) 水平方向的移动
     * f(dy) 竖直方向的移动
     *
     * setTransform(a, b, c, d, e, f) 取消了当前变形，然后设置为指定的变形
     *
     * resetTransform() 重置当前变形为单位矩阵，它和调用以下语句是一样的：ctx.setTransform(1, 0, 0, 1, 0, 0);
     */
    transform() {}
    ainimate() {
        oneAnimate(this.canvasCtx)
    }
    /** 小球动画 */
    ballAnimate() {}
}
