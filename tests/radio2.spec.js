import {test, expect} from '@playwright/test';
test('radio button test', async({page})=>{

    await page.goto("https://qaautomationlabs.com/testing/radio-button.php");
    await page.locator("//input[@data-testid='radio-gender-male']").click();
    await page.waitForTimeout(5000);

    console.log("click successfully")
    await page.getByLabel("Show Selected Gender").click();
    console.log("label")
    await page.waitForTimeout(5000);


})
    