---
title: "Prototyal Inheritance in JavaScript (continued)"
tags: javascript
---

<em>Note: This is a continuation of [my last post][1]</em>

##The Problem (Naive Approaches)
Now that we know how the protoype chain works, let's talk about how to best set it up to implement inheritance. I'll use `Animal` and `Dog` as example classes.

The naive approach would be to set Dog's prototype equal to Animal's prototype. The problem with this is that they then point to the same object, so any additions you make to `Dog.prototype` will also be present on Animal's prototype, and thus on all other classes that inherit from `Animal`.

To avoid this problem, you could set Dog's prorotype to be an object created by calling `new Animal()`. This object will have a `__proto__` property that points to Animal's prototype, so all of `Animal`'s methods will be correctly inherited. `Dog` will also have its own prototype, so you can create methods for `Dog` that aren't available to `Animal`.

However, you end up instantiate a new `Animal` simply to construct your `Dog` class. This isn't very semantically sound or eloquent. You also don't actually run the `Animal` constructor function when you create a new instance of `Dog`. This means that if `Animal`'s constructor sets a name, you can't just pass in that name when you instantiate a new `Dog`.

##The Solution: Surrogate
A better solution is to combine the previous two techniques by using a surrogate class. The surrogate class' prototype is set to be a new instance of `Animal`, and `Dog`'s prototype is set to be equal to the surrogate's prototype. You can easily package this into a function to hide these details away. Here's what it looks like:

{% highlight ruby %}
function inheritcs(Child, Parent) {
  function Surrogate = function () {};
  Surrogate.prototype = new Parent();
  Child.prototype = Surrogate.prototype;
};
{% endhighlight %}
    
A quick aside: if you simply do the above, then if you call `#constructor` on an instance of the child class, it will return the parent class. This is because `constructor` is a property that's automatically set on a class' prototype, but we're overwriting the child class' `prototype`. The call to `prototype` will go to `Surrogate.prototype`, which is an instance of `Parent`, which will search the parent's prototype and find `constructor` there.

To fix this, it's advisable to explicitly set the value of constructor for the child class, like so: `Child.prototype.constructor = Child;`.

What about the code inside the `Parent` prototype? Inside the child class' constructor functon, you'll need to explicitly call the constructor function, specifying the value of `this` to be the new instance of the child class. Here's what that looks lik:

{% highlight ruby %}
function Dog (name, barkVolume) {
  Animal.call(this, name);
  this.barkVolume = barkVolume;
}
{% endhighlight %}
    
This way, all the work that the parent class did to set the name property can be delegated to the parent class, and you can also specify new properties specific to the child class.


[1]: http://collinksmith.tumblr.com/post/125150363209/week-5-day-5-prototypical-inheritance-in