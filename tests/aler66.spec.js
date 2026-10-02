import{test,expect} from '@playwright/test'

test('confirmation alert',async({page})=>{

    await page.goto("https://testpages.eviltester.com/pages/basics/alerts-javascript/");
    
    page.once('dialog', async dialog=>{

        expect(dialog.type()).toBe('confirm')
        expect(dialog.message()).toContain("I am a confirm alert")

        await dialog.accept();

        //await dialog.dismiss();


    })

     await page.getByText("Show confirm box").click();
     await expect(page.getByText("You clicked OK, confirm returned true.")).toBeVisible();
     await page.close();
})