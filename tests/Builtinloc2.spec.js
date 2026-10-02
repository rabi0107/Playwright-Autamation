import{test, expect} from '@playwright/test'

test('builtin', async({page})=>{

    await page.goto("https://practice.expandtesting.com/login#google_vignette")
     
    await page.getByLabel('username').fill('practice')

    await page.getByLabel('password').fill('SuperSecretPassword!')

    await page.getByRole('button',{name:'Login'}).click()



}
)