---
title: "Like/Follow Buttons in Backbone"
tags: backbone
---

Here's a basic plan for implementing a like or follow button in Backbone:

  * Users will be connected to Posts via a "likes" join table.
  * The `Post` Backbone model will be given a "like" attribute in the JSON it's sent from the server. If the current user doesn't like the post, then this will be empty. Otherwise, it will point to the id of the row in the "likes" table that joins the post and the user.
  * Use this data to create a function in your `Post` Backbone model, which points to an instance of a `Like` Backbone model.
  * When the user clicks the button to toggle the "like" status, you will either destroy this `Like` instance (if the user already likes the post), or pass it the id of the post and save it (if the user doesn't already like the post).