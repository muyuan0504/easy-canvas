/*
 * @Date: 2023-04-19 11:44:43
 * @LastEditors: jimouspeng
 * @Description: 类型声明文件
 * @LastEditTime: 2023-04-19 14:52:42
 * @FilePath: \easy-canvas\src\types\index.d.ts
 */
import { FontFaceSet } from './font.type'
import { EasyCvsOpt, EasyCtx } from './core.type'

declare global {
    interface Document {
        fonts: FontFaceSet
    }
}

declare class EasyCanvas {
    esc: null | EasyCtx
    constructor(options: EasyCvsOpt)
}
