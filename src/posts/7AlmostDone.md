---
title: Almost Done!
description: The first post of the posts tracking the development of the mySAUtility tool.
date: 2024-5-8
tags:
  - posts
layout: layouts/post.njk
---


### Summary

We have some geat code writen for the web scraping elements, with our login fully functional we just need to  fix this up and will be  good.

### Basic Code and Explanation

Our current scraping code has a few flaws which we have yet to figure out but we will fix before the final period namely, our base web scraping seems to be flawed. Our current code is supposed to work by itterating through each sub element of course container subsequently getting thier child elementss and values.

### Current Errors
Using `.children` seems to return a list without any valueable info just empty objects. Same with using it in `page.evaluate()`. This is the main error We are currently trying to address.