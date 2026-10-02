import{test,expect} from '@playwright/test'
test.skip('built',async({page})=>{
await page.goto("https://demo.nopcommerce.com/",{waitUntil:"domcontentloaded"});
await page.waitForTimeout(5000);
const logo =page.getByAltText("nopCommerce demo store")
//await expect(logo).toBeVisible();
console.log("log visbility verified")

await expect(page.getByText("Welcome to our store")).toBeVisible();
await page.close();
})

test.skip('bulit2',async({page})=>{

    await page.goto("https://login.salesforce.com/")
    await page.waitForTimeout(500)
    await expect(page.getByAltText("Salesforce login")).toBeVisible();
    await page.getByText("Use Custom Domain").click();
    //await expect(page.getByText("Use Custom Domain")).toBeVisible();

});

test.skip('built4',async({page})=>{

    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");
    //expect(page.getByRole("heading",{name:"Register Account"})).toBeVisible();

    //await page.getByRole("link",{name:"login page"}).click();
    //await page.getByRole("button",{name:"continue"}).click();
    //await page.getByRole("checkbox",{name :"Privacy Policy"}).click();
    //await page.getByRole("radio",{name:"Yes"}).click();
    //await page.waitForTimeout(5000);

})

test.skip('built6',async({page})=>{

    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=57");
    await expect(page.getByLabel("Show:")).toBeVisible();
    await page.waitForTimeout(5000);

})
test('placeholder',async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    await page.getByPlaceholder("Username").fill("subhmam");
    await page.waitForTimeout(6000);

})

