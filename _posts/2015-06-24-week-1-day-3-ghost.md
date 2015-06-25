---
title: "Week 1 Day 3 - Ghost"
tags: ruby
---

We made the game [Ghost](http://www.wikiwand.com/en/Ghost_(game)) today. The hardest and most interesting part was creating the logic for the AI. We also ran into some issues with needing to pass a log of info from the Game to the ComputerPlayer class, which led to some interesting consideration about OO design. We passed the info as variables through methods, but it ended up being unwieldy. Better choices might have been to use a module or to set the values as instance variables for the ComputerPlayer.

At one point for a different exercise, we needed to make a list of all possible combinations of an n-digit code of the numbers 0-9. The fact that it had to take any length n made it interesting. We created a recursive solution, which was nice but turned out to be much more difficult than necessary. We later found this simple way to do it online: `('0'*n..'9'*n).to_a`. Ranges of strings are often very useful.