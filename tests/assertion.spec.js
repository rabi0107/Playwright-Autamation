import{test,expect} from '@playwright/test'
test('assertion val',async({page})=>{

 await page.goto("https://www.saucedemo.com/")
 // page level verification
 // 1-to veify tittle

 await expect(page).toHaveTitle('Swag Labs')
 console.log("Tittle is verified successfully")

 await expect(page).toHaveURL('https://www.saucedemo.com')

 console.log("URL is verified successfully")

// Element state assertion

// visibility assertion
const usernameField=page.locator('#user-name')
const passwordField=page.locator('#password')
const loginButton=page.locator('#login-button')

await expect(usernameField).toBeVisible()
console.log("username field is visible")
await expect(passwordField).toBeVisible()
console.log("password field is visible")
await expect(loginButton).toBeVisible()
console.log("login button is visible")

// to verify element is enabled or not
expect(usernameField).toBeEnabled()
console.log("username field is enabled")
expect(passwordField).toBeEnabled()
console.log("password field is enabled")
expect(loginButton).toBeEnabled()
console.log("login button is enabled")

// to Verify editable or not

expect(usernameField).toBeEditable()
console.log("username field is editable")
expect(passwordField).toBeEditable()
console.log("password field is editable")

// taex and value assertion
await usernameField.fill("standard_user")
await expect(usernameField).toHaveValue("standard_user")

await passwordField.fill("secret_sauce")
await expect(passwordField).toHaveValue("secret_sauce")

await loginButton.click()
console.log("login button is clicked")

// page and text assertion after login
// user navigated to inventory page after login

await expect(page).toHaveURL(/inventory.html/)
console.log("user navigated to inventory page after login")

// verify product pasage heading
const productHeading=page.locator('.title')
await expect(productHeading).toHaveText('Products')
console.log("product heading is verified successfully")
await expect(productHeading).toContainText('Prod')
console.log("product heading is verified successfully with contain text assertion")// partial text verify





}
)