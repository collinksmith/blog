---
title: "Backbone's Parse Function"
tags: javascript, backbone
---

Whenever a Backbone model fetches data from the server (via `fetch` or `save` calls), the results pass through its `parse` function. The parse function takes in the response as its first argument, which is the JSON reponse converted to a JavaScript object. The function should return an object, which will function as an attributes hash to be set on the model.

By default, the parse function simply returns the response without changing it, which means that whatever the server returns will be set as the model's attributes.

You might want to override the default behavior, and you can do this by defining your own parse function. For example, if you receive nested data, you might want the second-level data to populate a collection, rather than having it exist as a simple attribute of the model. Here's what that might look like, with a post having many comments nested underneath it:

```javascript
// post.js
parse: function (response) {
  if (response.comments) {
    this.comments().set(response.comments);
    delete response.comments;
  }
  return response;
}
```
    
In this example, the `comments()` function would return a `Comments` collection, which you can then set with the data from `response.comments`. After doing this, you can delete the comment data so that it's not set in the attributes of the post.