/*
 * @Date: 2023-04-23 11:17:53
 * @LastEditors: jimouspeng
 * @Description: 视频播放处理器
 * @LastEditTime: 2023-04-23 16:46:21
 * @FilePath: \easy-canvas\core\easy-video.ts
 */
import EasyCanvas from './easy-canvas'
export default class VideoProcessor {
    constructor(public videoEl: any, public ecs1: EasyCanvas, public ecs2: EasyCanvas) {
        const processor = this
        this.videoEl.addEventListener(
            'play',
            () => {
                processor.timerCallback()
            },
            false
        )
    }
    timerCallback() {
        if (this.videoEl.paused || this.videoEl.ended) {
            return
        }
        this.computeFrame()
        setTimeout(() => {
            this.timerCallback()
        }, 0)
    }
    /** 操作视频帧数据 */
    computeFrame() {
        const videoW = parseInt(this.videoEl.videoWidth)
        const videoH = parseInt(this.videoEl.videoHeight)
        const param = {
            videoCtx: this.videoEl,
            dx: 0,
            dy: 0,
            dw: videoW,
            dh: videoH,
        }
        this.ecs1.useVideo(param)
        const imgDataGet = {
            sx: 0,
            sy: 0,
            sw: videoW,
            sh: videoH,
        }
        let frame = this.ecs1.getImageData(imgDataGet)
        let l = frame.data.length / 4
        for (let i = 0; i < l; i++) {
            let r = frame.data[i * 4 + 0]
            let g = frame.data[i * 4 + 1]
            let b = frame.data[i * 4 + 2]
            // let a = frame.data[i * 4 + 3]
            // frame.data[i * 4 + 3] rgba的a的值，处理透明度
            if (g > 100 && r > 100 && b < 43) frame.data[i * 4 + 3] = 0
        }
        this.ecs2.useCustomSet({ globalAlpha: 0 })
        this.ecs2.putImageData({
            imgData: frame,
            dx: 0,
            dy: 0,
        })
        return
    }
}
