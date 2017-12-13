---
title: "Polymorphic Associaions"
tags: rails
---

In Rails, `has_many` and `belongs_to` associations are pretty clear and simple. A User `has_many` contacts. A Contact `belongs_to` a user. But what if you want something that could belongs to <em>either a User or a Contact</em>, but not both?

For instance, you could have comments about users or contacts. A given comment could `belong_to` a User, or it could `belong_to` a Contact. Because it can't be about both a User and a Contact, you can't have separate foreign keys for each. But because the names of the classes are different, you can't set up a standard association using a single foreign key.

The answer is to use polymorphic [associations][1]. Rails makes it easy to solve this problem by creating an abstract interface to represent something that can be commented on. In this case, it's representing <em>either a User or a Contact.</em> 

Inside the comments table in the database, you simply need 
1. The id of this <em>thing that can be commented on</em> (the foreign key).
2. Another column which specifies which specific type of thing you're talking about in this case.

We can call this abstract interface <em>commentable</em>, and use the following syntax to specify the relationships:
    
```ruby
class Comment < ActiveRecord::Base
  belongs_to :commentable, polymorphic: true
end
 
class Contact < ActiveRecord::Base
  has_many :comments, as: :commentable
end
 
class User < ActiveRecord::Base
  has_many :comments, as: :commentable
end
```

[1]: http://guides.rubyonrails.org/association_basics.html#polymorphic-associations "Rails guides on polymorphic associations"