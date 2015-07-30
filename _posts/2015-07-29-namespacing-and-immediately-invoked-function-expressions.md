---
title: "Namespacing and Immediately Invoked Function Expressions"
tags: javascript
---

In any javascript file you're going to load into your html, it's a good idea to create a distinct namespace. This helps to prevent name collisions with other files that might also be loaded into the html. For example, if you're writing a snake game, you might call your namespace `Snake`. Here's how you do it:

{% highlight javascript %}
if (window.Snake === 'undefined') {
  window.Snake = {}
}
{% endhighlight %}

var Board = Snake.Board = function () {
  // board stuff
};
    
First, you check if a different file already defined window.Snake. If so, you'll just use that. Otherwise, you'll make it a new object, which you can then add things to. 

Now, any classes or other functionality you need for your snake game, you'll add as properties of `window.Snake`. Setting `Snake` as a property of `window` simply puts it at the global level, so you can subsequently simply refer to it as `Snake`.

When you load this file, you'll be able to refer to everything you specify as a property of `Snake`, and you'll only add one name to your global scope (`Snake`).

In order for this to work, you want to keep everything except for your `window.Snake` object private. You can accomplish this by wrapping the entire file in a function. But you still want to make sure all that code is executed, so you'll need to invoke it within your file. This is called an <em>immediatley invoked function expression</em>. Here's how it looks:

{% highlight javascript %}
;(function () {
  if (typeof Snake === 'undefined') {
    Snake = window.Snake
  }
  
  //put all your awesome snake code in here
  
  })();
{% endhighlight %}
      
A couple things to note here:

  * The semicolon at the front is called a <em>defensive semicolon</em>. It protects against the possibility that the javascript code that was loaded before yours failed to include a semicolon at the end (which could cause your function to not be run). If so, this semicolon will end any javascript expressions that were left hanging so that your code will be ready to run. If not, this semicolon will have no effect and all will be well.
  * You need to wrap your entire function in parentheses in order to make it a function expression, rather than a function declaration. JavaScript doesn't allow you to immediately invoke function declarations, but it does allow it for function expressions.
  * The final `()` is simply invoking the function expression.