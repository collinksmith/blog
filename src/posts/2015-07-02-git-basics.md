---
title: "Git Basics"
tags: git
---

Git saves the history of your code by saving snapshots of your files every time you commit. When working on a new feature for a project that's been deployed, it's a good idea to create a new branch so that you can easily keep using the old, fully functional branch while the feature is being developed and tested.

Git commits should be kept small, with each commit only containing a cohesive change of related code. One easy way to do this is to commit different files separately when appropriate. To get even more control, you can use patch mode when adding files to be staged, with `git add -p`. From here, you can add or skip hunks of code within a single file. Git automatically selects hunks based on changes that are clustered together, but you can also split those hunks up to choose exactly which lines you want to commit.