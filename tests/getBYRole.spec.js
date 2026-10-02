import{test,expect} from '@playwright/test';
test('getbyRole',async({page})=>{

    await page.goto("https://login.salesforce.com/")
   const  trylink=await  page.getByRole("link",{name:"Try for Free"});
   await trylink.click();
   console.log("GetBy Role method is working fine")
   await page.waitForTimeout(5000);

   


})