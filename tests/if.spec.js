import{test,expect} from '@playwright/test';

test('frame1',async({page})=>{

    await page.goto("https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_input_form")

    /*await page.frame("iframeResult")// frame switch to iframe
    await page.locator('id=fname');// locate id 

    await page.waitForTimeout(5000)
    console.log("username filled successfully");*/
    const f1=await page.frame("iframeResult") // By frame name
    await f1.locator("//input[@name='lname']").fill("kumar")
     
    console.log("lastname filled successfully");

})


