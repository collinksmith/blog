---
title: "The jQuery `$`"
tags: jquery, javascript
---

The dollar sign is simply shorthand for the jQuery object. It can be used to do a few different things.

**Selecting**
You can select DOM elements by passing css selectors, like so: `$('.class-name')`.

**Running code once the document is ready**
You don't want to run lots of JavaScript code in the browser before the rest of the page has been loaded, because this can result in a noticable delay for the user. You can ensure that your JavaScript code is only run after the HTML document has been fully loaded by passing an anonymous function to the `$` function call, like so:

```javascript
<script>
  $(function () {
    // run your JS code in here
  });
</script>
```
  
jQuery will call the anonymous function that you pass it only after the document has been loaded.

**Creating new jQuery objects**
You can pass an html tag (as a string), and the `$` will return a new jQuery object of that html tag.

Example: `$("<li>Spam</li>")`

**Wrapping an HTMLElement**
If you pass a regular JavaScript `HTMLElement`, the `$` will return the same element as a jQuery object. This is often useful because jQuery provides a bunch of methods you can call on jQuery objects.