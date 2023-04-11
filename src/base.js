/** canvas:
 *  浏览器支持：IE9之前的IE浏览器不支持
 *  默认宽高为：300px * 150px
 *  渲染上下文：2D 渲染上下文( WebGL 使用了基于OpenGL ES的 3D 上下文)
 */

export default class EasyCanvas {
    constructor(elID) {
        const canvasEl = document.getElementById(elID)
        if (canvasEl.getContext) {
            this.canvasCtx = canvasEl.getContext('2d')
        } else {
            throw '当前运行环境不支持canvas'
        }
    }
    /** 绘制矩形 */
    drawRect({ x, y, width, height, fillColor, type = 'fill' } = options) {
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
    /** 清除指定矩形区域，让清除部分完全透明 */
    cleanRect({ x, y, width, height } = options) {
        this.canvasCtx.clearRect(x, y, width, height)
    }
    /** 绘制路径：图形的基本元素是路径。路径是通过不同颜色和宽度的线段或曲线相连形成的不同形状的点的集合
     * 1. 创建路径起始点;
     * 2. 使用画图命令去画出路径;
     * 3. 把路径封闭;
     * 4. 一旦路径生成，你就能通过描边或填充路径区域来渲染图形
     */
    drawPath() {
        // 生成路径的第一步
        this.canvasCtx.beginPath()
        this.canvasCtx.stroke()
        // 闭合路径 closePath(),不是必需的。
        // 这个方法会通过绘制一条从当前点到开始点的直线来闭合图形。
        // 如果图形是已经闭合了的，即当前点为开始点，该函数什么也不做
        this.canvasCtx.closePath()
        // 当你调用 fill() 函数时，所有没有闭合的形状都会自动闭合，所以你不需要调用 closePath() 函数。
        // 但是调用 stroke() 时不会自动闭合
        this.canvasCtx.fill()
    }
}
