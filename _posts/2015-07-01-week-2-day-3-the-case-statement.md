---
title: "Week 2 Day 3 - The Case Statement"
tags: ruby
---

I had a problem today trying to use the case statement in the following way:

{% highlight ruby %}
    case i
    when < 0
      puts "Less than 0"
    when > 0
      puts "Greater than 0"
    else
      puts "Zero!"
    end
{% endhighlight %}
    
Whiel this seems like it makes sense ("when i is less than zero, print out "less than zero...") it throws a "`syntax error, unexpected '<'"`. Understanding why requires examining how the case statement works under the hood.

When you call a case statement like the one above, ruby is in fact using the <em>case equaity</em> operator* to compare the variable `i` to values you specify. The case equality is written as `===` , and works similarly to `==`. In the default classes, it will return true if the two objects are equal, but also checks if the value on the right <em>is included in</em> the object on the left. For example, with ranges, it return true if the value is included in the range, like so:

{% highlight ruby %}
(0..2) === 1  #=> true
{% endhighlight %}

When you call the case statement above, it is actually equvalent to the following if statement:

{% highlight ruby %}
if 0 === < i                # Syntax error!
  puts "Less than 0"
elsif 0 === > i
  puts "Greater than 0"
else
  puts "Zero!"
end
{% endhighlight %}
    
This makes the syntax error clear. To rewrite your request to check if i is greater than zero in a way that makes sense to the case statement, you can check if `i` <em>is included in the range of numbers from 1 to infinity</em>. You can achieve this by using the builtin `Float::INFINITY` expression, like so:

{% highlight ruby %}
case i
when (-Float::INFINITY..-1)
  puts "Less than 0"
when (1..Float::INFINITY)
  puts "Greater than 0"
else
  puts "Zero!"
end
      
      
# The if statement equivalent:

if (-Float::INFINITY..-1) === i
  puts "Less than 0"
elsif (1..Float::INFINITY) === i
  puts "Greater than 0"
else
  puts "Zero!"
end
{% endhighlight %}
    
In effect, you can think of the case statment as asking "is the variable equal to or included in the following expression?" Because of this behavior, a more appropriate name might be the [case subsumption operator] [1], but it's referred to as case equality in the [official Ruby docs] [2].

One other important thing to note is that because the case statment uses this special method*, you can define your own custom `===` method in your custom classes to make case statements work exactly how you want.

Further reading: [Skorks on how the case statement works] [3]

---------------

*Of course, it's actually a method under the hood, but with special syntax that allows you to use it like `1 === 1` rather than `1.===(1)`. I just think it's simpler to think of it as an operator.

[1]: https://stackoverflow.com/questions/4467538/what-does-the-operator-do-in-ruby#4467823  "Stack Overflow on case subsumption operator"
[2]: http://ruby-doc.org/core-2.2.0/Object.html#method-i-3D-3D-3D  "Ruby docs"
[3]: http://www.skorks.com/2009/08/how-a-ruby-case-statement-works-and-what-you-can-do-with-it/  "Skors on the case statement"