// @ts-check
import Brush from "./lib/Brush.js";
import Game from "./lib/Game.js";

/** @type {HTMLCanvasElement | null} Main canvas element to draw on */
const canvas = document.querySelector("#canvas");
if (!canvas) throw new ReferenceError('Could not find element "#canvas"');
/** @type {HTMLButtonElement | null} Button element for handling 'toggle stage action' */
const btnToggle = document.querySelector("#toggle");
if (!btnToggle) throw new ReferenceError('Could not find element "#toggle"');
/** @type {HTMLButtonElement | null} Button element for handling 'next stage action' */
const btnNext = document.querySelector("#next");
if (!btnNext) throw new ReferenceError('Could not find element "#next"');
/** @type {HTMLButtonElement | null} Button element for handling 'clear action' */
const btnClear = document.querySelector("#clear");
if (!btnClear) throw new ReferenceError('Could not find element "#clear"');
/** @type {HTMLOutputElement | null} Output element for displaying frames */
const oFrames = document.querySelector("#frames");
if (!oFrames) throw new ReferenceError('Could not find element "#frames"');
/** @type {HTMLOutputElement | null} Output element for displaying time */
const oTime = document.querySelector("#time");
if (!oTime) throw new ReferenceError('Could not find element "#time"');

const color = "hsl(34, 93%, 95%)";

canvas.width = 500;
canvas.height = 500;

const br = new Brush(canvas, 30);

// br.setBorderColor(color);
br.setCellColor(color);

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
/** @type {number | null} Game timer interval id */
let timerId = null;
let frames = 0;
let time = 0;

/**
 * Handles toggle game event
 * @returns {void}
 */
const handleToggleStage = () => {
    if (timerId !== null) {
        clearInterval(timerId);
        timerId = null;
    }
    if (playsId !== null) {
        clearInterval(playsId);
        playsId = null;
        btnToggle.innerText = "Run";
        canvas.classList.remove("running");
        btnNext.disabled = false;
        return;
    }

    playsId = setInterval(() => {
        gm.generateNextStage();
        gm.drawBoard();
        frames++;
        oFrames.innerText = frames.toString();
    }, 250);

    timerId = setInterval(() => {
        time++;
        oTime.innerText = time.toString();
    }, 1000);

    btnToggle.innerText = "Stop";
    canvas.classList.add("running");
    btnNext.disabled = true;
};
btnToggle.addEventListener("click", handleToggleStage);

/**
 * Handles next game event
 * @returns {void}
 */
const handleNextStage = () => {
    gm.generateNextStage();
    gm.drawBoard();
    frames++;
    oFrames.innerText = frames.toString();
};
btnNext.addEventListener("click", handleNextStage);

/**
 * Handles clear event
 * @returns {void}
 */
const handleClear = () => {
    if (playsId !== null) handleToggleStage();
    gm.clearBoard();
    gm.drawBoard();
    frames = 0;
    oFrames.innerText = frames.toString();
    time = 0;
    oTime.innerText = time.toString();
};
btnClear.addEventListener("click", handleClear);
