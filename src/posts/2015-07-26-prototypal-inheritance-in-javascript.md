---
title: "Prototypal Inheritance in JavaScript"
tags: javascript
---

JavaScript doesn't have classes built in - it implements <em>prototypical inheritance</em> as opposed to classical inheritance. In order to program in an object oriented fashion in JavaScript, you need to manipulate the prototype chain.

In JavaScript, every function is an object, and every function object has a `prototype` property. When you call a function constructor-style, you get a new object, and that object automatically has a `__proto__` property that points to the `prototype` of the function that was used to create it.

When you try to call a method on an object, it will first look for a method of that name that was defined directly on itself. It it can't find it, then it will search up the prototype chain by checking its `__proto__`. Thus, if you defined the method on the `prototype` of its constructor, then it will find the method there. If you didn't define the method there, then the search will continue by looking at the `__proto__` of that `prototype`.

Every object has a `__proto__` property (and a function's `prototype` is simply an object). By default, a new object's `__proto__` points to `Object.prototype`. `Object.prototype.proto == null`, so eventually every prototye search will end up here and terminate if it didn't find what it was looking for along the way.