const puppeteer = require("puppeteer");

(async () => {

  //Launch a new browser session
  const browser = await puppeteer.launch();

  //Opens a new page
  const page = await browser.newPage();

  //Go to our page we serve on localhost;3000
  await page.goto("http://localhost:3000/resume", {waitUntil: 'networkidle0', timeout: 0});

  await page.emulateMediaType('screen');

  //Store the pdf in a file named resume.pdf
  await page.pdf({path: "resume2.pdf", printBackground: true, width: '1366px', height: '1296px'});

  await browser.close();
})();

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto('http://localhost:3000/resume');
//   await page.screenshot({path: 'screenshot2.png', fullPage: true});
//   await browser.close();
// })();