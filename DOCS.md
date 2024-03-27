## Modules

<dl>
<dt><a href="#module_Brush">Brush</a></dt>
<dd><p>Exposes API for drawing grid on canvas</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#canvas">canvas</a> : <code>HTMLCanvasElement</code> | <code>null</code></dt>
<dd><p>Main canvas element to draw on</p>
</dd>
</dl>

<a name="module_Brush"></a>

## Brush
Exposes API for drawing grid on canvas


| Param | Type | Description |
| --- | --- | --- |
| canvas | <code>HTMLCanvasElement</code> | Canvas element to draw on |


* [Brush](#module_Brush)
    * [.grid](#module_Brush+grid) : <code>number</code>
    * [.borderColor](#module_Brush+borderColor)
    * [.cellColor](#module_Brush+cellColor)
    * [.clearCanvas()](#module_Brush+clearCanvas) ⇒ <code>void</code>
    * [.drawBorder()](#module_Brush+drawBorder) ⇒ <code>void</code>
    * [.drawCell(x, y)](#module_Brush+drawCell) ⇒ <code>void</code>

<a name="module_Brush+grid"></a>

### brush.grid : <code>number</code>
Ammount of grid rows / collumns

**Kind**: instance property of [<code>Brush</code>](#module_Brush)  
**Access**: public  
**Read only**: true  
<a name="module_Brush+borderColor"></a>

### brush.borderColor
Border color

**Kind**: instance property of [<code>Brush</code>](#module_Brush)  
**Access**: public  

| Param | Type |
| --- | --- |
| color | <code>string</code> | 

<a name="module_Brush+cellColor"></a>

### brush.cellColor
Cell color

**Kind**: instance property of [<code>Brush</code>](#module_Brush)  
**Access**: public  

| Param | Type |
| --- | --- |
| color | <code>string</code> | 

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

<a name="canvas"></a>

## canvas : <code>HTMLCanvasElement</code> \| <code>null</code>
Main canvas element to draw on

**Kind**: global constant  
