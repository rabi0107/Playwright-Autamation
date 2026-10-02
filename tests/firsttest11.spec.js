const{test,expect} =require('@playwright/test')

test('open the google page',async({page})=>
{
  
    await page.goto("https://www.google.com")

    const pagetittle=await page.title()

    console.log(pagetittle)
    console.log("page tittle is :",pagetittle)
    const pagurl=page.url()
        console.log("url of page :",pagurl)



}
)