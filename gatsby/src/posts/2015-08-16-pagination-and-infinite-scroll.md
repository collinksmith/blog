---
title: "Pagination and Infinite Scroll"
tags: backbone, gems, rails
---

To implement infinite scroll in your Backbone app, you need to:
  
  * Implement pagination.
  * Detect when the user has scrolled to the bottom of the page.
  * Fetch the next 'page' of your collection and don't overwrite what you already. have.
  * Re-render the view.
  
You can implement pagination in Rails with the [kaminari][1] gem. The logic occurs in your controller. You'll pass a `page` param with your request, and then you can select the appropriate items with kaminari's `#page` and `#per` methods. `#page` specifies which offset of items you want, and `#per` specifies how large the offset is.

If you have your own custom SQL query that returns an array instead of an active record relation, you won't be able to use kaminari's methods. You can easily modify your SQL queries to achieve the same result, though. Simply specify a `LIMIT` and an `OFFSET` in the query. 

The limit is how many items per page, and the offset specifies which page you want. For example, to get page 1 with 25 items per page, you'd need to say `LIMIT 25 OFFSET 0`. To get the second page, it's `LIMIT 25 OFFSET 25`.

[1]: https://github.com/amatsuda/kaminari