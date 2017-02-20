jquery object-fit polyfill
==========================

Note: this project is no longer maintained. Please use [https://github.com/bfred-it/object-fit-images/](https://github.com/bfred-it/object-fit-images/)

------

Simple object-fit polyfill for the [CSS3 Images object-fit property](http://www.w3.org/TR/2012/CR-css3-images-20120417/#object-fit).
It contains a quick feature detection for Opera which supports this property natively.

Read the blog post about this polyfill on [Steve Workman's blog](http://www.steveworkman.com/html5-2/javascript/2012/css3-object-fit-polyfill/)

Read about how CSS3 images works on the [Opera Developer blog](http://dev.opera.com/articles/view/css3-object-fit-object-position/)

Usage:
------

```
$('.selector').objectFit('contain');
$('.selector').objectFit({type: 'cover', hideOverflow: true}); // hiding overflow is only relevant to cover
```
Image sizes are now re-calculated for the given selectors on browser re-size without you having to do anything.

Similarities to box-sizing: cover/contain:
------
The syntax for box-sizing and object-fit are identical, and their purpose is the same. One important thing to remember is that:
* object-fit requires a width or height to re-size the media

This is because object-fit is meant to size the image *inside* an <img> element (and other graphical elements like video).
For example, the default UA stylesheet for <video> is "background: black; object-fit: contain; object-position: center;", which achieves the "letterboxing" effect where you get black bars around videos that have a different aspect ratio than the element).

This can be accomplished using min/max-width/height, instead of setting absolute dimensions

Authors:
------
Originally by [Schmidsi](https://github.com/schmidsi/jquery-object-fit) and re-worked by [steveworkman](https://github.com/steveworkman/jquery-object-fit)

To do:
------
* Add an object-position polyfill
* Add support for all other media types: <video>, <svg> <canvas> and <embed>