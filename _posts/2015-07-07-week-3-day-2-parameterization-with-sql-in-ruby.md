---
title: "Week 3 Day 2 - Parameterization with SQL in Ruby"
tags: ruby, sql
---

Parameterization is the means by which you pass variables into a SQL query so that they are safe and sanitized. It is a feature that should come with any Ruby gem that facilitates working with SQL databases. I'll be speaking from my experience today with the sqlite3 gem.

To run a SQL query with the sqlite3 gem, you use the SQLite3::Database.execute method, and pass it the SQL query as a string for the first argument, followed by your parameters. In order to use a well-formatted and readable SQL query, you should use a [heredoc][1]. This allows you to get the string into the correct spot in the arguments to the execute method, but still write it out over multiple lines.

There are two ways you can use parameterization with the sqlite3 gem. The first is to provide the parameters as separate arguments, and reference them with question marks. Each successive question mark in your SQL query string will be replaced with the sanitized version of the next argument in the list.

{% highlight ruby %}
SQLite3::Database.execute(<<-SQL, 4, "Joe")
  SELECT *
  FROM customers
  WHERE id = ? AND name = ?
SQL
{% endhighlight %}

The `WHERE` clause above ends up being `'WHERE id = 4 AND name = Joe'`.

The second way is to provide the parameters as a hash, and reference them with the key of the hash.

{% highlight ruby %}
  SQLite3::Database.execute(<<-SQL, {:id => 4, :name => "Joe"})
    SELECT *
    FROM customers
    WHERE id = :id AND name = :name
  SQL
{% endhighlight %}
    
This has exactly the same effect as the first example.

There are two major benefits of parameterization:
  1. It allows you to use variables to search for different things. This allows you to write methods to easily perform the SQL query, and use them with user input. For example, you could call `Book.find_by_name(user_input)` to perform a SQL search and return the books with the author that the user provided.
  2. It automatically sanitizes the data, so you are protected from [SQL injection attacks][2].

[1]: http://makandracards.com/makandra/1675-using-heredoc-for-prettier-ruby-code "Article explaining heredocs"
[2]: https://xkcd.com/327/ "Bobby Tables comic"