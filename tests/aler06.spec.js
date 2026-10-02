import{test,expect} from '@playwright/test'

test('promt alert',async({page})=>{

    await page.goto("https://testpages.eviltester.com/pages/basics/alerts-javascript/");

    page.once('dialog', async dialog=>{

        expect(dialog.defaultValue('change me'))
        await dialog.accept('Jai Ma Ambe')
        
        
    })

     await page.getByText("Show prompt box").click();
     await expect(page.locator('#promptreturn')).toHaveText('Jai Ma Ambe');
     await page.waitForTimeout(6000);
     await page.close();
})