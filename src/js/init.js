import cfg from "../cfg/engine";

console.log(cfg);

export const initCanvas = canvas => {
    canvas.width = cfg.resolution.width;
    canvas.height = cfg.resolution.height;
    const ctx = canvas.getContext('2d');

    const canvasCenter = {
        x: Math.floor(cfg.resolution.width / 2) - Math.floor(cfg.scale / 2),
        y: Math.floor(cfg.resolution.height / 2) - Math.floor(cfg.scale / 2)
    }

    gameLoop();
    clearCanvas(ctx);

    ctx.fillStyle = 'red';
    ctx.fillRect(canvasCenter.x, canvasCenter.y , cfg.scale, cfg.scale);
}

const clearCanvas = ctx => {
    ctx.fillStyle = '000';
    ctx.fillRect(0, 0, cfg.resolution.width, cfg.resolution.height);
}

const gameLoop = () => {
    let engineTick = 0;
    while (engineTick < 10){
        console.log('potato');
        engineTick++;
    }
}

// commit test

