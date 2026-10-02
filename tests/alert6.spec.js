import{test,expect} from '@playwright/test'

test('alert',async({page})=>{

    await page.goto("https://testpages.eviltester.com/pages/basics/alerts-javascript/");

    page.once('dialog',async dialog=>{

        expect(dialog.type()).toBe('alert');
        expect(dialog.message()).toContain("I am an alert box!")

        await dialog.accept();
    })

    await page.getByText("Show confirm box").click()

    //await expect(page.getByText("You triggered and handled the alert dialog")).toBeVisible();

    await page.waitForTimeout(6000);

})