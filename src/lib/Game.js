// @ts-check
import Brush from "./Brush.js";

/**
 * Game board
 * @typedef {boolean[][]} Board
 */

/**
 * @class
 * @exports Game
 */
export default class Game {
    /**
     * Brush class object for drawing on canvas
     * @type {Brush}
     * @private
     * @readonly
     */
    brush;

    /**
     * Game board
     * @type {Board}
     * @private
     */
    board;

    /**
     * Game controller class
     * @param {Brush} brush - Brush class object for drawing on canvas
     * @param {Board} [board] - Game board (optional)
     */
    constructor(brush, board) {
        this.brush = brush;

        if (board !== undefined) {
            this.board = board;
        } else {
            this.board = Game.getEmptyBoard(this.brush.grid);
        }

        // Init
        this.drawBoard();
    }

    /**
     * Draws game board
     * @method
     * @public
     * @returns {void}
     */
    drawBoard() {
        this.brush.clearCanvas();
        this.brush.drawBorder();
        for (let x = 0; x < this.brush.grid; x++) {
            for (let y = 0; y < this.brush.grid; y++) {
                if (!this.board[x][y]) continue;
                this.brush.drawCell(x, y);
            }
        }
    }

    /**
     * Returns empty game board
     * @method
     * @static
     * @public
     * @param {number} grid - Number of rows / collumns
     * @returns {Board} - Empty game board
     */
    static getEmptyBoard(grid) {
        const bd = [];
        for (let i = 0; i < grid; i++) {
            const row = [];
            for (let j = 0; j < grid; j++) {
                row.push(false);
            }
            bd.push(row);
        }
        return bd;
    }

    /**
     * Sets cell on board to given state
     * @method
     * @public
     * @param {number} x - Cell x grid coordinates
     * @param {number} y - Cell y grid coordinates
     * @param {boolean} state - Cell state
     * @returns {void}
     */
    setCell(x, y, state) {
        this.board[x][y] = state;
    }

    /**
     * Returng game board
     * @method
     * @returns {Board} - Game board
     */
    getBoard() {
        return this.board;
    }
}
