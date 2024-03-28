// @ts-check

/**
 * @class
 * @exports Brush
 */
export default class Brush {
    /**
     * Canvas element to drawn on
     * @type {HTMLCanvasElement}
     * @private
     * @readonly
     */
    canvas;

    /**
     * Canvas rendering 2d context
     * @type {CanvasRenderingContext2D}
     * @private
     * @readonly
     */
    ctx;

    /**
     * Width of grid border
     * @type {number}
     * @private
     * @readonly
     */
    border = 1;

    /**
     * Ammount of grid rows / collumns
     * @type {number}
     * @public
     * @readonly
     */
    grid = 20;

    /**
     * Size of one grid cell
     * @type {number}
     * @private
     * @readonly
     */
    cell;

    /**
     * Exposes API for drawing grid on canvas
     * @constructor
     * @param {HTMLCanvasElement} canvas - Canvas element to draw on
     * @param {number} [grid] - Ammount of grid rows / collumns (optional)
     */
    constructor(canvas, grid) {
        this.canvas = canvas;
        const ctx = this.canvas.getContext("2d");
        if (!ctx) throw new Error("Could not create canvas context");
        this.ctx = ctx;

        if (grid) this.grid = grid;

        this.cell = (canvas.width - this.border * 2) / this.grid - this.border;

        this.ctx.lineWidth = this.border;
        this.ctx.fillStyle = "white";
        this.ctx.strokeStyle = "grey";
    }

    /**
     * Returns cell coordinates on canvas based on given grid coordinates value
     * @private
     * @param {number} idx - Cell coordinates on grid
     * @returns {number} - Cell coordinates on canvas
     */
    getCellPosition(idx) {
        return this.border * 1.5 + idx * (this.cell + this.border);
    }

    /**
     * Clears canvas
     * @public
     * @returns {void}
     */
    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    /**
     * Draws grid border
     * @public
     * @returns {void}
     */
    drawBorder() {
        this.ctx.beginPath();
        for (let i = 0; i <= this.grid; i++) {
            const pos = this.border + (this.border + this.cell) * i;
            this.ctx.moveTo(0, pos);
            this.ctx.lineTo(this.canvas.height, pos);
            this.ctx.moveTo(pos, 0);
            this.ctx.lineTo(pos, this.canvas.width);
        }
        this.ctx.stroke();
        this.ctx.closePath();
    }

    /**
     * Draws cell, based on given grid coordinates
     * @public
     * @param {number} x - X grid coordinates
     * @param {number} y - Y grid coordinates
     * @returns {void}
     */
    drawCell(x, y) {
        if (x < 0 || x >= this.grid)
            throw new RangeError(`x value out of bounds: ${x}`);
        if (y < 0 || y >= this.grid)
            throw new RangeError(`y value out of bounds: ${y}`);

        this.ctx.beginPath();
        this.ctx.fillRect(
            this.getCellPosition(x),
            this.getCellPosition(y),
            this.cell,
            this.cell
        );
        this.ctx.closePath();
    }

    /**
     * Border color
     * @public
     * @param {string} color
     */
    set borderColor(color) {
        this.ctx.strokeStyle = color;
    }

    /**
     * Cell color
     * @public
     * @param {string} color
     */
    set cellColor(color) {
        this.ctx.fillStyle = color;
    }
}
