// @ts-check
import Brush from "./lib/Brush.js";

/** @type {HTMLCanvasElement | null} Main canvas element to draw on */
const canvas = document.querySelector("#canvas");
if (!canvas) throw new ReferenceError('Could not find element "#canvas"');

canvas.width = 500;
canvas.height = 500;

const br = new Brush(canvas);

br.drawBorder();

for (let x = 0; x < br.grid; x++) {
    for (let y = 0; y < br.grid; y++) {
        br.cellColor = `hsl(${y * x}, 100%, 50%)`;
        br.drawCell(x, y);
    }
}
