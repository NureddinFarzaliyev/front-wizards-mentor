Links: [[CSS]] 
Tags: #css

<hr>

# transition

`transition-property: ` defines which property of the item will be transitioned. Can be assigned `all` to apply transition to every property of the item.
`transition-duration: ` defines the duration time of the transition
`transition-timing-function: ` defines the acceleration type for transition: `ease-in`, `ease-out`, `ease-in-out`, `linear`, `ease`(default)
`transition-delay: ` defines the delay before the occurance of the transition

**Shorthand property:**
`transition: property duration function delay`
`transition: transform 150ms ease-in-out 0s`

**More properties to transition**
`transition: transform .5s, background-color .4s, color .5s`

# animation
to define animation: 

```css
@keyframes animationName {
	from {
		transform: translateX(-200px);
	}
	to{
		transform: translateX(0px);
	}
}

.item-to-animate{
	animation-name: animationName;
	animation-duration: 200ms;
	animation-timing-function: ease-in; /* SAME AS THE TRANSITIONS */
	animation-delay: 0s;
	animation-iteration-count: 1; /*1, 3, INFINITE*/
	animation-direction: normal; /* REVERSE */
	animation-fill-mode: none; /*forwards, backwards, both*/
}

SHORTHAND

.item{
	animation: name duration function delay count direction fill-mode;
	animation: animationName 150ms ease-in 0s infinite normal forwards;
}

```

> [!important]
> `transform-origin: top-left;` can be used to make element rotate not from its center but from other points of it. Default is `center`;

## Percantages

```css
@keyframes animName{
	0%, 100%{
		transform: translateY(0);
	}
	50%{
		transform: translateY(200px);
	}
}
```