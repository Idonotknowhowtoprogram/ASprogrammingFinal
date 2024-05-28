// Name: mysautility

import "@johnlindquist/kit"
import { Value } from "@johnlindquist/kit/core/enum";
const puppeteer = await npm('puppeteer');

const data = JSON.parse(await readFile("scripts/utilConfig.json", 'utf8'));
const password = data.password;
const email = data.email;
const mode = await arg("select mode", ["assignment"]);
const browser = await puppeteer.launch({
  headless: false,
  defaultViewport: false
});
const page = await browser.newPage();

async function clickNextLogin(currentPage) {
  await currentPage.waitForSelector('.VfPpkd-LgbsSe.VfPpkd-LgbsSe-OWXEXe-k8QpJ.VfPpkd-LgbsSe-OWXEXe-dgl2Hf.nCP5yc.AjY5Oe.DuMIQc.LQeN7.BqKGqe.Jskylb.TrZEUc.lw1w4b', {
    visible: true,
    clickable: true
  });
  await currentPage.evaluate(() => { (<HTMLElement>document.querySelector('.VfPpkd-LgbsSe.VfPpkd-LgbsSe-OWXEXe-k8QpJ.VfPpkd-LgbsSe-OWXEXe-dgl2Hf.nCP5yc.AjY5Oe.DuMIQc.LQeN7.BqKGqe.Jskylb.TrZEUc.lw1w4b')).click() });
}

//Web Scraping
var numOfCourses = 0;
var classes:{grade:string, href:string, name:string, activeAssignments:string}[] = []

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
        let g = document.querySelector(`#coursesContainer > div:nth-child(${i}) > div.col-md-2.standard-padding-needed > h3`).innerHTML;
        let n = document.querySelector(`#coursesContainer > div:nth-child(${i}) > div:nth-child(1) > a > h3`).innerHTML;
        let aA = document.querySelector(`#coursesContainer > div:nth-child(${i}) > div:nth-child(3) > table > tbody > tr:nth-child(3) > td:nth-child(1) > span`).innerHTML;
        newThings.push({name: n,  grade: g, activeAssignments: aA});
      } catch {
      }
    }
    return newThings;
  })
  console.log(things)
  return things;
}

//Login
(async () => {
await page.goto('https://sonomaacademy.myschoolapp.com/app#login');
await page.waitForSelector('.form-control', {
    visible: true,
  });
await page.type('.form-control', email);
await page.click('.btn-lg');
await page.waitForNetworkIdle();
clickNextLogin(page);
setTimeout(() => {
    page.type('.whsOnd.zHQkBf', password)
    setTimeout(() => {
        clickNextLogin(page)
    }, 3000)
}, 6000);

//Web Scraping function calls and output
if (mode == "assignment") {
  var classInfo = await assignmentModeScrape();
  let finalOut = ``;
  for (let i = 0; i < classInfo.length; i++) {
    finalOut += `<h2>${classInfo[i].name}</h2>
    <class1>
      <a>Your grade is ${classInfo[i].grade}</a>
      <a>You have ${classInfo[i].activeAssignments} active assignments</a>
    </class1>`
  }
  await div(finalOut);
  await browser.close();
}
})();