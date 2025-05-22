Links: [[CSS]] 
Tags: #css

<hr>

# `transform: `


### `rotate`
```css
transform: rotate(0.5turn);
transform: rotate3d(1, 2, 3, 10deg);
transform: rotateX(10deg);
transform: rotateY(10deg);
transform: rotateZ(10deg);
```

### `translate`
```css
transform: translate(12px, 50%);
transform: translate3d(12px, 50%, 3em);
transform: translateX(2em);
transform: translateY(3in);
transform: translateZ(2px);
```

### `scale`
```css
transform: scale(2, 0.5);
transform: scale3d(2.5, 1.2, 0.3);
transform: scaleX(2);
transform: scaleY(0.5);
transform: scaleZ(0.3);
```

### `skew`
```css
transform: skew(30deg, 20deg);
transform: skewX(30deg);
transform: skewY(1.07rad);
```

**Skew** element can be used to create different shapes such as arrows using CSS.

### `clip-path`
this property can be used to clip (crop) images.
`clip-path: circle(50px)` (`25%`)

`clip-path: polygon();` - polygon is used to create custom shapes
top left corner of the image is `0 0` and bottom right corner of the image is `100% 100%`
default full clipping path is: 
`clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%)`
this clip points can be changed with pixels to clip image with different shapes.
extra points can be added besides these 4 clip points.
to make clipping responsive (for sections etc.) `calc(100% + 60px)` - calc functions can be used.