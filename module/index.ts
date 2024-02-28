/*
 * @Date: 2023-04-19 09:46:14
 * @LastEditors: jimouspeng
 * @Description: easy-canvas
 * @LastEditTime: 2023-05-04 10:26:52
 * @FilePath: \easy-canvas\core\easy-canvas.ts
 */
import { EasyCvsOpt, TextFillConf, ImgUseConf, VideoUseConf, UseGraphFn, PaintType, UsePaintFn, ImgDataGet, ImgDataPut, fillConf } from '../types/main.type'
import { graphicRect, graphicCircle, paintStraightLine, paintArcLine, useImage, useVideo, patternSet } from './helper/main'

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
    /** use font file
     * @param fontUrl: 字体链接
     * @returns {Promise}: 字体资源加载成功后返回字体别名
     */
    useFont(font: string, fontUrl: string): Promise<string | unknown> {
        return new Promise((resolve, reject) => {
            const ecsFont = new FontFace('ecs-font', `url(${fontUrl})`)
            document.fonts.add(ecsFont)
            ecsFont
                .load()
                .then(() => {
                    resolve(font)
                })
                .catch((err) => {
                    reject(err)
                })
        })
    }
    /** use text
     * @param textParam: {}
     * @param textParam.text: 用于渲染的文字
     * @param textParam.x: 文字渲染是x轴坐标
     * @param textParam.y: 文字渲染的y轴坐标
     * @param textParam.maxW: 字体填充最大宽度，为保证文字全部显示，在有限宽度下会被缩放
     * @param textParam.style: 字体样式
     * @param textParam.color:字体颜色
     * @returns void
     */
    useText(textParam: TextFillConf) {
        const { text, x, y, maxW = 0, style = '10px san-serif', color = 'black' } = textParam
        this.ecs.fillStyle = color
        if (style) this.ecs.font = style
        if (maxW) {
            this.ecs.fillText(text, x, y, maxW)
        } else {
            this.ecs.fillText(text, x, y)
        }
    }
    /** setPattern:设置图案
     * @param source
     * @returns Promise<pattern>
     */
    setPattern(source: string) {
        return patternSet.call(this.ecs, source)
    }
    /** use image
     * @param conf {}
     * @param conf.src: 绘制到上下文的元素
     * @param conf.dx: 画布的x轴坐标
     * @param conf.dy: 画布的y轴坐标
     * @param conf.dw: 画布的绘制宽度
     * @param conf.dh: 画布的绘制高度
     */
    useImg(conf: ImgUseConf): Promise<boolean> {
        return useImage.call(this.ecs, conf)
    }
    /** getImageData:提取图片元数据
     * @param conf.sx: 要提取图像数据的矩形区域的x轴坐标
     * @param conf.sy: 要提取的Y轴坐标
     * @param conf.sw: 要提取的图像数据宽度
     * @param conf.sw: 要提取的图像数据高度
     * @returns ImageData对象
     */
    getImageData(conf: ImgDataGet) {
        const { sx, sy, sw, sh } = conf
        return this.ecs.getImageData(sx, sy, sw, sh)
    }
    /** putImageData: 将ImageData对象绘制到位图
     * @param conf ImageData对象
     */
    putImageData(conf: ImgDataPut) {
        const { imgData, dx, dy } = conf
        this.ecs.putImageData(imgData, dx, dy)
    }
    /**
     *
     * @param conf.videoCtx: 视频元素实例
     * @param conf.dx：画布上的x轴坐标
     * @param conf.dy：画布上的Y轴坐标
     * @param conf.dw：画布绘制宽度
     * @param conf.dh：画布绘制高度
     * @returns
     */
    useVideo(conf: VideoUseConf) {
        return useVideo.call(this.ecs, conf)
    }
    /** use fill
     * @param conf.color: 填充颜色
     * @param conf.x: 矩形在画布的x轴坐标
     * @param conf.y: 矩形在画布的Y轴坐标
     * @param conf.fx: 矩形宽度
     * @param conf.fy: 矩形高度
     */
    useFill(conf: fillConf) {
        const { color, x = 0, y = 0, fx = 0, fy = 0 } = conf
        this.ecs.fillStyle = color
        this.ecs.fillRect(x, y, fx, fy)
    }
    /** use graphics：使用图形
     * @param type: 图形类型，支持'rect', 'round-rect', 'circle'
     * @params options 图形绘制参数
     */
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
    /** use paint-brush */
    usePaintBrush: UsePaintFn = function (type: PaintType, conf: any) {
        switch (type) {
            case 'straight':
                paintStraightLine.call(this.ecs, conf)
                break
        case 'arc':
                paintArcLine.call(this.ecs, conf)
                break
            default:
                break
        }
    }
    /** custom-use：自定义配置 */
    useCustomSet(conf: any) {
        for (let key in conf) {
            this.ecs[key] = conf[key]
        }
    }
    /** executeCustomFn：自定义执行函数 */
    executeCustomFn(exeFn: Function) {
        return exeFn.call(this.ecs)
    }
}
