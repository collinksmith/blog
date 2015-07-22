---
title: "Tips on Testing in Rails"
tags rails, testing
---

### Factory Girl

* You can easily get test objects by defining the a factory for that object.

* If you have the Factory Girl gem installed, a factory file will automatically be created when you generate a new model.

* Use the Faker gem in your factory to produce random data.

* You can nest factories with different names to create more specified data. Any attribute you specify in a nested factory will overwrite attributes the factory that encloses it.

* You can have direct access to the `build` and `create` methods (rather than needing to call `FactoryGirl.build`) by putting the line `config.include FactoryGirl::Syntax::Methods` inside the config block of your RailsHelper file.

### Capybara

* You can see what page your test is looking at by inserting the line `save_and_open_page` in your tests.
  * NOTE: You need the `launchy` gem installed for this to work.

