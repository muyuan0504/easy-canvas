/*
 * @Date: 2023-04-20 09:54:47
 * @LastEditors: jimouspeng
 * @Description: 图形绘制, 用普通函数是方便对this的扩展
 * @LastEditTime: 2023-04-20 10:18:33
 * @FilePath: \easy-canvas\src\utils\graphics-helper.ts
 */

import { GraphRectConf } from '../types/main.type'

export function graphicRect(rectConf: GraphRectConf) {
    // 矩形绘制
    const { x, y, w, h, radius = null } = rectConf
    if (radius) {
        this.rect(x, y, w, h, radius)
        return
    }
    this.rect(x, y, w, h)
}
