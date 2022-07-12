import engineCfg from "../cfg/engine.cfg";

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

            if(Date.now() - this.unixTickStartTime > 1000){
                console.log('tick');
                engineTick();
                this.unixTickStartTime = Date.now();
            }
        }, engineCfg.engineMaxTickRate)
    }

}

export default new Engine();
