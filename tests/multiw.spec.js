import{test,expect} from '@playwright/test';

test('multiwindow',async({page})=>{


    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await expect(page).toHaveTitle("OrangeHRM")

   const [childpage1] = await Promise.all([
  page.context().waitForEvent('page'),
  page.getByText('Forgot your password?').click()
]);

    await childpage1.waitForLoadState()
    console.log("child win tittle", await childpage.title())

    await page.bringToFront();
    
    




})