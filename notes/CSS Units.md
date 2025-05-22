Links: [[CSS]] 
Tags: #css

<hr>

CSS units such as cm, mm, in etc. are not the actual size on the screen, but the size of the webpage on a printed paper. 

Pixel size is being calculated using the **reference pixel**. A real size of the box with a fixed width and height in pixels can be differ from device-to-device. Because the size of a reference pixel is different in all devices. This size is being calculated by the expected viewing distance. So, the same box will be bigger in tv rather in a mobile phone because televisions are expected to be watched in a farther distance than mobile phones. This is why pixel is one of the most complicated css units.

Using pixel unit on text will avoid accesibility purposes as it determines a fixed text size which prevents users to change their default font size from preferences of the browser.

`em` and `rem` units are the relative to the default font size of the browser.

`1em` - is the font size of the parent element. If **none of the** parent elements have any font size declared, the size will be the font size of root element. Default font size of the root element can be changed by the user from browser settings. (default is 16px)
If font size of the element is declared and `em` is used to declare other properties then the one unit of `em` will be equal to the font size of the element itself, not the parent. 

`1rem` - gets the font size of root element without checking any of the parent elements. As it's not dependent from any of its parents it's more reasonable to use `rem` rather than `em`.

`%` - percentage units are relative to their parents.

`vw` and `vh` are the percentage units for not the parents, but the viewport itself. For instance, `80vw` is equal to `80%` of the viewport's width. 

`1ch` is the width of a default character. 