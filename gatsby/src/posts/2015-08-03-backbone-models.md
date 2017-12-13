---
title: "Backbone.js Models"
tags: javascript, backbone
---

Backbone.js models are classes that allow you to use JavaScript objects to interact with the database and represent items in the database. An instance of a model represents one item in the database and has properties that represent columns in the database.

To set up a class, follow this syntax:

```javascript
ExampleApp.Models.Example = Backbone.Model.extend({
  urlRoot: "/example"
});
```

Backone provides built in model methods that you can use to iteract with the database. These methods use the urlRoot that you specify to construct appropriate HTTP requests, which will get sent to your controller and render JSON data that the model can use to populate the attributes of your model instance.

Here are some of the most commonly used or important model methods provided by backbone:

  * <strong>get and set</strong> - Used to get and set values of attributes.
  * <strong>escape</strong> - Just like get, it returns an attribute value. The only difference is that it safely escapes html, which is necessary if you're getting user input and rendering it in a template.
  * <strong>save</strong> - Calls `Controller#create` or `Controller#update` and updates the database to reflect the attributes of the model instance.
  * <strong>fetch</strong> - Calls `Controller#show` and sets the attributes of the model instance to the values rendered by the server.
  * <strong>delete</strong> - Calls `Controller#delete` and deletes the record from your database.
  * 
  
Note that the `save`, `fetch`, and `delete` methods all make ajax requests. This means that if you need to do something only after those actions have completed, you can't simply put it after calling these methods. Instead, you need to pass the methods `success` or `error` callback functions, which will be run upon successful or unsuccessful HTTP requests (determined by the status code returned by the controller).

To accomodate this, these functions accept an object, which will automatically run the `success` or `errror` functions provided when it gets back a successful or unsuccessful HTTP response. The `success` and `error` functions will be passed the model itself and the response from the controller.

```javascript
var example = new ExampleApp.Models.Example();
example.save({
  success: function(model, response, options) {
    // code to be run upon successful completion of the request
  }
  error: function(model, response, options) {
    // code to be run upon a failure
  }
});
```