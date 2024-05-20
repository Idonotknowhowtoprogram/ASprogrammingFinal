// Name: MySAUtility

import "@johnlindquist/kit"
import { Value } from "@johnlindquist/kit/core/enum";

const puppeteer = await npm('puppeteer');
const browser = await puppeteer.launch({
  headless: false
});

async function clickNextLogin(currentPage) {
    await currentPage.waitForSelector('.VfPpkd-LgbsSe.VfPpkd-LgbsSe-OWXEXe-k8QpJ.VfPpkd-LgbsSe-OWXEXe-dgl2Hf.nCP5yc.AjY5Oe.DuMIQc.LQeN7.BqKGqe.Jskylb.TrZEUc.lw1w4b', {
        visible: true,
        clickable: true
    });
    await currentPage.evaluate(() => {console.log("button found")});
    await currentPage.evaluate(() => {(<HTMLElement> document.querySelector('.VfPpkd-LgbsSe.VfPpkd-LgbsSe-OWXEXe-k8QpJ.VfPpkd-LgbsSe-OWXEXe-dgl2Hf.nCP5yc.AjY5Oe.DuMIQc.LQeN7.BqKGqe.Jskylb.TrZEUc.lw1w4b')).click()});
    await currentPage.evaluate(() => {console.log("button clicked")});
}

//Login
(async () => {
var goodClose = false;
const page = await browser.newPage();
await page.goto('https://sonomaacademy.myschoolapp.com/app#login');
await page.waitForSelector('.form-control', {
    visible: true,
  });
await page.type('.form-control', 'firstname.lastname@sonomaacademy.org');
await page.click('.btn-lg');
await page.waitForNetworkIdle();
clickNextLogin(page);
setTimeout(() => {
    page.type('.whsOnd.zHQkBf', 'password')
    setTimeout(() => {
        clickNextLogin(page)
        page.screenshot({path: '/screenshot.png'})
    }, 3000)
}, 6000);
})();

//Web Scraping
async function assignmentModeScrape() {
    await page.click("#showHideGrade > div > label.btn.btn-default.btn-sm.bold.active > span");
    
    var courseElements = [];

    var divChildren = Array.from(document.getElementById('coursesContainer').children);
    for (let i = 0; i < divChildren.length; i++) {
        if (divChildren[i].tagName === 'DIV') {
            courseElements.push(Array.from(divChildren[i].children as ChildNode[]));
        }
    }

    var numOfCourses = courseElements.length;
    console.log(courseElements);
    var classes = [];

    for (let i = 0; i < numOfCourses; i++) {
        var classObj = {};
        var element = courseElements[i][0];
        var aElement = element.querySelector('a');
        if (aElement) {
            classObj.href = aElement.getAttribute('href');
            var courseName = aElement.querySelector('h3');
            if (courseName) {
                classObj.name = courseName.textContent;
            }
        }
        classes.push(classObj);
    }


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