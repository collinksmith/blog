---
title: "Typeahead"
tags: javascript
---

Typeahead is a JavaScript library made by Twitter that makes it easy to quickly show items in your database that match what the user has typed into a search bar. See the [example][1] page to see what it looks like.

To implement it, you need to select an input element and call `#typeahead` on it. The typeahead function takes an options hash, and and object that specifies the source.

The source that typeahead searches for matches can be a simple array, or it can be linked to your database. You can use Twitter's complementary `Bloodhound` class to link it up to a database and provide more powerful functionality. If you just have a simple list of things that you'll be searching for, however, it might make more sense to simply create an array of all the items in your database that you'll be searching for, and then use that array as the source for typeahead to search within.

The source that you provide to the `typeahead` function actually needs to be more complex that a simple array - it needs to be a function that takes a query and a function to be passed the matches. If you just want a simple implementation, you can copy the `substringMatcher` function wholesale from the first exmple on the  page linked above.

[1]: https://twitter.github.io/typeahead.js/examples/