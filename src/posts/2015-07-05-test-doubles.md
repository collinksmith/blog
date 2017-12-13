---
title: "Test Doubles"
tags: ruby, rspec, testing
---

One of the fundamental rules in testing is that your tests should only test one thing. This means that your tests that are designed to test one object should not also rely on the behavior of other, outside objects. If they did, then they would also be testing that outside behavior. 

In particular, you want to make sure that an outgoing message that expects a return value  from another class (a "query message") doesn't test that the method in the other class is working correctly. That should be tested in the other class - it is testing an incoming message to that method to make sure that it return the appropriate value. If you also asserted that it returned the correct value in the object that <em>sends</em> the message, you'd be testing it twice.

In order to fully test the current object, though, you do want to make sure that it's sending the correct messages to other objects. In order to do this without also testing what those other objects return in response, you can use test doubles, aka mocks. A test double is a blank slate that stands in for an object. You can let it know what it's supposed to receive, and what it will return in response. In effect, this bypasses the implementation details of how the actual object would return that in your real application.

Here's how to create a test double in rspec:

```ruby
let(:customer) { double("customer", :email_address => "example@email.com") }
```

This means that the customer object can receive the message `:email_address`, and will return `example@email.com` in response. Your current object can use this "customer" mock to stand in for an actual Customer object. You can make sure that your Order class correctly sends the ":email\_adress" message to a customer when its `send_confirmation_email` method is called like so:

```ruby
expect(customer).to receive(:email_address)

order.send_confirmation_email(customer)
```
    
If your current object is sending a "command" message (a message with side effects) as opposed to a "query" message (a message without side effects that simply returns a value), then you should test that those side effects executed correctly. See [this great talk] [1] by Sandi Metz for more on where you should test things and how you should go about it, such that you ensure you only test things once.

[1]: https://www.youtube.com/watch?v=URSWYvyc42M "Sandi Metz - The Magic Tricks of Testing"