import{test,expect} from '@playwright/test'
test.skip('mouse hover', async({page})=>{

await page.goto('https://the-internet.herokuapp.com/hovers')

await page.locator('.figure').first().hover() //move mouse over the element

//verify name:user1

await expect(page.locator('text=name: user1')).toBeVisible()

//pause execution for 3 second

await page.waitForTimeout(3000)


})

test('Right click automate and alert handlin',async({page})=>{

 await page.goto('https://the-internet.herokuapp.com/context_menu')

 //alert hander

  await page.on('dialog',async(dialog)=>{
 
 //print dialog message

      console.log(dialog.message())

      // verify dialog meassage

      await expect(dialog.message()).toBe("You selected a context menu")

      //accept dialog
      await dialog.accept();

  })

  //right  click on box

  await page.locator('#hot-spot').click({button:'right'});

  await page.waitForTimeout(3000)

  

})