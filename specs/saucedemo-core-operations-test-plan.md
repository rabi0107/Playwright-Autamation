# Sauce Demo Core User Operations Test Plan

## Application Overview

Functional test plan for the Sauce Labs Swag Labs e-commerce demo at https://www.saucedemo.com/. The observed application supports login with documented demo credentials, catalog browsing and sorting, product details, a shopping cart, required checkout information, order review and confirmation, and logout. Each scenario starts from a fresh app state and can be run independently.

## Test Scenarios

### 1. Core E-commerce Operations

**Seed:** `tests/seed.spec.ts`

#### 1.1. Authenticate with a valid account and reject a locked account

**File:** `tests/saucedemo/login.spec.ts`

**Steps:**
  1. Start with a fresh browser context at https://www.saucedemo.com/. Enter username standard_user and password secret_sauce, then select Login.
    - expect: The Products inventory page opens at /inventory.html.
    - expect: The catalog and cart control are visible.
  2. From a fresh app state, enter username locked_out_user and password secret_sauce, then select Login.
    - expect: Login is prevented and an error message is shown.
    - expect: The user remains on the login page and does not see the inventory.

#### 1.2. Browse, sort, and inspect catalog products

**File:** `tests/saucedemo/catalog.spec.ts`

**Steps:**
  1. Start from a fresh app state and log in as standard_user with password secret_sauce.
    - expect: The Products page shows six products, each with a name, description, price, and Add to cart control.
  2. Change Sort products to Price (low to high).
    - expect: The Sauce Labs Onesie priced at $7.99 appears first.
  3. Change Sort products to Name (Z to A), then open Sauce Labs Backpack details.
    - expect: Products reorder in descending name order.
    - expect: The detail page shows the selected product name, description, price ($29.99), Add to cart, and Back to products controls.
  4. Select Back to products.
    - expect: The Products catalog is displayed again.

#### 1.3. Add, review, remove, and retain cart items

**File:** `tests/saucedemo/cart.spec.ts`

**Steps:**
  1. Start from a fresh app state and log in as standard_user with password secret_sauce.
    - expect: The cart is initially empty.
  2. Add Sauce Labs Backpack and Sauce Labs Bike Light to the cart, then open the cart.
    - expect: The cart badge shows 2 items.
    - expect: The cart lists both products, each with quantity 1, its correct price, and a Remove control.
  3. Remove Sauce Labs Bike Light.
    - expect: Only Sauce Labs Backpack remains in the cart.
    - expect: The cart badge updates to 1.
  4. Select Continue Shopping, then reopen the cart.
    - expect: The inventory page is displayed after Continue Shopping.
    - expect: The remaining backpack is still present when the cart is reopened.

#### 1.4. Complete checkout and verify order totals

**File:** `tests/saucedemo/checkout.spec.ts`

**Steps:**
  1. Start from a fresh app state, log in as standard_user, add Sauce Labs Backpack ($29.99) and Sauce Labs Bike Light ($9.99), open the cart, and select Checkout.
    - expect: The Checkout: Your Information page is displayed.
  2. Leave all customer fields empty and select Continue.
    - expect: Checkout does not advance.
    - expect: An inline error states that First Name is required.
  3. Enter Taylor as First Name, Tester as Last Name, and 90210 as Zip/Postal Code, then select Continue.
    - expect: The Checkout: Overview page lists both selected products.
    - expect: The displayed item total is $39.98, tax is $3.20, and total is $43.18.
    - expect: Payment and shipping summaries are visible along with Cancel and Finish controls.
  4. Select Finish.
    - expect: The Checkout: Complete! page displays the order thank-you confirmation.
    - expect: The cart badge is empty.
    - expect: A Back Home control is available.

#### 1.5. Log out and return to the sign-in screen

**File:** `tests/saucedemo/logout.spec.ts`

**Steps:**
  1. Start from a fresh app state and log in as standard_user with password secret_sauce.
    - expect: The Products inventory page is displayed.
  2. Open the navigation menu and select Logout.
    - expect: The browser returns to https://www.saucedemo.com/.
    - expect: The Username and Password fields and Login button are visible.
    - expect: The authenticated inventory page is no longer displayed.
