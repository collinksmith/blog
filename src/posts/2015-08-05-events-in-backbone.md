---
title: "Events in Backbone"
tags: javascript, backbone
---

There are two types of events that you can listen to in Backbone: regular DOM events, and Backbone events that are triggered by Backbone models. You should always use an `events` property to listen for the former, and Backbone's `listenTo` method for the latter.

Regular DOM events can be listened for using jQuery's `on` method, but you shouldn't use this in Backbone. Instead, you should use Backbone's `events` hash, with the following syntax:

```javascript
events: {
  "event selector": "callback"
}
```
    
This will listen for the event on the selector, and when it happens, it will call the given callback function (which should be specified as another property in the current class). This syntax is concise and automatically binds the context to `this` for you. More importantly, Backbone will automatically get rid of these event listeners if you call the `remove()` method on the instance of the class. Without removing the event listeners, the object will remain in memory even though there are no more references to it, and this is bad for performance.

Backbone events can be listened for using the `listenTo` method, which has the following syntax:

```javascript
initialize: function () {
  this.listenTo(this.model, "sync", this.render)
}
```
 
In the above example, the current class will listen to a "sync" event triggered by its own model. When this happens, the current class will call its render method. The `listenTo` method comes with all the same benefits as using the `events` hash - it automatically binds `this` for you, and it gets rid of the event listeners when you `remove` the instance of the class that is listening.