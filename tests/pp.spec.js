import{test,expect} from '@playwright/test';

test('locator test',async({browser})=>{

    const context = await browser.newContext({baseURL:"https://demo.guru99.com"});
    const page = await context.newPage();
    await page.goto("/selenium/newtours/login.php")

})

test('locator test2',async({page})=>{

    await page.goto("https://demo.guru99.com/selenium/newtours/login.php")
})