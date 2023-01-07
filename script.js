window.onload = function() { //global window object
    const canvas = document.getElementById("canvas1");
    const ctx = canvas.getContex("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

class flowFieledEffect {//Start class name with capital letter. template to create an object= encapsulate data and then workon it with their methods. 
    #ctx;
    #width;
    #height;
    constructor(ctx, width, height) {
        this.#ctx = ctx;
        this.#width = width;
        this.#height = height;
        console.log("effect loaded");
    }
}