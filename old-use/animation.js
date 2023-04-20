/** canvas动画 */
export function oneAnimate(ctx) {
    const img = new Image()
    img.src = '../static/image/full_page.jpg'
    const canvasX = 600
    const canvasY = 400
    const speed = 30
    const scale = 1.05
    const y = -4.5

    /** 开始写动画逻辑
     * x: 图片定位点
     */
    const dx = 0.75
    let imgW,
        imgH,
        x = 0,
        clearX,
        clearY
    img.onload = function () {
        imgW = img.width * scale
        imgH = img.height * scale
        if (imgW > canvasX) {
            // 整数型优化动画计算性能
            x = parseInt(canvasX - imgW)
            clearX = parseInt(imgW)
        } else {
            clearX = canvasX
        }
        console.log(img.width, img.height, canvasX, canvasY, x)
        if (imgH > canvasY) {
            clearY = imgH
        } else {
            clearY = canvasY
        }
        setInterval(() => {
            draw.call(ctx)
        }, speed)
    }
    function draw() {
        this.clearRect(0, 0, clearX, clearY) // 渲染前，清空画布
        if (imgW <= canvasX) {
            if (x > canvasX) {
                // 边界收归
                x -= imgW
            }
            if (x > 0) {
                this.drawImage(img, -imgW + x, y, imgW, imgH)
            }
            if (x - imgW > 0) {
                this.drawImage(img, -imgW * 2 + x, y, imgW, imgH)
            }
        } else {
            // 图片区域溢出
            if (x > canvasX) {
                // 边界收归
                x = canvasX - imgW
            }
            if (x > canvasX - imgW) {
                this.drawImage(img, x - imgW + 1, y, imgW, imgH)
            }
        }
        this.drawImage(img, x, y, imgW, imgH)
        x += dx
    }
}
