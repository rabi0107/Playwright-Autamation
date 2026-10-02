import{test,expect} from '@playwright/test';
test('fixutes',async({browser})=>{

   const context=await browser.newContext({baseURL:"https://www.google.com/"});
   const page=await context.newPage();
   await page.goto("/search?q=test")
   await page.waitForTimeout(5000);
   console.log("search page")


})