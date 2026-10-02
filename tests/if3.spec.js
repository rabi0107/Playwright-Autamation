import{test,expect} from '@playwright/test';

test('frame3',async({page})=>{

    await page.goto("https://docs.oracle.com/javase/8/docs/api/")
    const allframes=await page.frames();
    console.log("number of frame :", allframes.length)
    const ff=await page.frameLocator("//frame[@name='packageFrame']") //by frame locator
    await ff.getByText("AbstractAction").click();
    await page.waitForTimeout(5000);
})