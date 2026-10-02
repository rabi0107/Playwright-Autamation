import{test,expect} from '@playwright/test';

test('Locators',async({page})=>{

     await page.goto('https://www.saucedemo.com/')

     // locate id weblement

     await page.locator('id=user-name').fill('standard_user')

     //ocate passowrd and fill password

     await page.locator('#password').fill('secret_sauce')

     //locate login button and perforn click action

     //await page.locator("//input[@id='login-button']").click()

    await  page.click("//input[@id='login-button']")
     console.log("logi ni successfully")

     // verify successfull log in

     await expect(page).toHaveURL(/inventory.html/)//verify url
     //find list of all peoduct

     const productname =await page.$$('.inventory_item_name')

     //count product and print

     console.log('Total onumber of product:',productname.length)

     //product name for each element

     for(const product of productname)
     {
       const name = await product.textContent()// each element is an elementhandle
       console.log(name)
     }



}
)