let canvas;
let ctx;
let flowField;
let flowFieldAnimation;

window.onload = function() { 
    const canvas = document.getElementById("canvas1");
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const flowField = new flowFieldEffect(ctx, canvas.width, canvas.height);
    flowField.animate();
}

window.addEventListener("resize", function() {
    this.cancelAnimationFrame();
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    flowField = new flowFieldEffect(ctx, canvas.width, canvas.height);
    flowField.animate();
});
class flowFieldEffect {//Start class name with capital letter. template to create an object= encapsulate data and then workon it with their methods. 
    #ctx;
    #width;
    #height;
    constructor(ctx, width, height) {
        this.#ctx = ctx;
        this.#ctx.strokeStyle = "white";
        this.#width = width;
        this.#height = height;
        this.x = 0;
        this.y = 0;
    }
    #draw(x, y) {
        const length = 300;
        this.#ctx.beginPath();//to draw a singel line, it needs two arguments 1)begin path = draw a new shape
        this.#ctx.moveTo(x, y)//starting X and Y coordinates
        this.#ctx.lineTo(x + length, y + length);
        this.#ctx.stroke();//draw the actual shape we mapped
    }
    animate() {
        this.#ctx.clearRect(0, 0, this.#width, this.#height);
        this.#draw(this.x, this.y);
        this.x += 2;
        this.y += 0.5;
        console.log("animating");
        let flowFieldAnimation = requestAnimationFrame(this.animate.bind(this));	//it takes an argument "what the function called"
    }
}
