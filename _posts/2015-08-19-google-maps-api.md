---
title: "Google Maps API"
tags: javascript
---

Goole maps has a [well-documented][1] and easy to use API that allows you to easily put maps on your site. You'll need to get an API key from google. After that, here are the basic steps to create a map:

  1. Create an HTML element that will house the map.
  2. Put the HTML element in the DOM
  3. Add your map to the element with this syntax: `new google.maps.Map(el, mapOptions)`
 
It's important that the HTML element is added to the DOM before you instantate the map object in the lifecycle of your application. Also note that the enlement that houses the map needs to be given a height. By default, `div`s have a height of zero, and if you don't change this, your map will not show up on the screen.

You can customize your map via the `mapOptions` argument when creating a new map. To find a color scheme, I recommend looking at [snazzy maps][2], which lets you browse maps that other people have made and gives you the code you need.

To get rid of all the control icons (except leaving a small `+` and `-` sign for zooming), you can use these map options:

{% highlight javascript %}
var mapOptions = {
  center: { lat: 39.5, lng: -98.35 },
  zoom: 4,
  panControl: false,
  streetViewControl: false,
  mapTypeControl: false,
  zoomControl: true,
  zoomControlOptions: {
    style: google.maps.ZoomControlStyle.SMALL
  }
}
{% endhighlight %}

[1]: https://developers.google.com/maps/
[2]: https://snazzymaps.com/