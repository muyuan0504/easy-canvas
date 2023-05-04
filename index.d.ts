/*
 * @Date: 2023-05-04 12:13:02
 * @LastEditors: jimouspeng
 * @Description: 类型声明
 * @LastEditTime: 2023-05-04 12:14:50
 * @FilePath: \easy-canvas\type.d.ts
 */
import { EasyCvsOpt, EasyCtx, FontFaceSet } from './types/main.type'

declare global {
    interface Document {
        fonts: FontFaceSet
    }
}
export declare class EasyCanvas {
    esc: null | EasyCtx
    constructor(options: EasyCvsOpt)
}
