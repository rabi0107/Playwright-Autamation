import{test,expect} from '@playwright/test';
test('To test some fun',async({page})=>
    {
        await page.goto("https://www.saucedemo.com/")
        await page.screenshot({path:'screenshot6/homepage.png'})

        await page.screenshot({path:'screenshot6/fulpage.png', fullPage:true})

        // visible scrrenshot

        await page.locator('id=user-name').screenshot({path:'screenshot6/username.png'}).fill('standard_user')
        
        await page.locator('#password').fill('secret_sauce')
        await page.click('id=login-button')
        console.log("login successfull ")
        //await page.locator("//input[@id='login-button']").click()
        //await browser.close();
        // verify succesful log in

        await expect(page).toHaveURL(/inventory.html/)
        console.log("url is correct")
        await expect(page.locator('.title')).toHaveText('Products')
        console.log("Tittle verified")
        const text=page.locator('.title').click();
       await  expect(text).toBeVisible()
       console.log("text is visible")
        




})

