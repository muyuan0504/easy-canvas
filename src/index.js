import './style.css'
import EasyCanvas from './base.js'
console.log('happy canvas')

const { ctx: cvs, el: canvasEl } = new EasyCanvas('easy-canvas')
console.log(cvs, canvasEl)

function drawImag() {
    cvs.drawImage()
}

function drawRect() {
    cvs.drawRect({
        x: 0,
        y: 0,
        width: 150,
        height: 100,
        fillColor: 'yellowGreen',
    })
    cvs.clearRect(25, 25, 60, 60)
    cvs.drawRect({
        x: 30,
        y: 30,
        width: 50,
        height: 50,
        type: 'stroke',
        fillColor: 'rgba(0, 0, 200, 0.5)',
    })
}
function drawPath() {
    cvs.drawPath()
}
function drawCicle() {
    cvs.drawCicle()
}
function drawCurve() {
    cvs.drawCurve()
}
function drawRoundedRect() {
    cvs.drawRoundedRect({ x: 50, y: 50, width: 100, height: 50, radius: 10, fillColor: 'gray' })
}

function useShadows() {
    cvs.useShadows()
}
// drawRect()
// drawPath()
// drawCicle()
// drawCurve()
// drawImag()

// drawRoundedRect()
// useShadows()

// cvs.textFill({
//     text: '慕远',
//     font: '36px sans-serif',
//     x: 200,
//     y: 200,
//     maxWidth: 200,
// })
// cvs.drawImg()

// cvs.drawRect({
//     x: 150,
//     y: 150,
//     width: 150,
//     height: 100,
//     fillColor: 'yellowGreen',
// })

// cvs.drawRect({
//     x: 100,
//     y: 100,
//     width: 150,
//     height: 100,
//     fillColor: 'yellowGreen',
// })
// cvs.save()
// cvs.execuOriginApi({ fillStyle: 'red' })
// cvs.drawRect({
//     x: 150,
//     y: 150,
//     width: 150,
//     height: 100,
// })
// cvs.restore()
// cvs.translate()
// cvs.drawRect({
//     x: 350,
//     y: 350,
//     width: 150,
//     height: 100,
// })
// cvs.scale(-1, 2)
// cvs.clip()
// cvs.ainimate(cvs)

/** 绘制小球 */
const ball = {
    x: 100,
    y: 100,
    vx: 5, // x方向移动距离
    vy: 1, // y方向移动距离
    raduis: 25,
    color: 'orange',
    draw: function () {
        cvs.beginPath()
        cvs.arc(this.x, this.y, this.raduis, 0, Math.PI * 2, true)
        cvs.closePath()
        cvs.fillStyle = this.color
        cvs.fill()
    },
}

let raf,
    running = false

function draw() {
    // cvs.fillStyle = 'rgba(255, 255, 255, 0.3)'
    // cvs.fillRect(0, 0, canvasEl.width, canvasEl.height)
    // cvs.clearRect(0, 0, 600, 400)
    clear()
    console.log(ball)
    ball.draw()
    ball.x += ball.vx
    ball.y += ball.vy
    ball.vy *= 0.99 // 位移递减
    ball.vy += 0.25
    if (ball.y + ball.vy > canvasEl.height || ball.y + ball.vy < 0) {
        ball.vy = -ball.vy
    }
    if (ball.x + ball.vx > canvasEl.width || ball.x + ball.vx < 0) {
        ball.vx = -ball.vx
    }
    generateImg()
    raf = window.requestAnimationFrame(draw)
}

// canvasEl.addEventListener('mouseover', (e) => {
//     raf = window.requestAnimationFrame(draw)
//     console.log('raf: ', raf)
// })

canvasEl.addEventListener('mouseout', (e) => {
    window.cancelAnimationFrame(raf)
    console.log(raf, '动画移除')
    running = false
})

canvasEl.addEventListener('click', function (e) {
    if (!running) {
        raf = window.requestAnimationFrame(draw)
        running = true
    }
})

// canvasEl.addEventListener('mousemove', function (e) {
//     if (!running) {
//         clear()
//         ball.x = e.offsetX
//         ball.y = e.offsetY
//         ball.draw()
//     }
// })

function clear() {
    cvs.fillStyle = 'rgba(255,255,255,0.6)'
    cvs.fillRect(0, 0, canvasEl.width, canvasEl.height)
}

// ball.draw()

function generateImg() {
    const pngData = canvasEl.toDataURL('image/png') // 默认设定。创建一个 PNG 图片。
    console.log('pngdata: ', pngData)
    const imgEl = document.createElement('img')
    imgEl.setAttribute('src', pngData)
    document.body.appendChild(imgEl)
}

// canvas.toDataURL('image/jpeg', quality) // 创建一个 JPG 图片。你可以有选择地提供从 0 到 1 的品质量，1 表示最好品质，0 基本不被辨析但有比较小的文件大小。

// canvas.toBlob(callback, type, encoderOptions) // 创建了一个在画布中的代表图片的 Blob 对像

cvs.fillStyle = 'orange'
cvs.fillRect(0, 0, 100, 60)

cvs.globalAlpha = 0.5

cvs.fillRect(200, 200, 100, 60)

// cvs.globalAlpha = 1
cvs.lineWidth = 20
cvs.beginPath()
cvs.moveTo(120, 120)
cvs.lineTo(120, 200)
cvs.stroke()

cvs.font = '30px sans-serif'
cvs.fillText('hahahah', 120, 80)
