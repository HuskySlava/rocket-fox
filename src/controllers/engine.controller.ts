import engineCfg from "../cfg/engine.cfg";
import {Boundaries} from "../models/objects.interfaces";
import {WorldObjectModel} from "../models/world.object.model";
import {RectangleModel} from "../models/rectangle.model";

class Engine {
    public unixStartTime: number;
    public unixRunTime: number;
    public unixTickStartTime: number;

    constructor() {
        this.unixStartTime = 0;
    }

    public startTime(engineTick: Function){
        this.unixStartTime = Date.now();
        this.unixTickStartTime = Date.now();

        setInterval(() => {
            this.unixRunTime = Date.now() - this.unixStartTime;

            if(Date.now() - this.unixTickStartTime > engineCfg.engineTickRate){
                console.log('tick');
                engineTick();
                this.unixTickStartTime = Date.now();
            }
        }, 0)
    }

    applyGravity(object: RectangleModel, boundaries: Boundaries){
        if(object.coordinates.y >= (boundaries.bottom - object.size.h)){
            object.deltaY *= -1;
            console.log(boundaries.bottom )
            return;
        };
        if(object.deltaY >= object.terminalVelocity) return;
        object.applyForce(0, 1);
    }

}

export default new Engine();
