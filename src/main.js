// @ts-check
import Brush from "./lib/Brush.js";
import Game from "./lib/Game.js";

/** @type {HTMLCanvasElement | null} Main canvas element to draw on */
const canvas = document.querySelector("#canvas");
if (!canvas) throw new ReferenceError('Could not find element "#canvas"');
/** @type {HTMLButtonElement | null} Button for handling 'toggle stage action' */
const btnToggle = document.querySelector("#toggle");
if (!btnToggle) throw new ReferenceError('Could not find element "#toggle"');

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

/** @type {number | null} Game running interval id */
let playsId = null;
/**
 * Handles toggle game event
 * @returns {void}
 */
const handleToggleStage = () => {
    if (playsId !== null) {
        clearInterval(playsId);
        playsId = null;
        btnToggle.innerText = "Run";
        return;
    }

    playsId = setInterval(() => {
        gm.generateNextStage();
        gm.drawBoard();
    }, 250);
    btnToggle.innerText = "Stop";
};
btnToggle.addEventListener("click", handleToggleStage);
