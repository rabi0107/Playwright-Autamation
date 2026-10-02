import {test, expect} from '@playwright/test';
test('checkbox button test', async({page})=>
    {

        await page.goto("https://testautomationcentral.com/demo/checkboxes.html", { waitUntil: 'domcontentloaded' })
        console.log("page is loaded successfully")
        const checkbox1 = page.locator("(//input[@type='checkbox'])[1]")
        await checkbox1.check()
        console.log("checkbox is checked")
        await expect(checkbox1).toBeChecked()
        await page.locator("(//input[@type='checkbox'])[2]").check()
        console.log("checkbox2 is checked")
        await expect(page.locator("(//input[@type='checkbox'])[2]")).toBeChecked()
        page.locator("(//input[@type='checkbox'])[3]").check()
        console.log("checkbox3 is checked")
        await expect(page.locator("(//input[@type='checkbox'])[3]")).toBeChecked()

        const uncheck1 = await page.locator("(//input[@type='checkbox'])[1]")
        await uncheck1.uncheck()
        console.log("checkbox1 is unchecked")
        await expect(uncheck1).not.toBeChecked()

        
           await page.waitForTimeout(5000)
           

})