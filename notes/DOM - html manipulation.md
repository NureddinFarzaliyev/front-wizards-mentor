Links: [[Javascript]]
Tags: #js

<hr>

**DOM** - Document Object Model - is an object that represents the page document and provides an API to work with this object. 
# `.textContent`
```js
document.getElementById('header').textContent = 'hello'
```

# `checked` property
```js
const button = document.querySelector('button');
const check = document.querySelector('#check');
const radio = document.querySelector('#radio');

button.onclick = () => {
  if(check.checked){
    console.log('checkchecked')
  }
  if(radio.checked){
    console.log('radio checked')
  }
}
```

# `innerHTML`

> `innerHTML` gets or sets the HTML or XML markup contained within the element.

```html
<p> </p>
```

```js
const par = document.querySelector('p')
par.innerHTML = '<h1> HELLO </h1>'
```
After script:
```html
<p> <h1> HELLO </h1> </p>
```

# Styling with DOM
```js
document.body.style.backgroundColor = 'black';
```

```js
const header = document.getElementById('header')
header.style.fontSize = '2rem';
```

# Navigating in DOM
```js
// Some navigating methods
const container = document.getElementById('document')

const firstChild = container.firstElementChild;
const lastChild = container.lastElementChild;

const nextSibling = firstChild.nextElementSibling; //2nd child
const previousSibling = lastChild.previousElementSibling; // (last-1)th child

const parent = firstChild.parentElement 

const children = container.children // returns HTML Collection
children[2].style.backgroundColor = 'red'
```
Also (HTML Collection): [[Query Selectors]]

# Creating HTML Element using Javascript

```js
const newHeader = document.createElement('h1');

newHeader.textContent = 'Header no1';
newHeader.style.backgroundColor = 'lime';

// append will make element last-child 
document.querySelector('.div1').append(newHeader); 
// prepend will make element first-child
document.querySelector('.div1').prepend(newHeader); 
```

Inserting before element:
```js
const box2 = document.getElementById('box-2')
// newHeader will be added before the .box-2 and it will be the child of the body
document.body.insertBefore(newHeader, box2) 
```

# Removing HTML element using javascript
```js
// Removes the 'newHeader' which is the child element of body
document.body.removeChild(newHeader);
```

# Classlist
```js
const box = document.getElementById('box');
box.classList.add('show')
box.classList.remove('mybox')
box.classList.toggle('show')
box.classList.replace('show', 'hide')
console.log(box.classList.contains('mybox')) // true
```
### `toggle`
```js
// This will toggle between classes
box.classList.toggle("show")

// This will add the show class if the second parameter is true and remove the class if it is false
box.classList.toggle("show", entry.isIntersecting)
```