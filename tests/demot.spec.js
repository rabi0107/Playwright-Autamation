const{test,expect}=require('@playwright/test')
test('to check tittle',async({page})=>{

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
const ptittle=await page.title()
const pageurl=page.url()
console.log("pageurl is",pageurl)
await expect(page).toHaveTitle(/OrangeHRM/);

})
