//const{test,expect}=require('@playwright/test'); old method
import {test, expect} from '@playwright/test';
test('Locators',async({page})=>{

await page.goto('https://www.saucedemo.com/')

await page.locator('id=user-name').fill('standard_user')
await page.fill('#user-name','standard_user')
await page.locator('#password').fill('secret_sauce')
await page.locator("//input[@id='login-button']").click()

//verify successful login
//veirfy url
await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
//veirfy text
await expect(page.locator('.title')).toHaveText('Products');

//veirfy webelment visibilty
const productElement =await page.locator('.title')
await expect(productElement).toBeVisible()

////// first approach
//find the list of product
//const productnames=await page.$$('.inventory_item_name')
//count the product nad print
//console.log('total no.of product :',productnames.length)
/*
for(const product of productnames)
{
    const name=await product.textContent()
    console.log(name)
}
*/
////using locators second approach
//locate all product names
  const productName=await page.locator('.inventory_item_name')
  //get total count
  const count =await productName.count()
  console.log('Total products :', count)
  //print each product name

  for(let i=0;i<count;i++)
  {
       const name =await productName.nth(i).textContent();
       console.log(name)

  }




})
