// Name: MySAUtility

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
await page.type('.whsOnd.zHQkBf', 'password');
//await browser.close();
})();
async function assignmentModeScrape() {
    await page.click("#showHideGrade > div > label.btn.btn-default.btn-sm.bold.active > span");
  
    var grade1 = document.querySelector("#coursesContainer > div:nth-child(1) > div.col-md-2.standard-padding-needed > h3");
  
    var grade2 = document.querySelector("#coursesContainer > div:nth-child(2) > div.col-md-2.standard-padding-needed > h3");
  
    var grade3 = document.querySelector("#coursesContainer > div:nth-child(3) > div.col-md-2.standard-padding-needed > h3");
  
    var grade4 = document.querySelector("#coursesContainer > div:nth-child(4) > div.col-md-2.standard-padding-needed > h3");
  
    var class1 = document.querySelector("#coursesContainer > div:nth-child(1) > div:nth-child(1) > a > h3");
  
    var class2 = document.querySelector("#coursesContainer > div:nth-child(2) > div:nth-child(1) > a > h3");
  
    var class3 = document.querySelector("#coursesContainer > div:nth-child(3) > div:nth-child(1) > a > h3");
  
    var class4 = document.querySelector("#coursesContainer > div:nth-child(4) > div:nth-child(1) > a > h3");
  
    var class1ActiveAssignments = document.querySelector("#coursesContainer > div:nth-child(1) > div:nth-child(3) > table > tbody > tr:nth-child(3) > td:nth-child(1) > span");
  
    var class2ActiveAssignments = document.querySelector("#coursesContainer > div:nth-child(2) > div:nth-child(3) > table > tbody > tr:nth-child(3) > td:nth-child(1) > span");
  
    var class3ActiveAssignments = document.querySelector("#coursesContainer > div:nth-child(3) > div:nth-child(3) > table > tbody > tr:nth-child(3) > td:nth-child(1) > span");
  
    var class4ActiveAssignments = document.querySelector("#coursesContainer > div:nth-child(4) > div:nth-child(3) > table > tbody > tr:nth-child(3) > td:nth-child(1) > span");
  
  }
  if (mode == "assignment") {
    assignmentModeScrape();
    await div(`
    <body>
      <h2>${class1}</h2>
      <class1>
        <a>Your grade is ${grade1}</a>
        <a>You have ${class1ActiveAssignments} active assignments</a>
      </class1>
      <h2>${class2}</h2>
      <class2>
        <a>Your grade is ${grade2}</a>
        <a>You have${class2ActiveAssignments} active assignments</a>
      </class2>
      <h2>${class3}</h2>
      <class3>
        <a>Your grade is ${grade3}</a>
        <a>You have ${class3ActiveAssignments} active assignments</a>
      </class3>
      <h2>${class4}</h2>
      <class4>
        <a>Your grade is ${grade4}</a>
        <a>You have ${class4ActiveAssignments} active assignments</a>
      </class4>
    </body>
  </html>`);
  }