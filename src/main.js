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
/** @type {HTMLButtonElement | null} Button element for handling 'change theme action' */
const btnTheme = document.querySelector("#theme");
if (!btnTheme) throw new ReferenceError('Could not find element "#theme"');
/** @type {NodeListOf<HTMLInputElement>} Radio elements for handling 'change touchAction action' */
const rActions = document.querySelectorAll('input[name="action"]');
if (rActions.length === 0)
    throw new ReferenceError(
        'Could not find any elements "input[name="action"]"'
    );

// Themes
/**
 * Page theme type
 * @typedef {"light" | "dark"} Theme
 */

/**
 * Page theme
 * @type {Theme}
 */
let theme = "light";
const saved = localStorage.getItem("theme");
if (saved !== null) {
    theme = /** @type {Theme} */ (saved);
}
localStorage.setItem("theme", theme);
document.body.classList.add(theme);

/**
 * Canvas cell colors
 * @enum {string} - Colors
 * @readonly
 */
const Colors = {
    dark: "hsl(34, 93%, 95%)",
    light: "hsl(0, 0%, 20%)",
};

/**
 * Canvas cell color
 * @type {Colors}
 */
let color = Colors.dark;
if (theme === "dark") {
    color = Colors.light;
}

// Resize handling and init
/**
 * Main brush object
 * @type {Brush | undefined}
 */
let br;

/**
 * Main game object
 * @type {Game | undefined}
 */
let gm;

/**
 * Prefered size of canvas
 * @type {number}
 */
const preferedSize = 500;

/**
 * Determining whether it is a mobile device
 * @returns {boolean}
 */
const isMobile = () => {
    return (
        "ontouchstart" in document.documentElement ||
        navigator.maxTouchPoints > 0
    );
};

/**
 * Handles resize event and initialization
 * @returns {void}
 */
const handleResize = () => {
    if (window.innerWidth > preferedSize) {
        canvas.width = preferedSize;
        canvas.height = preferedSize;
    } else {
        const size = window.innerWidth - 16;
        canvas.width = size;
        canvas.height = size;
    }

    br = new Brush(canvas, 30);
    br.setCellColor(color);
    if (gm) {
        gm = new Game(br, gm.getBoard());
    } else {
        gm = new Game(br);
    }
    gm.drawBoard();
};
handleResize();
window.addEventListener("resize", handleResize);

// Drawing mechanics
/**
 * Handles click on cell event
 * @param {MouseEvent} event
 * @returns {void}
 */
const handleClickCell = (event) => {
    if (!br || !gm) return;
    if (isMobile()) return;

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

// Handling touch
/**
 * @type {"draw" | "erase"}
 */
let touchAction = "draw";

rActions[0].checked = true;

/**
 * Handles change touch action event
 * @param {Event} event
 * @returns {void}
 */
const handleChangeTouchAction = (event) => {
    if (!isMobile()) return;
    const target = /** @type {HTMLInputElement} */ (event.target);
    touchAction = /** @type {"draw" | "erase"} */ (target.value);
};
rActions.forEach((rAction) => {
    rAction.addEventListener("input", handleChangeTouchAction);
});

/**
 * Handles touch on cell event
 * @param {TouchEvent} event
 * @returns {void}
 */
const handleTouchCell = (event) => {
    if (!br || !gm) return;
    if (!isMobile()) return;
    event.preventDefault();
    const [touch] = event.touches;
    const offsetX = touch.pageX - canvas.getBoundingClientRect().left;
    const offsetY = touch.pageY - canvas.getBoundingClientRect().top;
    const x = br.getCellGridCoordinates(offsetX);
    const y = br.getCellGridCoordinates(offsetY);

    if (x < 0 || x >= br.grid || y < 0 || x >= br.grid) return;

    switch (touchAction) {
        case "draw":
            gm.setCell(x, y, true);
            break;
        case "erase":
            gm.setCell(x, y, false);
            break;
    }
    gm.drawBoard();
};
canvas.addEventListener("touchmove", handleTouchCell);
canvas.addEventListener("touchstart", handleTouchCell);

// Actions

/** @type {number | null} Game running interval id */
let playsId = null;
/** @type {number | null} Game timer interval id */
let timerId = null;
let frames = 0;
let time = 0;

// Controlls
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
        if (!gm) return;

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
    if (!gm) return;

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
    if (!gm) return;

    if (playsId !== null) handleToggleStage();
    gm.clearBoard();
    gm.drawBoard();
    frames = 0;
    oFrames.innerText = frames.toString();
    time = 0;
    oTime.innerText = time.toString();
};
btnClear.addEventListener("click", handleClear);

/**
 * Handles theme change event
 * @returns {void}
 */
const handleChangeTheme = () => {
    document.body.classList.remove(theme);
    if (theme === "dark") {
        theme = "light";
        color = Colors.dark;
    } else {
        theme = "dark";
        color = Colors.light;
    }
    document.body.classList.add(theme);
    localStorage.setItem("theme", theme);
    br?.setCellColor(color);
    gm?.drawBoard();
};
btnTheme.addEventListener("click", handleChangeTheme);
