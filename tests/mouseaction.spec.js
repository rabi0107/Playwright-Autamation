import {test, expect} from '@playwright/test'

test('action',async({page})=>
{
    await page.goto("https://the-internet.herokuapp.com/hovers")
    // hover(): move mouse over element
    await page.locator('.figure').first().hover()
        
       await page.waitForTimeout(4000)


    page.close()

})

test('rightclick automate and alert handling',async({page})=>
{
    await page.goto("https://the-internet.herokuapp.com/context_menu")

    page.on('dialog',async(dialog)=>{

      console.log(dialog.message())
      expect(dialog.message()).toBe("you selected contaxt message")
      await dialog.accept()

      //right click on box

     await  page.locator('#hot-spot').click({button:'right'})

    })

})

test('drag and drop',async({page})=>{

    await page.goto('https://testpages.eviltester.com/pages/interaction/drag-drop/')
    await page.locator('#draggable1').dragTo(page.locator('#draggable2'))

    await page.waitForTimeout(3000)
})


test('rightclick',async({page})=>{

    await page.goto('https://testpages.eviltester.com/pages/interaction/javascript-events/')
    await page.locator('#oncontextmenu').dblclick()

    await page.waitForTimeout(3000)
    

})

