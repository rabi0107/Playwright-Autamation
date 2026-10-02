import{test,expect} from '@playwright/test'
test.skip('maction',async({page})=>{

    await page.goto("https://testpages.eviltester.com/pages/interaction/javascript-events/");

    await page.getByRole("button",{name :"OnDoubleClick"}).dblclick();
    await page.waitForTimeout(5000);
})

test.skip('mc',async({page})=>{

    await page.goto("https://www.stepcampus.in/playground");

    await page.getByRole("button",{name:"Right Click"}).click({button:'right'});
    await page.waitForTimeout(5000);
})

test.skip('draganddrop',async({page})=>{
     
    await page.goto("https://testpages.eviltester.com/pages/interaction/drag-drop/");
    await page.locator('#draggable1').dragTo(page.locator('#droppable1'));
    await page.waitForTimeout(5000);
})

test('hover',async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/hovers");
    await page.locator('.figure').first().hover();
    await page.waitForTimeout(5000);
})

