import {Coordinates, RectangularSize, Color, Boundaries} from './objects.interfaces';
import {WorldObjectModel} from "./world.object.model";
import engineController from "../controllers/engine.controller";

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

    public updateObject(boundaries: Boundaries){
        if(this.isStatic) return;
        engineController.applyGravity(this, boundaries);
        this.coordinates.y = this.coordinates.y + this.size.h + this.deltaY > boundaries.bottom ? boundaries.bottom - this.size.h : this.coordinates.y += this.deltaY;
    }

    public drawObject(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.coordinates.x, this.coordinates.y, this.size.w, this.size.h);
    }

}
