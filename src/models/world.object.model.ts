import {Coordinates} from './objects.interfaces';

export class WorldObjectModel {
    constructor(
        public coordinates: Coordinates,
        public isStatic: boolean
    ) {
        this.coordinates = coordinates;
        this.isStatic = isStatic;
    }
}
