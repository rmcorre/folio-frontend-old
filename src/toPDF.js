const puppeteer = require("puppeteer");

(async () => {

  //Launch a new browser session
  const browser = await puppeteer.launch();

  //Opens a new page
  const page = await browser.newPage();

  //Go to our page we serve on localhost;3000
  await page.goto("http://localhost:3000/resume");

  //Store the pdf in a file named resume.pdf
  await page.pdf({path: "resume.pdf", format: "letter"});

  await browser.close();
})();