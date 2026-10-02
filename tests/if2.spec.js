import{test,expect} from '@playwright/test';

test('frame2',async({page})=>{

    await page.goto("https://www.w3schools.com/html/html_iframe.asp")
    const f2=await page.frame("https://www.w3schools.com/html/html_iframe.asp") //bY frame link
    await f2.getByPlaceholder("Search...").click();
    await page.waitForTimeout(5000)
    console.log("Search box filled successfully");

})
