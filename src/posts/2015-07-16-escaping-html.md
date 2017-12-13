---
title: "Escaping HTML"
tags: rails, html
---

HTML that is generated from your webpage is vulnerable to an HTML injection attack (aka script injection). A user could write a `<script>` tag with arbitrary JavaScript code. To combat this, Rails automatically escaptes any HTML generated via embedded Ruby.

Escaping is a means of disabling HTML tags. If you have a `<` in a string that's escaped, it will turn into `&lt;` in your outputted HTML.

The problem is that you might want to use helper methods to generate common HTML code. You need to use embedded Ruby in order to call those helper methods. But since Rails escapes HTML characters resulting from embedded Ruby, your HTML code will be broken.

You can get overcome this by explictly telling Rails not to escape a string by calling `html_safe` on the string.

What if you have a helper method to generate HTML code, but it includes input from the user? You want to call `html_safe` on the entire string so that your helper method will work correctly, but you still want to escape the characters that come from the user input to protect against injection attakcs.

You can do this by passing the user input into the `html_escape` method (also availabled in the shorthand form `h`). This goes inside the HTML string via string interpolation. You can then call `html_safe` on the entire string. The net result is that <em>only the string that you passed to the</em> `html_safe` <em>function will be escaped</em>