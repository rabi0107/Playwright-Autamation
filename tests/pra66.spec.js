import{test,expect} from '@playwright/test'
test.skip('radio',async({page})=>{
    await page.goto("https://demo.guru99.com/selenium/newtours/reservation.php");
    await page.locator("//input[@value='oneway']").click();
    await page.waitForTimeout(5000);
})

test.skip('drop',async({page})=>{
    await  page.goto("https://practice.expandtesting.com/dropdown#google_vignette")
    //const dp=await page.locator('#dropdown');
    //const dp=await page.getByText("Simple dropdown");
    //await dp.selectOption({value:'2'});

    const dp1=await page.locator('#country');
    await dp1.selectOption({label:'Chad'})
    await page.waitForTimeout(5000);

})

test.skip('drop2',async({page})=>{

    await page.goto("https://demo.guru99.com/selenium/newtours/reservation.php")
    const dp6=page.locator("//select[@name='fromPort']")
    await dp6.selectOption({label:'Portland'});
    await page.waitForTimeout(5000);

})

test('checkbox',async({page})=>{
    await page.goto("https://practice.expandtesting.com/checkboxes");

    const ch=await page.locator("#checkbox2");
    await ch.click();
    await page.waitForTimeout(5000);
})