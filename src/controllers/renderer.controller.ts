import cfg from "../cfg/engine.cfg";

class Renderer {
    public canvas: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    public lifeTimeFrameCounter: number;

    constructor() {
        this.canvas = document.createElement('canvas');
        this.canvas.height = cfg.resolution.height;
        this.canvas.width = cfg.resolution.width;
        this.ctx =  this.canvas.getContext('2d');
        this.lifeTimeFrameCounter = 0;
    }

    private clearFrame(): void {
        this.ctx.fillStyle = cfg.voidColor;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
    }

    private drawFrame(objects: any[]): void {
        this.clearFrame();
        objects.forEach(obj => {
            obj.drawObject(this.ctx);
        })
    }

    public drawLoop(objects: any[]): void {
        // if(this.lifeTimeFrameCounter > 1200){
        //     return
        // }
        this.lifeTimeFrameCounter++;
        this.drawFrame(objects);
        requestAnimationFrame( () => {
            this.drawLoop(objects);
        })
    }

}

export default new Renderer();
