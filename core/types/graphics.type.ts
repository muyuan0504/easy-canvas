/*
 * @Date: 2023-04-19 17:48:26
 * @LastEditors: jimouspeng
 * @Description: 图形处理
 * @LastEditTime: 2023-04-20 10:28:02
 * @FilePath: \easy-canvas\src\types\graphics.type.ts
 */

type GraphType = 'rect' | 'round-rect' | 'circle' // 绘制图形类型
type RadiusType = number | Array<number> | undefined | null
type GraphOptions = GraphRectConf | GraphCircleConf

interface BaseConf {
    x: number
    y: number
}

export interface GraphConf {
    type: GraphType
    options: GraphOptions
}

export interface GraphRectConf extends BaseConf {
    w: number
    h: number
    radius?: RadiusType
}

export interface GraphCircleConf extends BaseConf {
    radius: number
    startAngle: number
    endAngle: number
    direction?: boolean
}
