import {test, expect} from '@playwright/test';

test('Built in locators saucedemo', async({page})=>
{
    //open sause demo website
    page.goto("https://www.saucedemo.com/")

    // enter user name
   await page.getByPlaceholder('Username').fill('standard_user')

   //enter password
   await page.getByPlaceholder('Password').fill('secret_sauce')

   //click on submit

   await page.getByRole('button',{name:'Login'}).click()

  // assertion

  await expect(page).toHaveURL(/inventory.html/)
  //getbyText -verify product visisbility on inventory page
   
  await expect(page.getByText('Products')).toBeVisible()

  //getByRole()

  await page.getByRole('button',{name:'Add to cart'}).first().click()

  // getByAltText -click on sauce labe backpack product to view desc

  await page.getByAltText('Sauce Labs Backpack').click()



})
