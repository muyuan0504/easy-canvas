/*
 * @Date: 2023-04-21 09:48:41
 * @LastEditors: jimouspeng
 * @Description: 画笔相关类型文件
 * @LastEditTime: 2023-04-21 14:53:42
 * @FilePath: \easy-canvas\core\types\paint.type.ts
 */
interface PathPoint {
    x: number
    y: number
}

interface PathPointArc {
    x1: number // (x, y)：圆心坐标
    y1: number
    x2: number
    y2: number
    raduis: number
}

type PaintStra = 'straight'
type PaintArc = 'arc'
export type PaintType = PaintStra | PaintArc
export type PointArray = Array<PathPoint>
export type PointArcArray = Array<PathPointArc>

interface PaintBrushBase {
    initX: number // (initX, initY): 移动路径起点坐标
    initY: number
    fillColor?: string
}
export interface PaintStraConf extends PaintBrushBase {
    path: PointArray // path: 以{x: number, y: number}组成的数组，代表路径移动的位置
}
export interface PaintArcConf extends PaintBrushBase {
    path: PointArcArray
}

export interface UsePaintFn {
    (type: PaintStra, conf: PaintStraConf): void
    (type: PaintArc, conf: PaintArcConf): void
}
