/*
 * @Date: 2023-04-19 09:46:14
 * @LastEditors: jimouspeng
 * @Description: easy-canvas
 * @LastEditTime: 2023-04-20 17:06:05
 * @FilePath: \easy-canvas\core\easy-canvas.ts
 */
import { EasyCvsOpt, TextFillConf, ImgUseConf, UseGraphFn } from './types/main.type'
import { graphicRect, graphicCircle } from './helper/main'

const elIDError = '未传入canvas元素ID ❤❤'
const idOrEnvError = '未找到符合当前ID的canvas元素 或 当前运行环境不支持canvas ❤❤'

export default class EasyCanvas {
    ecs: CanvasRenderingContext2D | null
    constructor(options: EasyCvsOpt) {
        if (!options || !options.el) {
            throw elIDError
        }
        const canvasEl = document.getElementById(options.el)
        if (!canvasEl || !(canvasEl as HTMLCanvasElement).getContext) {
            throw idOrEnvError
        }
        this.ecs = (canvasEl as HTMLCanvasElement).getContext('2d')
    }
    /** use font file */
    useFont(fontUrl: string): Promise<string | unknown> {
        return new Promise((resolve, reject) => {
            const ecsFont = new FontFace('ecs-font', `url(${fontUrl})`)
            document.fonts.add(ecsFont)
            ecsFont
                .load()
                .then(() => {
                    resolve('ecs-font')
                })
                .catch((err) => {
                    reject(err)
                })
        })
    }
    /** use text */
    useText(textParam: TextFillConf) {
        const { text, x, y, maxW = 0, style = '10px san-serif', color = 'black' } = textParam
        this.ecs.fillStyle = color
        console.log(this.ecs.measureText(text))
        if (style) this.ecs.font = style
        if (maxW) {
            this.ecs.fillText(text, x, y, maxW)
        } else {
            this.ecs.fillText(text, x, y)
        }
    }
    /** use image */
    useImg(conf: ImgUseConf): Promise<boolean> {
        const { src, dx, dy, dw, dh } = conf
        return new Promise((resolve) => {
            const img = new Image()
            img.src = src
            img.onload = () => {
                const pattern = this.ecs.createPattern(img, 'no-repeat')
                this.ecs.fillStyle = pattern
                this.ecs.fillRect(dx, dy, dw, dh)
                resolve(true)
            }
        })
    }
    /** use fill */
    useFill() {
        this.ecs.fillStyle = 'orange'
        this.ecs.rect(0, 0, this.ecs.canvas.width, this.ecs.canvas.height)
        this.ecs.fill()
    }
    /** use graphics */
    useGraphics: UseGraphFn = function (type: any, options: any) {
        switch (type) {
            case 'rect':
            case 'round-rect':
                graphicRect.call(this.ecs, options)
                break
            case 'circle':
                graphicCircle.call(this.ecs, options)
                break
            default:
                break
        }
    }
    /** use paint-line */
    usePaintLine() {}
}
