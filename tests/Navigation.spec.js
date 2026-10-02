import {test, expect} from  '@playwright/test'
test('Navigation check',async({page})=>{


    await page.goto("https://www.saucedemo.com/")
     await page.waitForTimeout(5000)
    await page.reload()
    await page.waitForTimeout(5000)
    console.log("page is reloaded successfully")

    page.goBack()
    await page.waitForTimeout(5000)
    console.log("page is navigated back successfully")

    await page.goForward()
    await page.waitForTimeout(5000)
    console.log("page is navigated forward successfully")

    await page.waitForURL('https://www.saucedemo.com/')

    await page.waitForTimeout(5000)
    console.log("page is navigated to the url successfully")


})