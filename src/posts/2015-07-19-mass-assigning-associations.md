---
title: "Mass Assigning Associations"
tags: rails, activerecord
---

Lets say you have a many-to-many relationship between two types of objects, which are connected by a join table. Lets call them `Celebrities` and `Followers`, and lets call the join table `Followings`.

If you want to add a bunch of followers to a celebrity, you need to create a `Following` object for each new follower, like so:

```ruby
Following.create!(user_id: 1, follower_id: 4)
Following.create!(user_id: 1, follower_id: 5)
Following.create!(user_id: 1, follower_id: 6)
Following.create!(user_id: 1, follower_id: 7)
Following.create!(user_id: 1, follower_id: 8)
Following.create!(user_id: 1, follower_id: 9)
```
    
This is repetitive and unintuitive. It would be nice if you could do something like `user.followers = # *list of followers*`. Rails actually provides the functionality to do just that. Here's the syntax:

```ruby
user.follower_ids = [4, 5, 6, 7, 8, 9]
```
    
For each follower id in the list, this will automatically create a new `Following` entry that joins `user` with the follower having that id. It will also delete any `Following` entries joining `user` to any followers that are not on the list you provide.