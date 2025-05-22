Links: [[CSS]]
Tags: #css

<hr>

# Selecting Child Elements
To select second child element of the body tag:
```css
body > :nth-child(2){
	background-color: red;
}
```

To select second child **div** of the body tag:
```css
body > div:nth-child(2){
	background-color: red;
}
```

# Direct in or in
div element in container:
```css
#container div{
	background-color: red;
}
```

div element directly in container:
```css
#container > div{
	background-color: red;
}
```


| Selector        | Usage                                                                     |
| --------------- | ------------------------------------------------------------------------- |
| .class          | choose by class name                                                      |
| .class1.class2  | element with both `class1` and `class 2`                                  |
| .class1 .class2 | `class2` elements which is in the `class 1`                               |
| `#id`           | choosing id                                                               |
| div.class       | selects all `div`s with class                                             |
| div p           | selects all `p`s in `div`s                                                |
| div > p         | selects all `p`s directly in `div`s                                       |
| div + p         | first `p` element (first sibling) that comes directly after `div` element |
| `[attribute]`   | selects all elements with attribute                                       |
| div ~ p         | `p` siblings of `div` elements                                            |

| Selector                                                                              | Usage                                          |
| ------------------------------------------------------------------------------------- | ---------------------------------------------- |
| :active<br>:link<br>:visited                                                          | selects the active link<br>all unvisited links |
| ::after<br>::before                                                                   | insert something after/before the element      |
| :checked<br>:default<br>:disabled<br>:enabled<br>:focus<br>:indeterminate<br>:invalid | for input elements                             |
| :focus-within                                                                         | does not lose focus if child element has focus |
| :empty                                                                                | elements with no children                      |
| :first-child<br>:last-child<br>:nth-child(2)                                          | first child<br>last child<br>second child      |
| :first-letter<br>:first-line                                                          | for p elements                                 |
| :first-of-type<br>:last-of-type                                                       | first of its type in parent                    |
| :hover                                                                                | hovering element                               |


# Before and After elements

`::before` element adds element before the **content** of the item specified
`::after` element adds element after the **content** of the item specified

`*` - universal selector won't include pseudo-elements. Have to use:
```css
*, *::before, *::after{
	color: red;
}
```
  
### To insert icons etc. with pseudo elements 
```css
div::after{
	content: url(//unsplash.it/100/100)
}
```

can be used to insert quotation marks
```css
div::after{
	content: open-quote;
	font-size: 2rem;
	color: green; 
}

div::before{
	content: close-quote;
}
```

### Creating tooltips with before and after elements
```html
<a data-tool-tip="nureddinfarzaliyev" href="https://github.com/nureddinfarzaliyev/"> github </a>
```

```css
a{
  text-decoration: none;
  color: orange;
  font-size: 3rem;
}

a[data-tool-tip]::after{
  content: attr(data-tool-tip);
  position: absolute;
  background-color: rgba(20, 20, 20, .5);
  padding: 5px;
  border-radius: 5px;
  font-size: 1rem;
  display: block; 
  transform: scale(0) translateY(-100px); /*   to make it appear on hover */
  transition: transform .15s;
  
}

a[data-tool-tip]:hover::after{
  transform: scale(1) translateY(0px);
}
```
