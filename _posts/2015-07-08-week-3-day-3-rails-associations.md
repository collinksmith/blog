---
title: "Week 3 Day 3 - Rail Associations"
tags: rails, sql
---

Associations in Rails determine how your models relate to each other.

## has_many and belongs_to

These are two of the most common relationships, and they often go together (e.g. a post `has_many` comments and a comment `belongs_to` a post). On the surface, this means what it sounds like - a post can have any number of comments, and a comment can be associated with only one post.

It is also helpful to understand this in terms of what it means for the actual tables in the database. If a comment `belongs_to` a post, that means that **its table contains a foreign key that points to the posts table.** If post `has_many` comments, that means that **its table is pointed to by a foreign key in the comments table.**

## has_many :through

The `has_many :through` association is a way to specify a many-to-many relationship via a join table. For example, a class has many students, and a student has many classes. They can be connected through a join table, which we can call `enrollments`. This join table should have a foreign key that points to a class, and another foreign key that points to a student.

Both students and classes have many enrollments, and an enrollment belongs to a student and belongs to a class. Once you've set up these associations, you can create the `has_many :through` association, like so:

{% highlight ruby %}
class Student << ActiveRecord::Base
  has_many :classes, through: :enrollments, source: :classes
end
{% endhighlight %}
    
The inverse should be done in the `Classes` model. 

Note that the values you give to `through:` and `source:` are the names of the <em>associations</em>, as they were previously defined. These are usually just the same as the names of the models that they point to, but you can name an association whatever you want, as long as you then explicitly tell rails the name of the model that association should point to.

After doing all the above, Rails provides you with nifty methods that you can use to easily get a student's classes and vice versa. You can use `student.classes` to return an array of all the classes that a particular student is enrolled in.

## has_and_belongs_to_many

This is just a shortcut for doing all of the setup detailed above in the `has_many :through` section. It defines a many-to-many relationship without needing to manually create the join table. The benefit that it takes less time and less code to set up. One potential downside is that you can't customize the intervening join table with any other data.