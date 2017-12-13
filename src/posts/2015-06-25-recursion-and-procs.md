---
title: "Recursion and Procs"
tags: ruby
---

### Recursion

Keys to solving problems recursively:

  1. Identify the base case.
  2. Figure out what you want for the next largest case.
  3. Make sure your recursive calls are always progressing toward the base case.

If you get confused, it can be helpful to list out what you are expecting to return from the base case and the next larger cases. This can help you identify what you need to do with those return values. Here's an example for making a subsets method:

```ruby
subs([])     #=> [[]]          # This is the base case
subs([1])     #=> [[],[1]]
subs([1,2])  #=> [[],[1],[2],[1,2]]
subs([1,2,3])#=> [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
```

At this point it becomes aparent that for each array, you want to return all the substrings of the array that's one smaller, plus all those substrings with the extra element added to them. Once you've identified this, it's not that hard to translate to code:


```ruby
def subsets(arr)
  return [[]] if arr.empty?     # The base case

  # The array gets smaller and progresses toward the base case
  one_less = subsets(arr[0...-1]) 

  # This is just the logic identified above
  one_less + one_less.map { |sub| sub + arr.last }
end
```

### Procs

Procs are blocks stored as an object. They can be directly passed to methods as proc objects, just like any other object can be. From within the method, they can be called. More common is to pass a block and convert it to a proc that can be called. This is done with the `&` symbol, like so:

```ruby
def takes_a_block(&prc)
  prc.call
end
```

If you have a proc object but a method is expecting a block, you can also use the `&` to convert the proc into a block. In short, when <em>defining</em> methods, the `&` turns a block into a proc that can be called from within the method. When <em>calling</em> methods, the `&` turns a proc into a block that is passed to the method.

Here's an example:

```ruby
def block_ninja(arr, &prc)
  prc.call(arr.first) # This is a proc!
  arr.each(&prc)      # Here we're turning it back into a block!
end

block_ninja([1,2,3]) { |e| print e }
#=> [1,2,3]           # This is from prc.call
#=> 123               # This is from the each method
```