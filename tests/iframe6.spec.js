import {test,expect} from '@playwright/test';

test('iframe',async({page})=>{

   await page.goto("https://testing.qaautomationlabs.com/iframe.php");
   const allFrames=page.frames();
   console.log("Number of frames:", allFrames.length);
  //Approach 1: using url or name of frame
   /*const frame1=await page.frame('iframe1');
   await frame1.locator("//button[normalize-space()='CLick Me']").click();
   await page.waitForTimeout(5000);

   const frame2=await page.frame({url:"https://testing.qaautomationlabs.com/iframe2.php"});
   await frame2.locator("button[title='Click me in iframe 2']").click();*/
   
   // approach 2: using frame locator

   /*const frameloc1= await page.frameLocator("iframe[name='iframe1']");
   await frameloc1.locator("//button[normalize-space()='CLick Me']").click();
   await page.waitForTimeout(5000)*/
   const frameloc2= await page.frameLocator("iframe[src='iframe2.php']");
   await frameloc2.locator("button[title='Click me in iframe 2']").click();
   
   await page.waitForTimeout(5000);
})
