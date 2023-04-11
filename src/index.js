import './style.css'
import EasyCanvas from './base.js'
console.log('happy canvas')

const cvs = new EasyCanvas('easy-canvas')
console.log(cvs)
cvs.fillStyle = 'green'
cvs.fillRect(0, 0, 150, 100)
cvs.fillStyle = 'rgba(0, 0, 200, 0.5)'
cvs.fillRect(30, 30, 55, 50)
