import {Boundaries, Coordinates} from './objects.interfaces';
import engineController from "../controllers/engine.controller";

export class WorldObjectModel {
    public deltaX: number = 0;
    public deltaY: number = 0;
    public frictionX: number;
    public frictionY: number;
    public terminalVelocity: number;

    constructor(
        public coordinates: Coordinates,
        public isStatic: boolean
    ) {
        this.coordinates = coordinates;
        this.isStatic = isStatic;

        this.terminalVelocity = 30; // FIXME: Potato physics ?
    }

    public applyForce(forceX: number, forceY: number): void {
        if(this.isStatic) return;
        this.deltaX += forceX;
        this.deltaY += forceY;
    }

}
