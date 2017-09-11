// global variables
export const WIDTH: number = 1000;
export const HEIGHT: number = 600;
export const gridSize:number = 100;

// create Canvas
export let canvas = document.createElement('canvas');
canvas.id = "canvas";
canvas.width = WIDTH;
canvas.height = HEIGHT;
canvas.style.border = "1px solid";

document.body.appendChild(canvas);

// define 2d context
export let ctx = canvas.getContext("2d");
