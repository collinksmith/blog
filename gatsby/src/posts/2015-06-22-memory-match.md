---
title: "Memory Match"
tags: ruby
---

Today we wrote the classic card matching game. Writing the game itself was pretty simple, but designing an AI that could guess intelligently proved difficult. There were a couple things that I learned that stood out to me:

#### The power of abstraction
In our ComputerPlayer class, we had a two-dimensional grid to keep track of the known values of the cards. As we were thinking about the guessing AI, we often wanted to be able to get the positions of cards with a given value. As far as I know there's no easy way to do this for a 2D array using built-in methods. Every time we wanted to do this, I got confused and distracted by the implementation details.

After we created our own index method that took care of all these details, it was much easier to think about the overall design of the AI. The confusing details were abstracted away behind the method. This was a good first-hand lesson of how layers of abstraction make code easier to work with, and I'll be quicker to implement custom helper methods like this in the future.

#### A common mistake (for me at least) with using the "syntactic sugar" methods to access 2D arrays
We used this special method to make it easer to access our 2D array:
{% highlight ruby %}
def [](row, col)
  @grid[row][col]
end
{% endhighlight %}

It makes perfect sense when accessing a "board" object's 2D array from outside the class, which can be done like so:`board[row, col]`
    
However, when accessing it from within the same class, you need to access it with self:`self[row, col]`
    
This is especially confusing when the class is something like ComputerPlayer (`computer_player[row, col]` doesn't make much sense). It seemed more intuitive to type `@grid[row, col]`, and it took me a while to figure out why that wasn't working. 

Maybe it's best to only use this technique for classes that specifically represent a 2D array, like board, in order to reduce confusion.