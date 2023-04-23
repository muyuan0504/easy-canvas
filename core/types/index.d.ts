/*
 * @Date: 2023-04-19 11:44:43
 * @LastEditors: jimouspeng
 * @Description: 类型声明文件
 * @LastEditTime: 2023-04-23 11:23:23
 * @FilePath: \easy-canvas\core\types\index.d.ts
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
