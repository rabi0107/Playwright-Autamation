import{test,expect} from '@playwright/test';
test('demo66',async({page})=>{

await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register")

/*await page.getByRole("heading",{name:"Register Account"}).toBeVisible(); //header
//await heading.toBeVisible();
console.log("Heading is visible on the page")
await page.waitForTimeout(5000);*/

/*await page.getByRole("link",{name: "Forgotten Password"}).click(); // link
console.log("Forgotten Password link is visible on the page")
await page.waitForTimeout(5000);
console.log("GetBy Role method is working fine")*/

/*const rd=await page.getByRole("radio",{name:"Yes"}); //radio button
await rd.check();
console.log("Radio button is checked")
await page.waitForTimeout(5000);*/

/*page.getByRole("button",{name:"Continue"}).click(); //button
console.log("Continue button is clicked")
await page.waitForTimeout(5000);*/

await page.getByRole("checkbox",{name:"privacy policy"}).click(); //checkbox
console.log("Checkbox is clicked")
await page.waitForTimeout(5000);




})
