Links: [[CSS]] 
Tags: #css

<hr>

# `display: grid`

```css
.container{
	display: grid;
	grid-template-rows: 100px 200px 100px;
	grid-template-columns: 230px 120px 340px;
}
```


### Defining where the item starts and ends

```css
.item-1{
  grid-row-start: 1;
  grid-row-end: 3;
  grid-column-start: 1;
  grid-column-end: 4;
}
```

**Shorthand for the styling above:**
```css
.item-1{
  grid-row: 1 / 3;
  grid-column: 1 / 4;
}
```

![[Pasted image 20240618130349.png]]

### `span` property

![[Pasted image 20240618130807.png]]

### `grid-area` property

*syntax:*
```css
.item-2{
	grid-area: row-start / col-start / row-end / col-end;
}
```
*example:*
```css
.item-5{
  grid-area: 2 / 3 / 4 / 5;
}
```

![[Pasted image 20240618131306.png]]
> [!note]
> **With grid-area property items can be layered on top of each other.**

### `grid-template-areas: `
![[Pasted image 20240618133300.png]]

### `grid-auto-... :`

`grid-auto-flow:`  property determines if new added items will be added to new rows or new columns. paremeters can be `column` or `row`
`grid-auto-columns: ` and `grid-auto-rows: ` will determine the size of the default columns and rows

### Aligning items in grid
`justify-items: ` and `align-items: ` properties can be used to align items in their grid cells
`justify-self: ` and `align-self: ` can be used to make items align themselves in their grid cells

More about justifying and aligning: [[Flexbox]]

### Aligning grid in its container
```css
.container{
	justify-content: ; /*Row axis*/
	align-content: ; /*Column axis*/
}
```
above properties can be used to align the grid item in its container when container is bigger than the grid itself
properties: 
`start`, `end`, `center`, `baseline`, `space-between`, `space-around`, `space-evenly`

### `grid-gap: `

```css
.container{
	grid-gap: row-gap col-gap;
}
```

### Fractional unit

```css
.container{
	display: grid;
	grid-template-rows: 100px 100px 100px;
	grid-template-columns: 1fr 1fr 2fr;
}
```
other units can be matched together with fr units

### `minmax()`

```css
.container{
	display: grid;
	grid-template-rows: 100px 100px 100px;
	grid-template-columns: 1fr minmax(200px, 2fr) 1fr;
}
```
this property will make shrinking stop when item is smaller than 200pixels

### `repeat()`

```css
.container{
	display: grid;
	grid-template-rows: repeat(3, 100px);
	grid-template-columns: 1fr minmax(200px, 2fr) 1fr;
}
```
this function will make `100px` to be repeated `3` times

`repeat(autofit, 200px)` can be used to create responsive grids to automatically  fit if it overflows its container.