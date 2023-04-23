/*
 * @Date: 2023-04-19 09:46:14
 * @LastEditors: jimouspeng
 * @Description: 编译入口文件
 * @LastEditTime: 2023-04-23 16:43:49
 * @FilePath: \easy-canvas\src\index.ts
 */
import './style.css'
import EasyCanvas from '../core/easy-canvas'
import VideoProcessor from '../core/easy-video'

const videoResource = require('../static/video/video.ogv').default
const videoEl = document.getElementById('videoEl')
videoEl.setAttribute('src', videoResource)

const ecs = new EasyCanvas({ el: 'cvs' })
const ecs2 = new EasyCanvas({ el: 'video-cvs' })

async function excute() {
    async function loadFont() {
        const fontText = await ecs.useFont('ecs-font', require('../static/font/cute.ttf').default).catch(() => null)
        ecs.useText({ text: 'hello world, 落霞与孤鹜齐飞', x: 400, y: 100, maxW: 200, style: `30px ${fontText}`, color: 'white' })
        const imgUrl = require('@img/holiday.png').default
        const patn = await ecs.setPattern(imgUrl)
        ecs.useFill({ color: patn, x: 0, y: 0, fx: 320, fy: 192 })
        // ecs.useImg({ src: require('../static/image/01.jpg').default, dx: 150, dy: 150, dw: 320, dh: 192 })
    }
    // await loadFont()
    // ecs.useGraphics('rect', {
    //     x: 150,
    //     y: 150,
    //     w: 100,
    //     h: 60,
    //     radius: [20],
    //     fillColor: 'yellow',
    // })
    // ecs.useGraphics('circle', {
    //     x: 200,
    //     y: 50,
    //     radius: 40,
    // })
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
    // ecs.usePaintBrush('arc', {
    //     initX: 200,
    //     initY: 200,
    //     path: [{ x1: 100, y1: 20, x2: 100, y2: 50, raduis: 50 }],
    // })
}

new VideoProcessor(videoEl, ecs2, ecs)

excute()
// ecs.font = '10px san-serif'
// ecs.fillStyle = 'red'
// ecs.rect(0, 0, ecs.canvas.width, ecs.canvas.height)
// ecs.fill()
// ecs.fillStyle = 'white'
