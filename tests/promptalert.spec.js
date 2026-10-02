import{test,expect} from '@playwright/test'

test("prompt alert",async({page})=>{
// step -url
await page.goto("https://testpages.eviltester.com/pages/basics/alerts-javascript/")
// step 2
// we must register the dialog handler before clicking the button
 page.once('dialog',async dialog=>{

    //check what type of dialog 
    expect(dialog.type()).toBe('prompt');
    //read the message shown inside
    expect(dialog.message()).toContain('I prompt you')
     // verify default text inside prompt input box
     expect(dialog.defaultValue()).toBe('change me')
     //enter value : Rabishkumar
     await dialog.accept('rabi')
    // click ok button on the ok
    //await dialog.accept()
    // to click cancel
    //await dialog.dismiss()

 })

 //step 3 -
  await page.getByText('Show prompt box').click()

  await expect(page.locator('#promptreturn')).toHaveText('rabi')

  await page.waitForTimeout(5000)

await page.close();


})