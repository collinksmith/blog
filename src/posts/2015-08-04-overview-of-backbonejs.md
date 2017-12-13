---
title: "Overview of Backbone.js"
tags: javascript, backbone
---

Being a web framework, Backbone.js uses the terms "model," view," and "router," like Rails does. If you're coming from a Rails background, these terms can be confusing, because the details of what they mean aren't exactly the same between Backbone and Rails. The way I like to think of it is that the basic <em>purpose</em> of a model or view is the same between the two frameworks, but the specifics of what they do and how they do it can be quite different.

###Models

In both Rails and Backbone, the purpose of a model is to provide an object that represents an item in the database. These are pretty similar between the two frameworks. 

###Routers

The purpose of a router is to take in a url and call the correct controller action in response. Again, the two frameworks are very similar in this area. The main difference is that Rails accepts what you might think of as standard urls and standard HTTP requests, and it returns a standard HTTP response with HTML content.

In contrast, Backbone routers take in url fragments, which are simply urls with the relative path prefaced by a hashtag (e.g. `www.example.com/#comments`). The key characteristic of url fragments is that they don't automatically send HTTP requests when entered into the browser. Instead, Backbone routers look for these, and make ajax requests in response. 

This ability of Backbone routers means that Backbone can see a url fragment, make an ajax request to the server, get the data it needs back as JSON, and use that data to update/repopulate the webpage as necessary. The entire time, the page hasn't actually reloaded or gone blank, and the user is none the wiser.

###Views

The purpose of a view is to provide something that can be accessed and will spit out some html. The details of this are quite different between Rails and Backbone.

In Rails, a controller action is called, it gets data from the server to make a new instance of a model, and it passes that model instance to a view, which returns some HTML to be used in the HTTP response.

The flow is more complicated in Backbone. Essentially, the Backbone router receives a route and calls a certain function in reponse. That function makes a new instance of a view, tells that view to do all the appropriate stuff to change the HTML as needed, and then adds the HTML from the view into the body of the DOM.

Behind the scenes, it's actually the view that is reponsible for making instances of Backbone models, making ajax requests, and passing those model instances into <em>templates</em>, which return all the necessary HTML. The view then packages that HTML up so that it can be easily accessed by the router.