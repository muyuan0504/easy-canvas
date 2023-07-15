/*
 * @Date: 2023-05-04 12:13:02
 * @LastEditors: jimouspeng
 * @Description: 类型声明
 * @LastEditTime: 2023-05-04 20:21:24
 * @FilePath: \easy-canvas\index.d.ts
 */
import { EasyCvsOpt, EasyCtx, FontFaceSet } from './main.type'

declare global {
    interface Document {
        fonts: FontFaceSet
    }
}
export declare class EasyCanvas {
    esc: null | EasyCtx
    constructor(options: EasyCvsOpt)
}

export * from './main.type'
