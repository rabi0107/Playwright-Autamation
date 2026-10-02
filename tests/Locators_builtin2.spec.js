import {test, expect} from '@playwright/test';

test('Built in locators -Practice demo', async({page})=>
{
    //open sause demo website
    await page.goto('https://practice.expandtesting.com/login')

    //getBylabel -username

    await page.getByLabel('username').fill('practice')

    // get by label -password

    await page.getByLabel('password').fill('SuperSecretPassword!')

    //getByRole-Submit
    await page.getByRole('button',{name:'Login'}).click()

    //getByText -verify
    expect(page.getByText)

    await expect(page.getByText('Secure Area page for Automation Testing Practice')).toBeVisible()

    //getByRole -homelink
    await page.getByRole('link',{name:'Home'}).click()
    
})