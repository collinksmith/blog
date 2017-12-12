---
title: "The Bootstrap Grid System"
tags: bootstrap, css, responsive design
---

The bootstrap grid system is an easy way to give your site a layout with different numbers of columns depending on the size of the screen. It makes use of media queries, but they are hidden from you.

The bootstrap grid is divided into 12 columns and 4 screen sizes (xs, sm, md, ang lg). 12 columsn will make up the full width of the closest parent wth the class `"container"` or `"container-fluid"`.

For any given size, you simply need to specify how many of those columns you want your element to take up. You can do so by specifying the appropriate class on your element. To make an element take up 6 columns on a small screen size, set the class to `col-sm-6`.

To make the element take up a different number of columns on different screen sizes, give it multiple classes, like so: `<div class="col-sm-6 col-lg-4"`. That element will take up half the width of the container element on a small screen, and a third of the width of the container element on a large screen.

For further reading along these lines, I'd recomment [this blog post][1], which I've found to be the best explaination I've come across.

[1]: (http://blog.templatemonster.com/2014/10/24/bootstrap-3-grid-system-guide/)