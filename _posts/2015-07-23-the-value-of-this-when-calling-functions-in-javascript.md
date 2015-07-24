---
title: "The Value of `this` When Calling Functions in JavaScript"
tags: javascript
---

There are three different ways to call functions in JavaScript, and they have different implications for the value of `this`.

1. Function style
  * `foo();`
  * `this` is set to the global scope (usually `window`).
2. Method style
  * `obj.foo();`
  * `this` is set to the object on which the method is called.
3. Constructor style
  * `new foo();`
  * `this` is set to the new instance that is being created.

  
A common pattern in JavaScript is to use <em>callbacks</em>. A callback is a function passed to another function. The callback will be invoked inside that outer function whenever the outer function is invoked.

Callbacks are usually invoked via function style. If you pass in an object's method as a callback, it will be invoked via function style, and its `this` value will point to the global scope. This is a problem if your object's method relied on `this` pointing to the object!

Even if you pass in the object via dot notation, you are just passing in a function object. You're not invoking the function via method style. The dot notation simply points you to the correct function object, which can then be invoked in any style.

{% highlight javascript %}
var foo = {
  greeting: "hello",
  
  yellGreeting: function () {
    console.log(this.greeting + "!");
  }
};

function times(num, func) {
  for (var i = 0; i < num; i++) {
    func(); // method is invoked 'function style'
  }
}

times(3, foo.yellGreeting); //prints "undefined!" 3 times
{% endhighlight %}

You can solve this problem by using `bind`. Call `bind` on a method to manually set the value of `this` inside of it.

{% highlight javascript %}
times(3, foo.yellGreeting.bind(foo)); //prints "hello!" 3 times
{% endhighlight %}
 
The methods `apply` and `call` are similarly used to set the value of `this`, but they can also pass arguments into the function. `apply` accepts a single array of the arguments to pass, whereas `call` accepts each argument individually.