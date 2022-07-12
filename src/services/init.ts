import engine from "../controllers/engine.controller";
import render from "../controllers/renderer.controller";
import {RectangleModel} from "../models/rectangle.model";

export default function (){
    const appRootElm: HTMLElement = document.getElementById('rocket-fox');
    appRootElm.after(render.canvas);

    let testObjects: any[] = [];
    testObjects.push(new RectangleModel({x: 10, y: 10}, true, {w: 10, h: 10}, '#fff'))

    engine.startTime(() => {
        testObjects.forEach(obj => {
            obj.updateObject()
        })
    });
    render.drawLoop(testObjects);
};


