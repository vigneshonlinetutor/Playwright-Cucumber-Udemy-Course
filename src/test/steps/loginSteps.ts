import {Given, When, Then} from '@cucumber/cucumber';
import {chromium, Browser, Page, expect} from '@playwright/test';
import { pageFixture } from '../../hooks/pageFixture';


Given('I am on the conduit login page', async function () {
await pageFixture.page.goto('https://react-redux.realworld.io/');
await pageFixture.page.locator('//a[normalize-space()="Sign in"]').click();
});


When('I login with valid credentials', async function () {
    await pageFixture.page.locator('input[placeholder="Email"]').fill("playwrightdemo@gmail.com");
    await pageFixture.page.locator('input[placeholder="Password"]').fill("playwrightdemo");
    await pageFixture.page.locator('button[type="submit"]').click();
});


When('I click on the settings button', async function () {
    await pageFixture.page.locator('a[href="#settings"]').click();
});

When('I click on the logout button', async function () {
    await pageFixture.page.locator('//button[normalize-space()="Or click here to logout."]').click();
});


Then('I route back to the login page', async function () {
    await expect(pageFixture.page.locator('//a[normalize-space()="Sign in"]')).toBeVisible();
});