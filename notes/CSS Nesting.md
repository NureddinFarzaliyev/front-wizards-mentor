Links: [[CSS]] 
Tags: #css

<hr>

```css
div {
    height: 100px;
    width: 100px;
    background-color: red;

    &:hover{
        background-color: green;
    }

    & p {
        color: blue;
    }

	.login {
		background-color: blue;
	}
}
```

To select **paragraphs** which is inside of the **.dark-theme**
```css
p{
	color: steelblue;

	.dark-theme & {
		color: lightblue;
	}
}
```

We can nest **media queries**!
```css
.hero {
	font-size: 1.25rem;

	@media (min-width: 780px) {
		font-size: 2rem;
	}

}
```