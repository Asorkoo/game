class Player {

    constructor(x, y, w, h, c) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;
        this.v = 5; //velocity
    }

    draw(gtx) {
        gtx.fillStyle = this.c;
        gtx.fillRect(this.x, this.y, this.w, this.h);
    }

    update(keys) {
        if(keys["w"]) this.y -= this.v;
        if(keys["s"]) this.y += this.v;
        if(keys["a"]) this.x -= this.v;
        if(keys["d"]) this.x += this.v;
    }
}

const myPlayer = new Player(10, 10, 50, 50, "red");

const gameCanvas = document.getElementById("gameCanvas");
const gtx = gameCanvas.getContext("2d");

const resizeCanvas = () => {
    gameCanvas.width = window.innerWidth;
    gameCanvas.height = window.innerHeight;
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas()

let keys = {};

//e.key = w. do keys se prida w: true
window.addEventListener("keydown", (e) => keys[e.key] = true);
window.addEventListener("keyup", (e) => keys[e.key] = false);

const gameLoop = () => {
    gtx.clearRect (0, 0, gameCanvas.width, gameCanvas.height);

    myPlayer.update(keys);
    myPlayer.draw(gtx);
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop); 