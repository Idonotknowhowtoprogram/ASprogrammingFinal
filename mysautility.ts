// Name: mysautility

import "@johnlindquist/kit"
import { Value } from "@johnlindquist/kit/core/enum";

//const password = await arg("input your password");
const password = "password"
const mode = await arg("select mode", ["assignment", "grade", "general"]);
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
  await currentPage.evaluate(() => { (<HTMLElement>document.querySelector('.VfPpkd-LgbsSe.VfPpkd-LgbsSe-OWXEXe-k8QpJ.VfPpkd-LgbsSe-OWXEXe-dgl2Hf.nCP5yc.AjY5Oe.DuMIQc.LQeN7.BqKGqe.Jskylb.TrZEUc.lw1w4b')).click() });
}

//Web Scraping
let numOfCourses = 0;
let classes:{grade:string, href:string, name:string, activeAssignments:string}[] = []

async function assignmentModeScrape() {
  await page.waitForSelector("#showHideGrade > div > label:nth-child(2) > span", {
    visible: true,
    clickable: true
  })
  await page.click("#showHideGrade > div > label:nth-child(2) > span");

  var courseElements:HTMLCollection[] = [];
  const divChildren = await page.evaluate(() => {
    const container = document.getElementById('coursesContainer');
    return Array.from(container ? container.children : []);
  });

  console.log("after disaster");
  console.log(divChildren);
  let thing1 = "not triggered";
  await new Promise((resolve, reject) => {
    try {
      for (let i = 0; i < divChildren.length; i++) {
        courseElements.push(divChildren[i]!.children);
        thing1 += " triggered :) ";
      }
      resolve("It is done. -_-");
    } catch (error) {
      reject(error);
    }
  });
  console.log(thing1);
  /*
  numOfCourses = courseElements.length;

  for (let i = 0; i < numOfCourses; i++) {
    var element = courseElements[i][0];
    var classObj = {
      grade: "error",
      href: "error",
      name: "error",
      activeAssignments: "error"
    };
    var gradeDiv = element.children[3];
    var gradeNode = gradeDiv!.firstChild!.textContent!;
    classObj.grade = gradeNode;
    var linkNode = element.children[0];
    if (linkNode.nodeName === 'A') {
        classObj.href = linkNode.getAttribute('href')!;
    }
    var h3Node = linkNode.firstChild!;
    if (h3Node.nodeName === 'H3') {
      classObj.name = h3Node.textContent!;
    }
    classes.push(classObj);
}
*/
}

//Login
(async () => {
await page.goto('https://sonomaacademy.myschoolapp.com/app#login');
await page.waitForSelector('.form-control', {
    visible: true,
  });
await page.type('.form-control', 'first.last@sonomaacademy.org');
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
  assignmentModeScrape();
  let htmlString = `
  <body>
`;
/*
for (let i = 0; i < numOfCourses; i++) {
  htmlString += `
    <h2>${classes[i].name}</h2>
    <div>
      <a>Your grade is ${classes[i].grade}</a>
      <a>You have ${classes[i].activeAssignments} active assignments</a>
    </div>
  `;
}
htmlString += `
  </body>
</html>
`;
  //await div(htmlString);
 */
}
})();