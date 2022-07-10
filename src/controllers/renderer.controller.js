import cfg from "../cfg/engine.cfg";

export default class Render {
    constructor(canvas) {
        this.canvas = canvas;
        this.canvas.width = cfg.resolution.width;
        this.canvas.height = cfg.resolution.height;
        this.ctx = this.canvas.getContext('2d');
        this.tickCounter = 0;

        this.testRect = {
            x: 0,
            y: 0,
            size: cfg.scale,
            color: 'red'
        }
    }

    clearFrame(){
        console.log(this.ctx)
        this.ctx.fillStyle = cfg.voidColor;
        this.ctx.fillRect(0, 0, cfg.resolution.width, cfg.resolution.height);
    }

    drawRect(rect){
        this.ctx.fillStyle = rect.color;
        this.ctx.fillRect(rect.x, rect.y, rect.size, rect.size);
        console.log('lol')
    }

    renderLoop(){
            requestAnimationFrame( () => {
                console.log(this.tickCounter);
                this.clearFrame();
                this.drawRect(this.testRect);
                if(this.tickCounter >= 60) return;
                this.tickCounter++;
                this.renderLoop()
            })
    }
}
