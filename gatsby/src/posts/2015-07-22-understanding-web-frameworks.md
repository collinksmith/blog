---
title: "Understanding Web Frameworks"
tags: rails
---

Web frameworks like Rails have a lot of responsibilities. Some of the major things they need to do include:

  * Providing and interface between the app and the underlying database.
  * Parsing the route of the url and the HTTP verb, and calling the correct method on the correct controller
  * Rendering content back to the browser or redirecting to a different page.
  * Parsing and making all parameters available to the app (from the query string, http body, or the url).
  * Reading and setting cookies.

It's difficult to wrap your head around what's going on when you think about the whole thing, but it helps to think about it from an object oriented perspective. Object oriented design means that each class only has to worry about a single responsibility, and it can build on other classes that have taken care of all the other details. 

Let's look at the job of handling parameters as an example. A web framework can have a `Params` class, which will be initialized with the HTTP request and route parameters, and return and object that can be accessed like a hash to provide easy and organized access to all of that information.

The `Params` class will be given the HTTP request by the server, and it will be given route params by the router, which parsed the url to get them. However, the details of where those things come from don't matter. The `Params` class doesn't need to know anything about where those things come from, or what will be done with the information once it's been organized - all it has to do is handle the organization.

The `Params` class will create its own instance variable that will contain all the data. It will then go about parsing the three different sources of information that it received, and merging them into this instance variable. Finally, it will provide methods that other classes can use to get easy access to all this information. For instance, it can define the `#[]` and `#[]=` methods, which will allow other classes to access the information like they would access a hash.

That's all there is to params. This is just one example - every other part of the framework can be similiarly broken down into an isolated responsibility. Understanding large frameworks becomes much easier when you think about each part in terms of a single responsibility and a set of defined inputs and outputs.