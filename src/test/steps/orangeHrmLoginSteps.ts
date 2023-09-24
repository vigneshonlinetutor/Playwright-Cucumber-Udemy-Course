import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page, expect } from '@playwright/test';
import { pageFixture } from '../../hooks/pageFixture';

Given('I am on the orange hrm login page', async function () {
    await pageFixture.page.goto('https://opensource-demo.orangehrmlive.com/');  
});

When('I login with username as {string} and password as {string}', async function (username, password) {      
    await pageFixture.page.locator('input[placeholder="Username"]').fill(username);
    await pageFixture.page.locator('input[placeholder="Password"]').fill(password);
});

When('I click on the login button', async function () {
    await pageFixture.page.locator('button[type="submit"]').click();
});

Then('I route to the orange hrm home page', async function () {
    const url = await pageFixture.page.url();
    await expect(url).toBe('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
});