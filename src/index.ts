/*
 * @Date: 2023-04-19 09:46:14
 * @LastEditors: jimouspeng
 * @Description: 描述文件内容
 * @LastEditTime: 2023-04-20 10:31:24
 * @FilePath: \easy-canvas\src\index.ts
 */
import EasyCanvas from '../core/easy-canvas'

const ecs = new EasyCanvas({ el: 'cvs' })

ecs.useFont('../static/font/cute.ttf').then((res) => {
    ecs.useFill()
    ecs.useText({ text: 'hello world, 落霞与孤鹜齐飞', x: 400, y: 100, maxW: 200, style: `30px ${res}`, color: 'white' })
    ecs.useImg({ src: '../static/image/01.jpg', dx: 0, dy: 0, dw: 100, dh: 200 })
})

console.log(ecs)

// ecs.font = '10px san-serif'
// ecs.fillStyle = 'red'
// ecs.rect(0, 0, ecs.canvas.width, ecs.canvas.height)
// ecs.fill()
// ecs.fillStyle = 'white'
