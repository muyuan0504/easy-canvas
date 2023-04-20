/** 文本处理相关
 * font: 字体，默认是'10px sans-serif', 单写字体无效
 * textAlign: 文本对齐选项，可选的值包括：start, end, left, right or center. 默认值是 start
 * textBaseline: 基线对齐选项。可选的值包括：top, hanging, middle, alphabetic, ideographic, bottom。默认值是 alphabetic
 * direction: 文本方向。可能的值包括：ltr, rtl, inherit。默认值是 inherit
 *
 * fillText(text, x, y [, maxWidth]): 在指定的 (x,y) 位置填充指定的文本，绘制的最大宽度是可选的
 * strokeText(text, x, y [, maxWidth]): 在指定的 (x,y) 位置绘制文本边框，绘制的最大宽度是可选的
 */

export const textFill = function ({ text, font, x, y, maxWidth } = options) {
    // 在指定的 (x,y) 位置填充指定的文本，绘制的最大宽度是可选的
    this.font = font
    this.fillText(text, x, y, maxWidth)
    // this.direction = 'rtl'
    // 在指定的 (x,y) 位置绘制文本边框，绘制的最大宽度是可选的
    // this.strokeText(text, x, y, maxWidth)
}
