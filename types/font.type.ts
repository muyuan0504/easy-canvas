type CSSOMString = string
type FontFaceSetStatus = 'loading' | 'loaded'

interface FontFace {
    family: CSSOMString
    style: CSSOMString
    weight: CSSOMString
    stretch: CSSOMString
    unicodeRange: CSSOMString
    variant: CSSOMString
    featureSettings: CSSOMString
    display: FontDisplay
    readonly status: FontFaceLoadStatus
    readonly loaded: Promise<FontFace>
    load(): Promise<FontFace>
}

export interface FontFaceSet {
    readonly status: FontFaceSetStatus
    readonly ready: Promise<FontFaceSet>
    check(font: string, text?: string): Boolean
    load(font: string, text?: string): Promise<FontFace[]>
    add(font: FontFace): FontFaceSet
}
