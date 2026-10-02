import {test,expect} from '@playwright/test';

test('iframe',async({page})=>{

   await page.goto("https://ui.vision/demo/webtest/frames/");
   const allframe=page.frames();
   await page.waitForTimeout(5000);
   console.log("number of frame :",allframe.length)

   // approach 1: using url or name of frame
   //if name present const var=await page.frame('name');

   const frame1=await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"});
   /*await frame1.fill("#mytext",'frame1');
   page.waitForTimeout(5000);
   console.log("frame1 filled successfully");*/

   // approach 2: using frame locator

   await page.frameLocator("frame[src='frame_2.html']").locator("#mytext").fill("frame2");
   await page.waitForTimeout(5000);
   console.log("frame2 filled successfully");

})