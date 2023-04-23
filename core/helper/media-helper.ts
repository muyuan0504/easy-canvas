/*
 * @Date: 2023-04-23 11:30:51
 * @LastEditors: jimouspeng
 * @Description: 媒体资源处理，图片-视频
 * @LastEditTime: 2023-04-23 16:31:27
 * @FilePath: \easy-canvas\core\helper\media-helper.ts
 */

import { ImgUseConf, VideoUseConf } from '../types/main.type'

export const useImage = function (imgConf: ImgUseConf): Promise<boolean> {
    const { src, dx, dy, dw, dh } = imgConf
    return new Promise((resolve) => {
        const img = new Image()
        img.src = src
        img.onload = () => {
            this.drawImage(img, dx, dy, dw, dh)
            resolve(true)
        }
    })
}

export const useVideo = function (conf: VideoUseConf) {
    const { videoCtx, dx, dy, dw, dh } = conf
    this.drawImage(videoCtx, dx, dy, dw, dh)
}

export const patternSet = function (source: string) {
    return new Promise((resolve) => {
        const img = new Image()
        img.src = source
        img.onload = () => {
            const ptrn = this.createPattern(img, 'repeat')
            resolve(ptrn)
        }
    })
}
