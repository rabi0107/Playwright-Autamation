import{test, expect,Locator} from '@playwright/test'

test('builtin', async({page})=>{

    await page.goto("https://www.saucedemo.com/")
    await page.getByPlaceholder("Username").fill("standard_user")
    await page.getByPlaceholder("Password").fill("secret_sauce")
    await page.getByRole('button',{name:'Login'}).click();// get by role
    console.log("log in succesfully")
    await  expect(page).toHaveURL(/inventory.html/)
    console.log("page open successfully")
    await expect(page.getByText('Swag Labs')).toBeVisible()// get by test
    console.log("visibility verified successfully")
    await page.getByRole('button',{name:'Add to cart'}).first().click() // get By Role
    console.log("button role pass")
    await page.getByAltText('Sauce Labs Backpack').click()
    await page.waitForTimeout(5000)
    console.log("alttext successfull") // getByAltText
    











})