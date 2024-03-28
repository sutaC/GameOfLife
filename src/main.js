// @ts-check
import Brush from "./lib/Brush.js";
import Game from "./lib/Game.js";

/** @type {HTMLCanvasElement | null} Main canvas element to draw on */
const canvas = document.querySelector("#canvas");
if (!canvas) throw new ReferenceError('Could not find element "#canvas"');

canvas.width = 500;
canvas.height = 500;

const br = new Brush(canvas, 30);
const gm = new Game(br);

// Drawing mechanics
/**
 * Handles click on cell event
 * @param {MouseEvent} event
 * @returns {void}
 */
const handleClickCell = (event) => {
    event.preventDefault();
    if (event.buttons === 0) return;

    const x = br.getCellGridCoordinates(event.offsetX);
    const y = br.getCellGridCoordinates(event.offsetY);

    if (x < 0 || x >= br.grid || y < 0 || x >= br.grid) return;

    switch (event.buttons) {
        case 1:
            gm.setCell(x, y, true);
            break;
        case 2:
            gm.setCell(x, y, false);
            break;
    }

    gm.drawBoard();
};
canvas.addEventListener("mousedown", handleClickCell);
canvas.addEventListener("mousemove", handleClickCell);
canvas.addEventListener("contextmenu", (event) => event.preventDefault());
