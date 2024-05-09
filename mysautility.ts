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
await page.type('.form-control', 'michael.taylor@sonomaacademy.org');
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
})();
