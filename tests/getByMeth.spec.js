import{test,expect} from '@playwright/test';
test('getbytesxt',async({page})=>{

await page.goto("https://login.salesforce.com/")
  /*await page.getByLabel("Username").fill("12345"); //label
  console.log("Username is entered")
  await page.waitForTimeout(5000);*/

  page.getByLabel("Remember me").check(); //label
  console.log("Remember me checkbox is checked")
  await page.waitForTimeout(5000);


})