## Modules

<dl>
<dt><a href="#module_Brush">Brush</a></dt>
<dd><p>Exposes API for drawing grid on canvas</p>
</dd>
<dt><a href="#module_Game">Game</a></dt>
<dd><p>Game controller class</p>
</dd>
</dl>

## Members

<dl>
<dt><a href="#theme">theme</a> : <code><a href="#Theme">Theme</a></code></dt>
<dd><p>Page theme</p>
</dd>
<dt><a href="#color">color</a> : <code><a href="#Colors">Colors</a></code></dt>
<dd><p>Canvas cell color</p>
</dd>
<dt><a href="#br">br</a> : <code>Brush</code> | <code>undefined</code></dt>
<dd><p>Main brush object</p>
</dd>
<dt><a href="#gm">gm</a> : <code>Game</code> | <code>undefined</code></dt>
<dd><p>Main game object</p>
</dd>
<dt><a href="#touchAction">touchAction</a> : <code>&quot;draw&quot;</code> | <code>&quot;erase&quot;</code></dt>
<dd></dd>
<dt><a href="#playsId">playsId</a> : <code>number</code> | <code>null</code></dt>
<dd><p>Game running interval id</p>
</dd>
<dt><a href="#timerId">timerId</a> : <code>number</code> | <code>null</code></dt>
<dd><p>Game timer interval id</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#canvas">canvas</a> : <code>HTMLCanvasElement</code> | <code>null</code></dt>
<dd><p>Main canvas element to draw on</p>
</dd>
<dt><a href="#btnToggle">btnToggle</a> : <code>HTMLButtonElement</code> | <code>null</code></dt>
<dd><p>Button element for handling &#39;toggle stage action&#39;</p>
</dd>
<dt><a href="#btnNext">btnNext</a> : <code>HTMLButtonElement</code> | <code>null</code></dt>
<dd><p>Button element for handling &#39;next stage action&#39;</p>
</dd>
<dt><a href="#btnClear">btnClear</a> : <code>HTMLButtonElement</code> | <code>null</code></dt>
<dd><p>Button element for handling &#39;clear action&#39;</p>
</dd>
<dt><a href="#oFrames">oFrames</a> : <code>HTMLOutputElement</code> | <code>null</code></dt>
<dd><p>Output element for displaying frames</p>
</dd>
<dt><a href="#oTime">oTime</a> : <code>HTMLOutputElement</code> | <code>null</code></dt>
<dd><p>Output element for displaying time</p>
</dd>
<dt><a href="#btnTheme">btnTheme</a> : <code>HTMLButtonElement</code> | <code>null</code></dt>
<dd><p>Button element for handling &#39;change theme action&#39;</p>
</dd>
<dt><a href="#rActions">rActions</a> : <code>NodeListOf.&lt;HTMLInputElement&gt;</code></dt>
<dd><p>Radio elements for handling &#39;change touchAction action&#39;</p>
</dd>
<dt><a href="#preferedSize">preferedSize</a> : <code>number</code></dt>
<dd><p>Prefered size of canvas</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#isMobile">isMobile()</a> ⇒ <code>boolean</code></dt>
<dd><p>Determining whether it is a mobile device</p>
</dd>
<dt><a href="#handleResize">handleResize()</a> ⇒ <code>void</code></dt>
<dd><p>Handles resize event and initialization</p>
</dd>
<dt><a href="#handleClickCell">handleClickCell(event)</a> ⇒ <code>void</code></dt>
<dd><p>Handles click on cell event</p>
</dd>
<dt><a href="#handleChangeTouchAction">handleChangeTouchAction(event)</a> ⇒ <code>void</code></dt>
<dd><p>Handles change touch action event</p>
</dd>
<dt><a href="#handleTouchCell">handleTouchCell(event)</a> ⇒ <code>void</code></dt>
<dd><p>Handles touch on cell event</p>
</dd>
<dt><a href="#handleToggleStage">handleToggleStage()</a> ⇒ <code>void</code></dt>
<dd><p>Handles toggle game event</p>
</dd>
<dt><a href="#handleNextStage">handleNextStage()</a> ⇒ <code>void</code></dt>
<dd><p>Handles next game event</p>
</dd>
<dt><a href="#handleClear">handleClear()</a> ⇒ <code>void</code></dt>
<dd><p>Handles clear event</p>
</dd>
<dt><a href="#handleChangeTheme">handleChangeTheme()</a> ⇒ <code>void</code></dt>
<dd><p>Handles theme change event</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#Board">Board</a> : <code>Array.&lt;Array.&lt;boolean&gt;&gt;</code></dt>
<dd><p>Game board</p>
</dd>
<dt><a href="#Theme">Theme</a> : <code>&quot;light&quot;</code> | <code>&quot;dark&quot;</code></dt>
<dd><p>Page theme type</p>
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
    * [.getCellGridCoordinates(crd, [ratio])](#module_Brush+getCellGridCoordinates) ⇒ <code>number</code>
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

### brush.getCellGridCoordinates(crd, [ratio]) ⇒ <code>number</code>
Returns cell gridv coordinates based on given canvas coordinates value

**Kind**: instance method of [<code>Brush</code>](#module_Brush)  
**Returns**: <code>number</code> - - Cell coordinates on grid  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| crd | <code>number</code> |  | Cell coordinates on canvas |
| [ratio] | <code>number</code> | <code>1</code> | Cell coordinates on canvas (default) |

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
        * [.generateNextStage()](#module_Game+generateNextStage) ⇒ <code>void</code>
        * [.setCell(x, y, state)](#module_Game+setCell) ⇒ <code>void</code>
        * [.getBoard()](#module_Game+getBoard) ⇒ [<code>Board</code>](#Board)
        * [.clearBoard()](#module_Game+clearBoard) ⇒ <code>void</code>
    * _static_
        * [.getEmptyBoard(grid)](#module_Game.getEmptyBoard) ⇒ [<code>Board</code>](#Board)

<a name="module_Game+drawBoard"></a>

### game.drawBoard() ⇒ <code>void</code>
Draws game board

**Kind**: instance method of [<code>Game</code>](#module_Game)  
**Access**: public  
<a name="module_Game+generateNextStage"></a>

### game.generateNextStage() ⇒ <code>void</code>
Generates new board stage

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
**Access**: public  
<a name="module_Game+clearBoard"></a>

### game.clearBoard() ⇒ <code>void</code>
Clears game board

**Kind**: instance method of [<code>Game</code>](#module_Game)  
**Access**: public  
<a name="module_Game.getEmptyBoard"></a>

### Game.getEmptyBoard(grid) ⇒ [<code>Board</code>](#Board)
Returns empty game board

**Kind**: static method of [<code>Game</code>](#module_Game)  
**Returns**: [<code>Board</code>](#Board) - - Empty game board  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| grid | <code>number</code> | Number of rows / collumns |

<a name="theme"></a>

## theme : [<code>Theme</code>](#Theme)
Page theme

**Kind**: global variable  
<a name="color"></a>

## color : [<code>Colors</code>](#Colors)
Canvas cell color

**Kind**: global variable  
<a name="br"></a>

## br : <code>Brush</code> \| <code>undefined</code>
Main brush object

**Kind**: global variable  
<a name="gm"></a>

## gm : <code>Game</code> \| <code>undefined</code>
Main game object

**Kind**: global variable  
<a name="touchAction"></a>

## touchAction : <code>&quot;draw&quot;</code> \| <code>&quot;erase&quot;</code>
**Kind**: global variable  
<a name="playsId"></a>

## playsId : <code>number</code> \| <code>null</code>
Game running interval id

**Kind**: global variable  
<a name="timerId"></a>

## timerId : <code>number</code> \| <code>null</code>
Game timer interval id

**Kind**: global variable  
<a name="Colors"></a>

## Colors : <code>enum</code>
Canvas cell colors

**Kind**: global enum  
**Read only**: true  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| dark | <code>string</code> | <code>&quot;hsl(34, 93%, 95%)&quot;</code> | 
| light | <code>string</code> | <code>&quot;hsl(0, 0%, 20%)&quot;</code> | 

<a name="canvas"></a>

## canvas : <code>HTMLCanvasElement</code> \| <code>null</code>
Main canvas element to draw on

**Kind**: global constant  
<a name="btnToggle"></a>

## btnToggle : <code>HTMLButtonElement</code> \| <code>null</code>
Button element for handling 'toggle stage action'

**Kind**: global constant  
<a name="btnNext"></a>

## btnNext : <code>HTMLButtonElement</code> \| <code>null</code>
Button element for handling 'next stage action'

**Kind**: global constant  
<a name="btnClear"></a>

## btnClear : <code>HTMLButtonElement</code> \| <code>null</code>
Button element for handling 'clear action'

**Kind**: global constant  
<a name="oFrames"></a>

## oFrames : <code>HTMLOutputElement</code> \| <code>null</code>
Output element for displaying frames

**Kind**: global constant  
<a name="oTime"></a>

## oTime : <code>HTMLOutputElement</code> \| <code>null</code>
Output element for displaying time

**Kind**: global constant  
<a name="btnTheme"></a>

## btnTheme : <code>HTMLButtonElement</code> \| <code>null</code>
Button element for handling 'change theme action'

**Kind**: global constant  
<a name="rActions"></a>

## rActions : <code>NodeListOf.&lt;HTMLInputElement&gt;</code>
Radio elements for handling 'change touchAction action'

**Kind**: global constant  
<a name="preferedSize"></a>

## preferedSize : <code>number</code>
Prefered size of canvas

**Kind**: global constant  
<a name="isMobile"></a>

## isMobile() ⇒ <code>boolean</code>
Determining whether it is a mobile device

**Kind**: global function  
<a name="handleResize"></a>

## handleResize() ⇒ <code>void</code>
Handles resize event and initialization

**Kind**: global function  
<a name="handleClickCell"></a>

## handleClickCell(event) ⇒ <code>void</code>
Handles click on cell event

**Kind**: global function  

| Param | Type |
| --- | --- |
| event | <code>MouseEvent</code> | 

<a name="handleChangeTouchAction"></a>

## handleChangeTouchAction(event) ⇒ <code>void</code>
Handles change touch action event

**Kind**: global function  

| Param | Type |
| --- | --- |
| event | <code>Event</code> | 

<a name="handleTouchCell"></a>

## handleTouchCell(event) ⇒ <code>void</code>
Handles touch on cell event

**Kind**: global function  

| Param | Type |
| --- | --- |
| event | <code>TouchEvent</code> | 

<a name="handleToggleStage"></a>

## handleToggleStage() ⇒ <code>void</code>
Handles toggle game event

**Kind**: global function  
<a name="handleNextStage"></a>

## handleNextStage() ⇒ <code>void</code>
Handles next game event

**Kind**: global function  
<a name="handleClear"></a>

## handleClear() ⇒ <code>void</code>
Handles clear event

**Kind**: global function  
<a name="handleChangeTheme"></a>

## handleChangeTheme() ⇒ <code>void</code>
Handles theme change event

**Kind**: global function  
<a name="Board"></a>

## Board : <code>Array.&lt;Array.&lt;boolean&gt;&gt;</code>
Game board

**Kind**: global typedef  
<a name="Theme"></a>

## Theme : <code>&quot;light&quot;</code> \| <code>&quot;dark&quot;</code>
Page theme type

**Kind**: global typedef  
