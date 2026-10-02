import{test,expect} from "@playwright/test"

test('Inuptdemo',async({page})=>{


    await page.goto("https://demo.guru99.com/test/newtours/index.php")//open url
    //locate firstname
     const firstname= await page.locator("//input[@name='userName']").fill('pass13')
     
     const pass =await page.locator("//input[@name='password']").fill('pass123')
     await page.locator("//input[@name='submit']").click()

     await page.locator("//a[normalize-space()='Flights']").click()
     //page.waitForTimeout(5000)
     //locate radion button
     const tworadiobutton=page.locator("//input[@value='oneway']")

     await  tworadiobutton.check()

     await page.locator("//input[@value='Business']").check()


     
     





})
