---
title: "Serialization"
tags: ruby
---

Serialization is a way to store data. It essentially takes all the data, converts it to a string in a special format, and stores that string in a separate file. The string in this file can then be parsed back into the original data. JSON and YAML are two of the most relevant serialization formats for web development and ruby.

JSON is an important serialization format for the web. However, it’s not the most robust when working with Ruby. It only saves data such as strings, numbers, hashes, and arrays. That means that it can't store instances of custom classes. It also means that serializing symbols and deserializing them will spit them back out as strings.

YAML pvodides greater functionality for storing Ruby data. It can store the state of a class instance. You still need to have the code for the class available where you load the YAML data for an instance of that class. YAML can try to save the data of the actual class object itself, but it can't do so fully. It will not be able to store the methods and spit them out appropriately when you deserialize it.