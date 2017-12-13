---
title: "jQuery UI Sortable"
tags: javascript, jquery, backbone
---

jQuery UI is a library that uses jQuery to provide an easy way to implement user interactions with your web page. The Sortable plugin allows users to click and drag an element to rearrange its position on the page.

It works by calling `sortable` on a jQuery object. This will make all the immediate children of that HTML element sortable.

In Backbone, you should put this at the end of the render function of your views. It's important to note that this `sortable` function call will not work properly unless the elements have already been inserted into the DOM. Thus, you should make sure that your router first sets the HTML appropriateley, and then calls `render`. 

You should also make sure that you call the `sortable` function on any element that needs it any time any of its parent views has been re-rendered. A good way to do this is to move the `sortable` call into a separate `onRender` function. This function should a) call `sortable` on the appropriate element, and b) recursively call `onRender` on all its subviews. 