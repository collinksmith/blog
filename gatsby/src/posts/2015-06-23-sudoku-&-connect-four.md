---
title: "Sudoku & Connect Four"
tags: ruby
---

I'm happy to report that I immediately caught myself when I was about to make the mistake that I discussed yesterday of using `@grid[row, col]` when it needs to be `self[row, col]`. Progress!

I learned about `Array#transpose` today and it was a revelation. Makes dealing with 2D arrays much easier because it automatically gives you the columns. I'm getting more familiar and comfortable with the myriad helper methods included in ruby.

Other nice little things I learned about today:

 * `Array#compact` - Removes a nil elements from an array.
 * `Array#rotate` - Moves all elements in an array to the left, and rotates the first elemnt to the end.
 * Making a hash from an array of 2-element arrays like so:
 
```ruby
a = [['name', 'bob'], ['job', 'teacher']
Hash[a] 
#=>; {'name' =&gt; 'bob', 'job' =&gt; 'teacher}
```