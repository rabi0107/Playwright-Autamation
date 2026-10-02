const{test,expect}=require('@playwright/test')// importing two things, test function to create test and expect for assertion
test('Open Google page and check tittle',async({page})=>

    {
        //test code will go here
       await page.goto("https://www.google.com");
      const pageTittle= await page.title()
      console.log(pageTittle)
      console.log("page tittle  is :",pageTittle)

      const pageUrl= await page.url()
      console.log(pageUrl)
        await expect(page).toHaveTitle(/Google/);

        const paget2=await page.toHaveTitle()
        console.log(paget2)

        

    }

)



