import {test, expect} from '@playwright/test'
test('testcheck', async({page})=>{

    await page.goto("https://demo.guru99.com/selenium/newtours/",{waitUntil:'domcontentloaded'})

    const name =await page.locator("//input[@name='userName']")

    await expect(name).toBeVisible()
    console.log("username field is visible")

    await expect(name).toBeEnabled()
    console.log("username field is enabled")

    await expect(name).toBeEditable()
    console.log("username field is editable")

    await expect(name).toBeEmpty()
    console.log("username field is empty")
    await name.fill("pass123")
    console.log("username field is filled with value pass123")
    //await page.waitForTimeout(5000)

    await page.locator("//input[@name='password']").fill("pass123")
    console.log("password field is filled with value pass123")
    await page.locator("//input[@name='submit']").click()
    console.log("login button is clicked")
    




})