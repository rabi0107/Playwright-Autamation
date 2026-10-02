import{test,expect} from '@playwright/test'

test("simple alert1",async({page})=>{
// step1 -url
await page.goto("https://testpages.eviltester.com/pages/basics/alerts-javascript/")
// step 2
// we must register the dialog handler before clicking the button
 page.once('dialog',async dialog=>{

    //check what type of dialog 
    expect(dialog.type()).toBe('alert');
    //read the message shown inside
    expect(dialog.message()).toContain('I am an alert box!')

    // click ok button on the ok
    await dialog.accept()

 })

 //step 3 -
  await page.getByText('Show alert box').click()

  await expect(page.getByText('You triggered and handled the alert dialog')).toBeVisible()

  await page.waitForTimeout(5000)

await page.close();


})