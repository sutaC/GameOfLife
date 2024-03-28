## Modules

<dl>
<dt><a href="#module_Brush">Brush</a></dt>
<dd><p>Exposes API for drawing grid on canvas</p>
</dd>
<dt><a href="#module_Game">Game</a></dt>
<dd><p>Game controller class</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#canvas">canvas</a> : <code>HTMLCanvasElement</code> | <code>null</code></dt>
<dd><p>Main canvas element to draw on</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#handleClickCell">handleClickCell(event)</a> ⇒ <code>void</code></dt>
<dd><p>Handles click on cell event</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#Board">Board</a> : <code>Array.&lt;Array.&lt;boolean&gt;&gt;</code></dt>
<dd><p>Game board</p>
</dd>
</dl>

<a name="module_Brush"></a>

## Brush
Exposes API for drawing grid on canvas


| Param | Type | Description |
| --- | --- | --- |
| canvas | <code>HTMLCanvasElement</code> | Canvas element to draw on |
| [grid] | <code>number</code> | Ammount of grid rows / collumns (optional) |


* [Brush](#module_Brush)
    * [.grid](#module_Brush+grid) : <code>number</code>
    * [.getCellGridCoordinates(crd)](#module_Brush+getCellGridCoordinates) ⇒ <code>number</code>
    * [.clearCanvas()](#module_Brush+clearCanvas) ⇒ <code>void</code>
    * [.drawBorder()](#module_Brush+drawBorder) ⇒ <code>void</code>
    * [.drawCell(x, y)](#module_Brush+drawCell) ⇒ <code>void</code>
    * [.setBorderColor(color)](#module_Brush+setBorderColor) ⇒ <code>void</code>
    * [.setCellColor(color)](#module_Brush+setCellColor) ⇒ <code>void</code>

<a name="module_Brush+grid"></a>

### brush.grid : <code>number</code>
Ammount of grid rows / collumns

**Kind**: instance property of [<code>Brush</code>](#module_Brush)  
**Access**: public  
**Read only**: true  
<a name="module_Brush+getCellGridCoordinates"></a>

### brush.getCellGridCoordinates(crd) ⇒ <code>number</code>
Returns cell gridv coordinates based on given canvas coordinates value

**Kind**: instance method of [<code>Brush</code>](#module_Brush)  
**Returns**: <code>number</code> - - Cell coordinates on grid  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| crd | <code>number</code> | Cell coordinates on canvas |

<a name="module_Brush+clearCanvas"></a>

### brush.clearCanvas() ⇒ <code>void</code>
Clears canvas

**Kind**: instance method of [<code>Brush</code>](#module_Brush)  
**Access**: public  
<a name="module_Brush+drawBorder"></a>

### brush.drawBorder() ⇒ <code>void</code>
Draws grid border

**Kind**: instance method of [<code>Brush</code>](#module_Brush)  
**Access**: public  
<a name="module_Brush+drawCell"></a>

### brush.drawCell(x, y) ⇒ <code>void</code>
Draws cell, based on given grid coordinates

**Kind**: instance method of [<code>Brush</code>](#module_Brush)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | X grid coordinates |
| y | <code>number</code> | Y grid coordinates |

<a name="module_Brush+setBorderColor"></a>

### brush.setBorderColor(color) ⇒ <code>void</code>
Sets border color

**Kind**: instance method of [<code>Brush</code>](#module_Brush)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| color | <code>string</code> | Border color |

<a name="module_Brush+setCellColor"></a>

### brush.setCellColor(color) ⇒ <code>void</code>
Sets cell color

**Kind**: instance method of [<code>Brush</code>](#module_Brush)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| color | <code>string</code> | Cell color |

<a name="module_Game"></a>

## Game
Game controller class


| Param | Type | Description |
| --- | --- | --- |
| brush | <code>Brush</code> | Brush class object for drawing on canvas |
| [board] | [<code>Board</code>](#Board) | Game board (optional) |


* [Game](#module_Game)
    * _instance_
        * [.drawBoard()](#module_Game+drawBoard) ⇒ <code>void</code>
        * [.setCell(x, y, state)](#module_Game+setCell) ⇒ <code>void</code>
        * [.getBoard()](#module_Game+getBoard) ⇒ [<code>Board</code>](#Board)
    * _static_
        * [.getEmptyBoard(grid)](#module_Game.getEmptyBoard) ⇒ [<code>Board</code>](#Board)

<a name="module_Game+drawBoard"></a>

### game.drawBoard() ⇒ <code>void</code>
Draws game board

**Kind**: instance method of [<code>Game</code>](#module_Game)  
**Access**: public  
<a name="module_Game+setCell"></a>

### game.setCell(x, y, state) ⇒ <code>void</code>
Sets cell on board to given state

**Kind**: instance method of [<code>Game</code>](#module_Game)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | Cell x grid coordinates |
| y | <code>number</code> | Cell y grid coordinates |
| state | <code>boolean</code> | Cell state |

<a name="module_Game+getBoard"></a>

### game.getBoard() ⇒ [<code>Board</code>](#Board)
Returng game board

**Kind**: instance method of [<code>Game</code>](#module_Game)  
**Returns**: [<code>Board</code>](#Board) - - Game board  
<a name="module_Game.getEmptyBoard"></a>

### Game.getEmptyBoard(grid) ⇒ [<code>Board</code>](#Board)
Returns empty game board

**Kind**: static method of [<code>Game</code>](#module_Game)  
**Returns**: [<code>Board</code>](#Board) - - Empty game board  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| grid | <code>number</code> | Number of rows / collumns |

<a name="canvas"></a>

## canvas : <code>HTMLCanvasElement</code> \| <code>null</code>
Main canvas element to draw on

**Kind**: global constant  
<a name="handleClickCell"></a>

## handleClickCell(event) ⇒ <code>void</code>
Handles click on cell event

**Kind**: global function  

| Param | Type |
| --- | --- |
| event | <code>MouseEvent</code> | 

<a name="Board"></a>

## Board : <code>Array.&lt;Array.&lt;boolean&gt;&gt;</code>
Game board

**Kind**: global typedef  
