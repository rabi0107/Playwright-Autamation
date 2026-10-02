import{test,expect} from '@playwright/test';

test('Locators',async({page})=>{

     await page.goto('https://www.saucedemo.com/')

     // screenshot with full page
    await page.screenshot({path:'tests/screenshots/'+Date.now()+'FullPagess.png',fullPage:true})

     // locate id weblement

    await page.locator('id=user-name').fill('standard_user')

    //await  locat2.screenshot({path:'tests/screenshots/'+Date.now()+'locatess.png'})

     //locate username and fill username

     //ocate passowrd and fill password

     await page.locator('#password').fill('secret_sauce')
     // Screenshot with time stamp
     await page.screenshot({path:'tests/screenshots/'+Date.now()+'password.png'})

     //locate login button and perforn click action

     //await page.locator("//input[@id='login-button']").click()

    await  page.click("//input[@id='login-button']")
     console.log("logi ni successfully")
      // screeshot 
     await page.screenshot({path:'tests/screenshots/'+'Homepage.png'})

     // verify successfull log in

     await expect(page).toHaveURL(/inventory.html/)//verify url
     await expect(page.locator('.title')).toHaveText('Products')//verify text

     const productelement=page.locator('.title')

     await expect(productelement).toBeVisible()//verify product element visibility



}
)