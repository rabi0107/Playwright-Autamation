import{test,expect} from '@playwright/test'

test("confirm alert",async({page})=>{
// step -url
await page.goto("https://testpages.eviltester.com/pages/basics/alerts-javascript/")
// step 2
// we must register the dialog handler before clicking the button
 page.once('dialog',async dialog=>{

    //check what type of dialog 
    expect(dialog.type()).toBe('confirm');
    //read the message shown inside
    expect(dialog.message()).toContain('I am a confirm alert')

    // click ok button on the ok
    await dialog.accept()
    // to click cancel
    //await dialog.dismiss()

 })

 //step 3 -
  await page.getByText('Show confirm box').click()

  await expect(page.locator('#confirmreturn')).toHaveText('true')

  await page.waitForTimeout(5000)

await page.close();


})