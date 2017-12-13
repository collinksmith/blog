---
title: Minimizing SQL Queries with Active Record
tags: rails, activerecord
---

The number of SQL queries a web app makes can have a huge impact on performance due to the potential large number of items in a the database. If you have 100,000 users and you iterate over each of them, running a new SQL query on each iteration, all those SQL queries will add up to a huge overhead that is very bad for performance. 

This is called an N+1 search, because you are performing one search to get all your users, and then another search for each user as you iterate through them. This is an exception to the general rule that you should't worry about optimizing for performance until you have a problem. This is so egregious that you should make sure to avoid ever writing anything like this in your app.

Active Record helps you avoid this problem with its `ActiveRecord::Relation` object. This is essentially a "pre-fetched" database relation, which points to a specified set of objects in your database, but doesn't actually run a SQL query until the last possible moment.

`Relation` objects are made as a result of Active Record's built in query methods, such as `select` and `where`. They are also returned as a result of methods like `all`. You can perform perform additional query methods on a `Relation` and return new `Relation`s, all without causing any SQL queries. You can even iterate over them without causing a a new query on each iteration.

You should take full advantage of Active Record's ability to pre-fetch data from the database in order to minimize the number of SQL queries you need to make.