import engine from "../controllers/engine.controller";
import render from "../controllers/renderer.controller";
import {RectangleModel} from "../models/rectangle.model";

export default function (){
    const appRootElm: HTMLElement = document.getElementById('rocket-fox');
    const debugLine: HTMLElement = document.createElement('div');

    appRootElm.after(debugLine);
    appRootElm.after(render.canvas);

    let testObjects: any[] = [];
    testObjects.push(new RectangleModel({x: 10, y: 10}, false, {w: 10, h: 10}, '#fff'))
    testObjects.push(new RectangleModel({x: 50, y: 300}, false, {w: 10, h: 10}, '#00ff00'))
    testObjects.push(new RectangleModel({x: 250, y: 90}, false, {w: 10, h: 10}, '#0000ff'))
    testObjects.push(new RectangleModel({x: 900, y: 290}, false, {w: 10, h: 10}, '#0000ff'))
    testObjects.push(new RectangleModel({x: 550, y: 250}, false, {w: 10, h: 10}, '#00cccc'))
    testObjects.push(new RectangleModel({x: 3500, y: 500}, false, {w: 10, h: 10}, '#0000ff'))


    engine.startTime(() => {
        testObjects.forEach(obj => {
            obj.updateObject({
                top: 0,
                right: render.canvas.width,
                bottom: render.canvas.height,
                left: 0
            })
        })

        debugLine.innerText = JSON.stringify(testObjects[0]);
    });
    render.drawLoop(testObjects);
};


