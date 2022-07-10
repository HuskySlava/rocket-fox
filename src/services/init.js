import cfg from "../cfg/engine.cfg.js"
import Render from "../controllers/renderer.controller";

export default function (){
    const appRootElm = document.getElementById('rocket-fox');
    const canvas = document.createElement('canvas');
    appRootElm.after(canvas);

    let render = new Render(canvas);
    render.renderLoop();
};


