---
title: "Horizontal Centering with text-align: center and display-block"
tags: css
---

When trying to center an element within another element you might not be able to use `margin 0 auto` if the `position` or `display` value of one of the elemts isn't right. Another method you can use is to set the `display` value of the inner element to `display-block`, and then give the outer element `text-align: center`. You also need to set the width of the outer element.

Here's an example showing everything you need:

{% highlight javascript %}
.outer {
  width: 100%;
  text-align: center;
}

.inner {
  display: inline-block;
}
{% endhighlight %}