/*
 * @Date: 2023-04-19 09:46:14
 * @LastEditors: jimouspeng
 * @Description: 编译入口文件
 * @LastEditTime: 2023-04-21 15:20:26
 * @FilePath: \easy-canvas\src\index.ts
 */
import EasyCanvas from '../core/easy-canvas'

const ecs = new EasyCanvas({ el: 'cvs' })

async function excute() {
    async function loadFont() {
        const fontText = await ecs.useFont('../static/font/cute.ttf').catch(() => null)
        ecs.useFill()
        ecs.useText({ text: 'hello world, 落霞与孤鹜齐飞', x: 400, y: 100, maxW: 200, style: `30px ${fontText}`, color: 'white' })
        ecs.useImg({ src: '../static/image/01.jpg', dx: 0, dy: 0, dw: 100, dh: 200 })
    }
    await loadFont()

    ecs.useGraphics('rect', {
        x: 150,
        y: 150,
        w: 100,
        h: 60,
        radius: [20],
        fillColor: 'yellow',
    })

    ecs.useGraphics('circle', {
        x: 200,
        y: 50,
        radius: 40,
    })

    console.log(ecs)

    // ecs.usePaintBrush('straight', {
    //     initX: 80,
    //     initY: 80,
    //     path: [
    //         { x: 100, y: 300 },
    //         { x: 250, y: 150 },
    //         { x: 80, y: 80 },
    //     ],
    //     fillColor: 'green',
    // })
    ecs.usePaintBrush('arc', {
        initX: 200,
        initY: 200,
        path: [{ x1: 100, y1: 20, x2: 100, y2: 50, raduis: 50 }],
    })
}

excute()
// ecs.font = '10px san-serif'
// ecs.fillStyle = 'red'
// ecs.rect(0, 0, ecs.canvas.width, ecs.canvas.height)
// ecs.fill()
// ecs.fillStyle = 'white'
