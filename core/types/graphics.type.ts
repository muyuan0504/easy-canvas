/*
 * @Date: 2023-04-19 17:48:26
 * @LastEditors: jimouspeng
 * @Description: 图形处理
 * @LastEditTime: 2023-04-20 17:11:37
 * @FilePath: \easy-canvas\core\types\graphics.type.ts
 */
export type CircleType = 'circle'
export type RectType = 'rect' | 'round-rect'
export type GraphType = CircleType | RectType
type RadiusType = number | Array<number> | undefined | null
interface BaseConf {
    x: number
    y: number
    fillColor?: string
}
export interface GraphRectConf extends BaseConf {
    w: number
    h: number
    radius?: RadiusType
}
export interface GraphCircleConf extends BaseConf {
    radius: number // 半径
    startAngle?: number
    endAngle?: number
    direction?: boolean
}

export interface UseGraphFn {
    (type: RectType, options: GraphRectConf): undefined | void
    (type: CircleType, options: GraphCircleConf): undefined | void
}
