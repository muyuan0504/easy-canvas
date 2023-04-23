/*
 * @Date: 2023-04-19 15:05:41
 * @LastEditors: jimouspeng
 * @Description: 图片配置类型文件
 * @LastEditTime: 2023-04-23 14:57:16
 * @FilePath: \easy-canvas\core\types\media.type.ts
 */
export interface ImgDataGet {
    sx: number
    sy: number
    sw: number
    sh: number
}
export interface ImgDataPut {
    imgData: ImageData
    dx: number
    dy: number
}
interface MeidaBaseConf {
    dx: number
    dy: number
    dw: number
    dh: number
}
export interface ImgUseConf extends MeidaBaseConf {
    src?: string
    dx: number
    dy: number
    dw: number
    dh: number
    type?: string
}

export interface VideoUseConf extends MeidaBaseConf {
    videoCtx: HTMLVideoElement
}
