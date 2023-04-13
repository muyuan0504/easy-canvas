import './style.css'
import EasyCanvas from './base.js'
console.log('happy canvas')

const cvs = new EasyCanvas('easy-canvas')
console.log(cvs)

function drawImag() {
    cvs.drawImage()
}
drawImag()
function drawRect() {
    cvs.drawRect({
        x: 0,
        y: 0,
        width: 150,
        height: 100,
        fillColor: 'yellowGreen',
    })
    cvs.cleanRect({ x: 25, y: 25, width: 60, height: 60 })
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
// drawRect()
// drawPath()
// drawCicle()
// drawCurve()

drawRoundedRect()
