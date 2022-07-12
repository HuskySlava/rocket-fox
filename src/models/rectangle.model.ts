import {Coordinates, RectangularSize, Color} from './objects.interfaces';
import {WorldObjectModel} from "./world.object.model";

export class RectangleModel extends WorldObjectModel {
    constructor(
        public coordinates: Coordinates,
        public isStatic: boolean,
        public size: RectangularSize,
        public color: Color
    ) {
        super(coordinates, isStatic);
        this.size = size;
        this.color = color;
    }

    public drawObject(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.coordinates.x, this.coordinates.y, this.size.w, this.size.h);
    }
}
