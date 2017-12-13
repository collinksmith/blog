---
title: "SQL Subqueries"
tags: sql
---

Correlated subqueries are a useful aspect of SQL that didn't come naturally to me. <em>noncorrelated</em> subqueries are not dependent on the containing query, and are executed only once, before the containing query. In contrast, <em>correlated</em> are dependent on the containing query, and are executed once for each row of the containing query.

Here's an example, taken from the book <em>[Learning SQL][1]</em>. 

```ruby
SELECT c.cust_id, c.cust_type_cd, c.city
FROM customer c
WHERE 2 = (SELECT COUNT(*)
  FROM account a
  WHERE a.cust_id = c.cust_id);
```
      
This returns info about customers who have exactly two accounts. For each customer, the subquery runs through every account, executes a filter to only include accounts associated with the customer in question, and returns the number of accounts meeting this condition. This result is then compared to the number 2 in the containing query. If it is 2, then that customer is included in the result of the containing query.

[1]: http://www.amazon.com/Learning-SQL-Alan-Beaulieu/dp/0596520832/ref=sr_1_1?ie=UTF8&qid=1436247059&sr=8-1&keywords=learning+sql "Learning SQL on Amazon"