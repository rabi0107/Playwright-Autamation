const{test,expect}=require('@playwright/test'); //importing two thing, test function to create test and expect for assertion
test('open chrome page',async({page})=>
{
   // test code appears here

   await page.goto("https://www.google.com/")
   const pagetittle=await page.title();
   console.log("pagetiitle is :" + pagetittle);
   const pageurl=page.url()
   console.log("page url is :" + pageurl);
   await expect(page).toHaveTitle(/Google/);

}
)