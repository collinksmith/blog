---
title: "Object Oriented Design"
tags: ruby
---

## Polymorphism

Polymorphism is the idea of multiple types of objects being able to respond to the same message. In object oriented design, you should avoid checking the type of objects. Instead, when one object is calling a message on a variable that points to another object, you should just send it the message and not worry about what type of object it is. As long as it responds to the message, it's fine. Different objects can respond to the message in different ways, but they should fulfill the purpose of the message and return the expected result. The implementation behind that is irrelevant to the object that's sending the message.

A simple example is having a `Game` object that sends a `get_input` method to a player. The player could be a `HumanPlayer` or `ComputerPlayer`. Those two classes will obviously go about getting input in very different ways, but both will respon to the `get_input` method and return a value that the game can use as input to make a move.

This concept is also known as duck typing, because as long as an object quacks like a duck, other objects can treat it like a duck without caring about any other details. If you need somthing to quack, just tell it to quack - as long as it accomodates your request, all is well.

## Null object pattern

The null object pattern is an alternative to simply using `nil` to represent an "empty" value (e.g. a cell in a board without a piece). To implement this pattern, you simply need to create a custom class that represents the "empty" space. It should respond to methods that pieces respond to, but return appropriate values for an empty cell. This way, you can simply go through all cells in your board and call the relevant methods, and you will get an appropriate result whether there's a piece there or not. 

If you used `nil`s, you'd need a special `cell.nil?` check. This is an example of a type check (which should be avoided!). Instead, you can simply call `cell.empty?` on all cells - your null object will return `true`, while your pieces will return `false`. In this way, using the null object pattern is an example of duck typing.

In summary, two of the main benefits of using the null object pattern are:

  * It helps you avoid type checking.
  * It helps you avoid inscrutable "`No method for nil object`" errors. It's much easer to debug when the error refers to your custom `EmptySquare` null object, rather than a `nil` that could come from anything.