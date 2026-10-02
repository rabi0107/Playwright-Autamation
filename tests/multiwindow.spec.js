import{test,expect} from '@playwright/test';
import console from 'node:console';
test('multiwindow',async({page})=>{

// step1-open the parent page

await page.goto("https://the-internet.herokuapp.com/windows")

//step2 verify the we are on correct page

await expect(page.locator('h3')).toHaveText('Opening a new window')
console.log("parent page tittle",await page.title())
// capture child tab

const [childpage]= await Promise.all([page.context().waitForEvent('page'),page.locator('text=Click Here').click()])

// step3 wait util child page is completely loaded

await childpage.waitForLoadState()

//step 4- work on child page
console.log("child win tittle", await childpage.title())

// step switch back to parent tab
await page.waitForTimeout(5000)
page.bringToFront();
await page.waitForTimeout(5000)

console.log("back to parent page")
childpage.close();




})