Links: [[CSS]] 
Tags: #css

<hr>

# `display: flex`

### `flex-direction:` 
`row` - default
`row-reverse`
`column`
`column-reverse`

### `justify-content:`
`flex-start` - default
`flex-end` - positions in end
`center` - centers elements in main axis (x)
`space-between` - adds same space between objects
`space-around` - adds same space around objects (smaller space for first and last)
`space-evenly` - adds same space around objects

### `align-items:`
`flex-start` - default
`flex-end` - positions in end by cross-axis (y)
`center` - middle in cross-axis
`baseline` - based on the one line

### `flex-wrap:`
`nowrap` - default
`wrap` - elements will pass to bottom when there is no enough vertical space
`wrap-reverse` - same thing but from reverse order by cross-axis

### `flex-shrink:`
flex shrink will make items to shrink if they're too big to fit inside their parent with `display: flex;`. This property is enabled by default.
If flex-shrink is off (`flex-shrink: 0`) the items will overflow their parents.

### `flex-basis:`
this property will assign the initial length to an item. Then item (if it is flexible) will shrink or grow to take the available space.  
An item with the property `flex-basis: 100%;` will want to take up the length of its parent. 
In case of `flex-shrink: 1;` (default) items will shrink from their `flex-basis` size to fit in their parent.
In case of `flex-grow: 1;` (default is `flex-grow: 0`) items will grow from their `flex-basis` size to fit in their parent.
`flex-basis: auto;` will look at item's own width for size. If item has no width set it will be assigned as content-size. 

### `flex: ` shorthand
`flex: 0 1 auto;` is a shorthand for:
```css
.flex-parent{
	flex-grow: 0;
	flex-shrink: 1;
	flex-basis: auto; 
}
```

### `align-content:`
this property can be used to align flex lines within a flex container when there is extra space along the cross-axis. This property only has an effect when there are multiple lines of flex items
`stretch` - default

### `align-self:`
this property is applied to the single elements of the flexbox and are being used for the cross-axis
`start` - default
`center` or `end` 

### `column-gap:`  and `row-gap: `
this properties can be used to add gaps between columns or rows

### `order:`
`-1` - default
`1` - end