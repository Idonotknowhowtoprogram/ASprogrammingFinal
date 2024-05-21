// Name: mysautility

import "@johnlindquist/kit"
import { Value } from "@johnlindquist/kit/core/enum";

const password = await arg("input your password");
var mode = await arg("assignment", "grade", "general");
const puppeteer = await npm('puppeteer');
const browser = await puppeteer.launch({
  headless: false
});
const page = await browser.newPage();


async function clickNextLogin(currentPage) {
  await currentPage.waitForSelector('.VfPpkd-LgbsSe.VfPpkd-LgbsSe-OWXEXe-k8QpJ.VfPpkd-LgbsSe-OWXEXe-dgl2Hf.nCP5yc.AjY5Oe.DuMIQc.LQeN7.BqKGqe.Jskylb.TrZEUc.lw1w4b', {
    visible: true,
    clickable: true
  });
  await currentPage.evaluate(() => { console.log("button found") });
  await currentPage.evaluate(() => { (<HTMLElement>document.querySelector('.VfPpkd-LgbsSe.VfPpkd-LgbsSe-OWXEXe-k8QpJ.VfPpkd-LgbsSe-OWXEXe-dgl2Hf.nCP5yc.AjY5Oe.DuMIQc.LQeN7.BqKGqe.Jskylb.TrZEUc.lw1w4b')).click() });
  await currentPage.evaluate(() => { console.log("button clicked") });
}

//Login
(async () => {
<<<<<<< Updated upstream
await page.goto('https://sonomaacademy.myschoolapp.com/app#login');
await page.waitForSelector('.form-control', {
    visible: true,
  });
await page.type('.form-control', 'firstname.lastname@sonomaacademy.org');
await page.click('.btn-lg');
await page.waitForNetworkIdle();
clickNextLogin(page);
setTimeout(() => {
    page.type('.whsOnd.zHQkBf', password)
    setTimeout(() => {
        clickNextLogin(page)
    }, 3000)
}, 6000);

// Web Scraping Stuff
setTimeout(async () => {
  //Grades
  //var grade1 = await page.evaluate(() => {return document.querySelector("#coursesContainer > div:nth-child(1) > div.col-md-2.standard-padding-needed > h3").innerHTML});

  //var grade2 = await page.evaluate(() => {return document.querySelector("#coursesContainer > div:nth-child(2) > div.col-md-2.standard-padding-needed > h3").innerHTML});
  
  //var grade3 = await page.evaluate(() => {return document.querySelector("#coursesContainer > div:nth-child(3) > div.col-md-2.standard-padding-needed > h3").innerHTML});

  //var grade4 = await page.evaluate(() => {return document.querySelector("#coursesContainer > div:nth-child(4) > div.col-md-2.standard-padding-needed > h3").innerHTML});
  
  //Classes
  var class1 = await page.evaluate(() => {return document.querySelector("#coursesContainer > div:nth-child(1) > div:nth-child(1) > a > h3").innerHTML});
    
  var class2 = await page.evaluate(() => {return document.querySelector("#coursesContainer > div:nth-child(2) > div:nth-child(1) > a > h3").innerHTML});
    
  var class3 = await page.evaluate(() => {return document.querySelector("#coursesContainer > div:nth-child(3) > div:nth-child(1) > a > h3").innerHTML});
    
  //var class4 = await page.evaluate(() => {return document.querySelector("#coursesContainer > div:nth-child(4) > div:nth-child(1) > a > h3").innerHTML});

  await div(`
  <body>
    <h2>${class1},  ${class2}, ${class3}</h2>
    <h2></h2>
  </body>
</html>`);
  /*
  var class1ActiveAssignments = await page.evaluate(() => {return document.querySelector("#coursesContainer > div:nth-child(1) > div:nth-child(3) > table > tbody > tr:nth-child(3) > td:nth-child(1) > span").innerHTML});
    
  var class2ActiveAssignments = await page.evaluate(() => {return document.querySelector("#coursesContainer > div:nth-child(2) > div:nth-child(3) > table > tbody > tr:nth-child(3) > td:nth-child(1) > span").innerHTML});
    
  var class3ActiveAssignments = await page.evaluate(() => {return document.querySelector("#coursesContainer > div:nth-child(3) > div:nth-child(3) > table > tbody > tr:nth-child(3) > td:nth-child(1) > span").innerHTML});
    
  var class4ActiveAssignments = await page.evaluate(() => {return document.querySelector("#coursesContainer > div:nth-child(4) > div:nth-child(3) > table > tbody > tr:nth-child(3) > td:nth-child(1) > span").innerHTML});

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
      */
}, 20000)
})();
=======
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
      page.screenshot({ path: '/screenshot.png' })
    }, 3000)
  }, 6000);
})();

//Web Scraping
async function assignmentModeScrape() {
  await page.click("#showHideGrade > div > label.btn.btn-default.btn-sm.bold.active > span");

  var courseElements = [];

  var divChildren = Array.from(document.getElementById('coursesContainer').children);
  for (let i = 0; i < divChildren.length; i++) {
    courseElements.push(Array.from(divChildren[i].children as ChildNode[]));
  }

  var numOfCourses = courseElements.length;

  var classes = [];
  
  for (let i = 0; i < numOfCourses; i++) {
    var element = courseElements[i][0];
    var classObj = {};
    var gradeDiv = element.children[3]
    var gradeNode = gradeDiv.firstChild.textContent;
    classObj.grade = gradeNode;

    var linkNode = element.firstChild;

    if (linkNode.nodeName === 'A') {

        classObj.href = linkNode.getAttribute('href');
    }

    var h3Node = linkNode.firstChild;

    if (h3Node.nodeName === 'H3') {
      classObj.name = h3Node.textContent;
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
>>>>>>> Stashed changes
