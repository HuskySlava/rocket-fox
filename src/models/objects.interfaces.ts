export interface Coordinates {
    x: number,
    y: number
}

export interface RectangularSize {
    w: number,
    h: number
}

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;
export type Color = RGB | RGBA | HEX;
