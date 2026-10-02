import{test,expect} from '@playwright/test';

test('buiit in locator tickermark',async ({page})=>{
//open application
// waituntil:'domcontenet loaded'
//open url
    await page.goto('https://www.techlistic.com/p/selenium-practice-form.html',{waitUntil:"domcontentloaded"})

    const rftcheck=page.locator('#tool-0')

    //await rftcheck.uncheckcheck()// ticket UFT

   
    const protactor=page.locator('#tool-1')
    

    const selweb=page.locator('#tool-2')

    /* await expect(rftcheck).toBeChecked() //verify uft is checked

     await expect.soft(protactor).toBeChecked()
     await expect(selweb).not.toBeChecked()*/

     //for loop to ticket all checkbox

     const checkboxes =[rftcheck,protactor,selweb]

     for(const checkbox of checkboxes)
     {
        await checkbox.check()
       await  expect(checkbox).toBeChecked();
     }
     await page.waitForTimeout(3000);






})
