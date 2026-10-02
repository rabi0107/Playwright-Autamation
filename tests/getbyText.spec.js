import{test,expect} from '@playwright/test';
test('getbytesxt',async({page})=>{

await page.goto("https://login.salesforce.com/")
//await page.getByText("Forgot Your Password?").click();
//console.log("GetBy Text method is working fine")

await page.getByText("Use Custom Domain").click();
console.log("GetBy Text method is working fine")
await page.waitForTimeout(5000);





})