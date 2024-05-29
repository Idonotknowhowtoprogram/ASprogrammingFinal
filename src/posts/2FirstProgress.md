---
title: First Progress Post
description: The first post of the posts tracking the development of the mySAUtility tool.
date: 2024-5-3
tags:
  - posts
layout: layouts/post.njk
---


### Summary

The first thing that I started on was using pupeteer to do a basic login proceedure. 

### Basic Code and Explanation

In order to use pupeteer with scriptkit we first have to import it with `await npm('puppeteer')`, if you dont have node downloaded scriptkit will automatically prompt you to do so when you run the program.
We then launch a new pupeteer browser with `pupeteer.launch()`. We set headless and defaultViewport to false in order to see what pupeteer is doing.

We can then use a combination of `.waitForSelector`, to wait for an element we want to interact with to render in the DOM and `.type()`/`.click()` to interact with elements on the page. All of these methods use CSS Selectors to target elements on the page. 
I also use `.waitForNetworkIdle()` in the code below, I need to fix this by the end of the project as this often results in slow execution times.

### Current Errors
The `await page.waitForSelector('input[type="password"]');` deos not currently stop the program from entering the password placeholder into the password feild.

Here is the current code:

`// Name: MySAUtility

import "@johnlindquist/kit"
import { Value } from "@johnlindquist/kit/core/enum";

const puppeteer = await npm('puppeteer');

(async () => {
const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: false
});
const page = await browser.newPage();
await page.goto('https://sonomaacademy.myschoolapp.com/app#login');
await page.waitForSelector('.form-control', {
    visible: true,
  });
await page.type('.form-control', 'firstname.lastname@sonomaacademy.org');
await page.click('.btn-lg');
await page.waitForSelector('.VfPpkd-LgbsSe.VfPpkd-LgbsSe-OWXEXe-k8QpJ.VfPpkd-LgbsSe-OWXEXe-dgl2Hf.nCP5yc.AjY5Oe.DuMIQc.LQeN7.BqKGqe.Jskylb.TrZEUc.lw1w4b', {
    visible: true,
});
await page.waitForSelector('#identifierId');
await page.waitForNetworkIdle();
await page.click('.VfPpkd-LgbsSe.VfPpkd-LgbsSe-OWXEXe-k8QpJ.VfPpkd-LgbsSe-OWXEXe-dgl2Hf.nCP5yc.AjY5Oe.DuMIQc.LQeN7.BqKGqe.Jskylb.TrZEUc.lw1w4b');

await page.waitForSelector('input[type="password"]');
await page.type('.whsOnd.zHQkBf', 'alksdjf;lj');
//await browser.close();
})();`