import {test, expect} from '@playwright/test';
test('radio button test', async({page})=>
    {

        await page.goto("https://demo.guru99.com/selenium/newtours/reservation.php", { waitUntil: 'domcontentloaded' })
        console.log("page is loaded successfully")

        const raio=page.locator("//input[@value='roundtrip']")
            await raio.check()
            console.log("radio button is clicked")
           await expect(raio).toBeChecked()
           console.log("radio button is checked")
           //check if radio is clicked 

           await expect(raio).toBeTruthy()
           await page.waitForTimeout(5000)

})