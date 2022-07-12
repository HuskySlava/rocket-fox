import cfg from "../cfg/engine.cfg";

class Renderer {
    public canvas: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;

    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx =  this.canvas.getContext('2d');
    }

    public drawFrame(objects: any[]): void {
        objects.forEach(obj => {
            obj.drawObject(this.ctx);
        })
    }

}

export default new Renderer();
