/*
 * @Date: 2023-04-19 14:22:04
 * @LastEditors: jimouspeng
 * @Description: 描述文件内容
 * @LastEditTime: 2023-04-23 15:41:06
 * @FilePath: \easy-canvas\core\types\core.type.ts
 */
export interface EasyCvsOpt {
    el: string
}

export interface EasyCtx {
    fillStyle: string
}

export interface fillConf {
    color: string | CanvasPattern
    x: number
    y: number
    fx: number
    fy: number
}
