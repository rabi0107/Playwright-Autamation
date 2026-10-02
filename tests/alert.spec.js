import{test, expect} from '@playwright/test'

test("simplealerthandlin",async({page})=>
{
   await  page.goto('https://testpages.eviltester.com/pages/basics/alerts-javascript/')

   page.once('dialog',async({dialog})=>{

    //check what types of dialog it is alert(alert/confirm/promt)
    expect(dialog.type()).toBe('alert');

    await  dialog.accept()

   })

   await page.getByText('Show alert box').click()// if alert comes click on click
})