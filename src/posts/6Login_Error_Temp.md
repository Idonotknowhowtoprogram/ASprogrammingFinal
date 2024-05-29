---
title: Login Error Temp
description: The first post of the posts tracking the development of the mySAUtility tool.
date:2024-5-7
tags:
  - posts
layout: layouts/post.njk
---


### Summary

The bug in the login sequence was fixed! But if this project is to be finalized we will need to find anoth solution.

### Basic Code and Explanation

The previous error we where encountering was the clicking of the login button. Well we found a solution and the reason for the error. The google login page deos not reload or event send netwok trraffic between the submission of the username(email), and the password. This mean checking for items to laod or for network idle will not work. The simplest way to solve this is to add a static time to wait between clicking the submit button on the username page and the entering of the password and submission of the password. There is a possibilty of checking the input type and this will be the next thing to try.
Here is the basic waiting code:
`
setTimeout(() => {
    page.type('.whsOnd.zHQkBf', password)
    setTimeout(() => {
        clickNextLogin(page)
    }, 3000)
}, 6000);
`
Within this we are simply setting a timeout of six second to enter the password and start another timeout to click the button, the second timeout is the wait for the password to be typed. Password is a varriable now, we prompt the user instead of enteing it directly in the code.

We also have some basic web scaping code! Here is a basic outline of how we are curently scraping elements on the page.
` var class1 = await page.evaluate(() => {return document.querySelector("#coursesContainer > div:nth-child(1) > div:nth-child(1) > a > h3").innerHTML});`
In this case we are using `page.evaluate()` to return the innerHTML of the first classes name.

### Current Errors/Goals
The main goal for now is to address a problem that occurs with the web scraping where simply selecting the element like this by number rdeos not work as the core humanities class as two class below that do not have a line attached to the name(`a > h3`). So we will need some sort of simple loop to go through each class and filter the elements without links. 
