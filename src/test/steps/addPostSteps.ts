import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page, expect } from '@playwright/test';
import { pageFixture } from '../../hooks/pageFixture';

const articleName = "Playwright " + Math.random();

When('I Click on New Post button', async function () {
    await pageFixture.page.locator('a[href="#editor"]').click();
});

When('I fill up the require fields', async function () {
    await pageFixture.page.locator('input[placeholder="Article Title"]').fill(articleName);
    await pageFixture.page.locator('input[placeholder="What\'s this article about?"]').fill(articleName);
    await pageFixture.page.locator('textarea[placeholder="Write your article (in markdown)"]').fill(articleName);
    await pageFixture.page.locator('input[placeholder="Enter tags"]').fill(articleName);
});

When('I Publish the article', async function () {
    await pageFixture.page.locator('button[type="button"]').click();
});

Then('I should see the Article posted', async function () {
    await expect(pageFixture.page.locator('div[class="container"] h1')).toHaveText(articleName);
});