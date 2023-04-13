/** 绘制圆角矩形，radius跟height用坐标相对y定位，不需要计算高度坐标的时候-radius高度 */
export const drawRoundedRect = function (x, y, width, height, radius, color) {
    let offset = 0
    function lineDash() {
        this.setLineDash([4, 2])
        this.lineDashOffset = -offset
        this.strokeRect(200, 200, 100, 100)
    }
    function march() {
        offset++
        if (offset > 16) {
            offset = 0
        }
    }
    const callLineDash = lineDash.bind(this)
    callLineDash()

    /** 圆型渐变 */
    test.call(this)
    /** 创建线性渐变 */
    const lineargradient = this.createLinearGradient(x, y, x + width, y + height)
    // lineargradient.addColorStop(0, 'white')
    // lineargradient.addColorStop(0.5, 'red')
    // lineargradient.addColorStop(1, 'black')

    lineargradient.addColorStop(0, '#A7D30C')
    lineargradient.addColorStop(0.9, '#019F62')
    lineargradient.addColorStop(1, 'rgba(1,159,98,0)')

    this.lineWidth = 1
    this.lineCap = 'round'
    console.log('====================================')
    console.log(color)
    console.log('====================================')
    this.fillStyle = lineargradient
    this.beginPath()
    this.moveTo(x, y + radius)
    this.lineTo(x, y + height - radius)
    // quadraticCurveTo(cp1x, cp1y, x, y) 绘制二次贝塞尔曲线，cp1x,cp1y 为一个控制点，x,y 为结束点
    this.quadraticCurveTo(x, y + height, x + radius, y + height)
    this.lineTo(x + width - radius, y + height)
    this.quadraticCurveTo(x + width, y + height, x + width, y + height - radius)
    this.lineTo(x + width, y + radius)
    this.quadraticCurveTo(x + width, y, x + width - radius, y)
    this.lineTo(x + radius, y)
    // fix圆角
    this.quadraticCurveTo(x, y, x, y + radius)
    this.fill()
}

function test() {
    // createRadialGradient(x1, y1, r1, x2, y2, r2)
    // 接受 6 个参数，前三个定义一个以 (x1,y1) 为原点，半径为 r1 的圆，
    // 后三个参数则定义另一个以 (x2,y2) 为原点，半径为 r2 的圆。
    var radgrad = this.createRadialGradient(45, 45, 10, 52, 50, 30)
    radgrad.addColorStop(0, '#A7D30C')
    radgrad.addColorStop(0.9, '#019F62')
    radgrad.addColorStop(1, 'rgba(1,159,98,0)')

    var radgrad2 = this.createRadialGradient(105, 105, 20, 112, 120, 50)
    radgrad2.addColorStop(0, '#FF5F98')
    radgrad2.addColorStop(0.75, '#FF0188')
    radgrad2.addColorStop(1, 'rgba(255,1,136,0)')

    var radgrad3 = this.createRadialGradient(95, 15, 15, 102, 20, 40)
    radgrad3.addColorStop(0, '#00C9FF')
    radgrad3.addColorStop(0.8, '#00B5E2')
    radgrad3.addColorStop(1, 'rgba(0,201,255,0)')

    var radgrad4 = this.createRadialGradient(0, 150, 50, 0, 140, 90)
    radgrad4.addColorStop(0, '#F4F201')
    radgrad4.addColorStop(0.8, '#E4C700')
    radgrad4.addColorStop(1, 'rgba(228,199,0,0)')

    // 画图形
    this.fillStyle = radgrad4
    this.fillRect(0, 0, 150, 150)
    this.fillStyle = radgrad3
    this.fillRect(0, 0, 150, 150)
    this.fillStyle = radgrad2
    this.fillRect(0, 0, 150, 150)
    this.fillStyle = radgrad
    this.fillRect(0, 0, 150, 150)
}
