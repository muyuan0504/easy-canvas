/*
 * @Date: 2023-04-20 09:54:47
 * @LastEditors: jimouspeng
 * @Description: 图形绘制, 用普通函数是方便对this的扩展
 * @LastEditTime: 2023-04-20 17:10:32
 * @FilePath: \easy-canvas\core\helper\graphics-helper.ts
 */

import { GraphRectConf, GraphCircleConf } from '../types/main.type'

export function graphicRect(options: GraphRectConf) {
    // TODO矩形绘制, 先只考虑fill场景,并且color只支持css-string
    const { x, y, w, h, fillColor = '', radius = null } = options
    if (fillColor) {
        this.fillStyle = fillColor
    }
    if (radius) {
        this.beginPath()
        this.roundRect(x, y, w, h, radius)
        this.fill()
    } else {
        this.fillRect(x, y, w, h)
    }
}

export function graphicCircle(options: GraphCircleConf) {
    const { x, y, radius, startAngle = 0, endAngle = Math.PI * 2, direction = false } = options
    this.arc(x, y, radius, startAngle, endAngle, direction)
    this.fill()
}
