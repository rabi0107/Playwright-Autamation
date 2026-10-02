import {test,expect} from '@playwright/test';

test('dropdown',async({page})=>{

page.goto('https://practice.expandtesting.com/dropdown#google_vignette',{waitUntil:"domcontentloaded"})

const opt= page.locator('#country')// By lable
await opt.selectOption({label:'Bhutan'})
await page.waitForTimeout(5000)
console.log("dropdown selected successfully")

const dropdown=page.locator('#dropdown')
await dropdown.selectOption({label:'Option 2'})
await page.waitForTimeout(5000)
console.log("dropdown selected successfully")

//by vlaue
const dropin1=page.locator('#country')
await dropin1.selectOption({value :'AS'})
await page.waitForTimeout(6000)
console.log("dropdown metod2")






})