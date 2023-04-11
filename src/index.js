import './style.css'
import EasyCanvas from './base.js'
console.log('happy canvas')

const cvs = new EasyCanvas('easy-canvas')
console.log(cvs)
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
drawRect()
