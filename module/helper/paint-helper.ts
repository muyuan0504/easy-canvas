/*
 * @Date: 2023-04-21 09:59:03
 * @LastEditors: jimouspeng
 * @Description: 画笔相关工具函数
 * @LastEditTime: 2023-04-21 15:22:13
 * @FilePath: \easy-canvas\core\helper\paint-helper.ts
 */

import { PaintStraConf, PaintArcConf } from '../../types/main.type'

export function paintStraightLine(conf: PaintStraConf) {
    const { path, initX, initY, fillColor } = conf
    this.fillStyle = fillColor || 'black'
    // this.strokeStyle = fillColor || 'black'
    // 使用直线
    this.beginPath()
    this.moveTo(initX, initY)
    for (let i = 0; i < path.length; i++) {
        const { x, y } = path[i]
        this.lineTo(x, y)
    }
    this.fill()
    // this.stroke()
    // this.closePath() // stroke需要手动结束path
}

export function paintArcLine(conf: PaintArcConf) {
    const { initX, initY, path, fillColor = '' } = conf
    this.fillStyle = fillColor || 'black'
    // this.strokeStyle = fillColor || 'black'
    // 使用弧线arcTo:根据给定的控制点和半径画一段圆弧，再以直线连接两个控制点
    this.beginPath()
    this.moveTo(initX, initY)
    for (let i = 0; i < path.length; i++) {
        const { x1, y1, x2, y2, raduis } = path[i]
        this.arcTo(x1, y1, x2, y2, raduis)
    }

    // this.fill()
    this.stroke()
    this.closePath() // stroke需要手动结束path
}
