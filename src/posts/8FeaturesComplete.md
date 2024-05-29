---
title: Features complete
description: The first post of the posts tracking the development of the mySAUtility tool.
date: 2024-5-9
tags:
  - posts
layout: layouts/post.njk
---

### Summary

By rewiting the code I have successs fully managed to finish our basic scrapping mode along with dynamic summary generation!

### Basic Code and Explanation

Ill just be going over the scraping code and the generation code here.

#### Scraping

    async function assignmentModeScrape() {

      await page.waitForSelector("#showHideGrade > div > label:nth-child(2) > span", {

        visible: true,

        clickable: true

      });

      await page.click("#showHideGrade > div > label:nth-child(2) > span");

      var things = await page.evaluate(() => {

        let subElements = Array.from(document.getElementById("coursesContainer").children).length;

        let newThings = []

        for (let i = 0; i <= subElements; i++) {

          try {

            let g = document.querySelector('#coursesContainer > div:nth-child(${i}) > div.col-md-2.standard-padding-needed > h3').innerHTML;

            let n = document.querySelector('#coursesContainer > div:nth-child(${i}) > div:nth-child(1) > a > h3').innerHTML;

            let aA = document.querySelector('#coursesContainer > div:nth-child(${i}) > div:nth-child(3) > table > tbody > tr:nth-child(3) > td:nth-child(1) > span').innerHTML;

            newThings.push({name: n,  grade: g, activeAssignments: aA});

          } catch {

          }

        }

        return newThings;

      })

      console.log(things)

      return things;

}
Most of this code is run within a `page.evaluate()` method and simply itterates over each div under #coursesContainer and selects the relevant information using `document.querySelector()`. The reason for the try catch is that some elements, those without a link(eg h3 instead of a > h3) are not actual classes and simply subsections of classes like Humanites. This way if the selecto fails we simply don't add it to the classess list. Another problem we where having previously was with the `page.click()` to show grades. With this we simply changed the slector to select the nth child instead of the currently active button, which wouuld have been hide.

In addtion to this code being cleaner it also cuts down on the numbe of lines in the poject by a staggering 50! Yay!

#### Report/MKD Generation

The generation of the markdown is super simple!
Code:
`let finalOut = '';

for (let i = 0; i < classInfo.length; i++) {

    finalOut += <h2>${classInfo[i].name}</h2>

    <class1>

      <a>Your grade is ${classInfo[i].grade}</a>

      <a>You have ${classInfo[i].activeAssignments} active assignments</a>

    </class1>

}

await div(finalOut);`

All we are doing is adding a new html element that has all of the info from the web scraping! Using `await div()` we use sciptkits library to generate a message!

### Current Errors/Hopes For The future

The main thing we hope to fix is to eliminate the need to use setTimeout, as this makes the proccess so much slower and deosn't account for varying levels of hardware.
The other and most important thing is actually properly running it in headless mode. This is just a matter of testing but I would have liked to have gotten to it by the end of the project.
