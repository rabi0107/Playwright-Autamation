import{test,expect} from '@playwright/test';

test('buiit in locator tickermark',async ({page})=>{
//open application
// waituntil:'domcontenet loaded'
//open url
    await page.goto('https://practice.expandtesting.com/dropdown#google_vignette',{waitUntil:"domcontentloaded"})

    // By using label
    const countrydropdn=page.locator('#country')//locate dropdown
    await countrydropdn.selectOption({label:'India'})
    await page.waitForTimeout(5000)

    const sinpydropdown=page.locator('#dropdown')

    await sinpydropdown.selectOption({label:'Option 2'})
    await page.waitForTimeout(6000)

    // By value

    const dropin1=page.locator('#country')
    await dropin1.selectOption({value:'AL'})
     await page.waitForTimeout(6000)
     await page.close()

     

    




   







})
