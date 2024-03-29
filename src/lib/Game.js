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
     * Generates new board stage
     * @method
     * @public
     * @returns {void}
     */
    generateNextStage() {
        const len = this.board.length;
        const nbd = Game.getEmptyBoard(len);

        for (let x = 0; x < len; x++) {
            for (let y = 0; y < len; y++) {
                const cell = this.board[x][y];
                let neighbors = 0;

                // Counting neighbors
                if (y - 1 > 0 && x - 1 > 0) {
                    if (this.board[x - 1][y - 1]) neighbors++;
                }
                if (y - 1 > 0) {
                    if (this.board[x][y - 1]) neighbors++;
                }
                if (y - 1 > 0 && x + 1 < len) {
                    if (this.board[x + 1][y - 1]) neighbors++;
                }
                if (x - 1 > 0) {
                    if (this.board[x - 1][y]) neighbors++;
                }
                if (x + 1 < len) {
                    if (this.board[x + 1][y]) neighbors++;
                }
                if (y + 1 < len && x - 1 > 0) {
                    if (this.board[x - 1][y + 1]) neighbors++;
                }
                if (y + 1 < len) {
                    if (this.board[x][y + 1]) neighbors++;
                }
                if (y + 1 < len && x + 1 < len) {
                    if (this.board[x + 1][y + 1]) neighbors++;
                }

                // New state
                if (!cell && neighbors === 3) {
                    nbd[x][y] = true;
                    continue;
                }
                if (cell && neighbors < 2) {
                    nbd[x][y] = false;
                    continue;
                }
                if (cell && neighbors > 3) {
                    nbd[x][y] = false;
                    continue;
                }
                if (cell) {
                    nbd[x][y] = true;
                }
            }
        }

        this.board = nbd;
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
