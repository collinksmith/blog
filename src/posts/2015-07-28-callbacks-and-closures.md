---
title: "Callbacks and Closures"
tags: javascript
---

##Callbacks
A <em>callback</em> is a function that's passed into another function and intended to be called inside that function. 

The `setTimeout` function uses callbacks. It takes in a function and a time, waits the specified amount of time, and then invokes the function that was passed in. That's a callback.

##Closures
A <em>closure</em> is a function that accesses variables that are neither passed in nor defined in its body. They are not the same as callbacks, but they often overlap - closures are commonly used as callbacks.

A function definition has access to all variables in the current scope. You can create an outer function that contains local variables, then create a function inside it that uses those variables. After the outer function ends, those local variables will be unavailable. However, if you return that inner function, then you will be able to call it, and it will still have access to those local variables. Here's an example:

```javascript
function outer() {
  var secretWord = "ni";
  
  var guessSecretWord = function (guess) {
    if (guess === secretWord) {
      console.log("Correct!");
    } else {
      console.log("Wrong. The secret word is " + secretWord);
    };
  };
  
  return guessSecretWord;
};

var guessSecretWord = outer();
secretWord;
//=> undefined
guessSecretWord("neeeewong");
//=> "Wrong. The secret word is ni"
```
    
The variables `secretWord` is undefined in the global scope, yet when you call `guessSecretWord()` in the global scope, it is able to access `secretWord` because it was available in the context in which `guessSecretWord` was defined. We say that `guessSecretWord` "closes over" `secretWord`. 

Note that without the closure pointing to `secretWord`, it would be garbage collected after `outer()` has finished running. In our example, JavaScript is smart enough to know that there is a closure that references it and keep it around.