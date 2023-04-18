export default class EasyCanvas {
    constructor(options) {
        if (!options || !options.elID) {
            throw '未传入canvas元素ID ❤❤'
        }
        const canvasEl = document.getElementById(options.elID)
        if (canvasEl.getContext) {
            this.cvs = canvasEl.getContext('2d')
        } else {
            throw '当前运行环境不支持canvas ❤❤'
        }
        return this.cvs
    }
}
