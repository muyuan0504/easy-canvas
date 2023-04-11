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
        return this.canvasCtx
    }
}
