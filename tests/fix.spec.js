import{test,expect} from '@playwright/test';
test('fixutes',async({browser})=>
    {

  const context =await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://www.google.com/")


})