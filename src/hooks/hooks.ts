import {After, AfterAll, Before, BeforeAll} from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium } from '@playwright/test';
import { pageFixture} from './pageFixture';

let browser: Browser;
let page: Page;
let context: BrowserContext

BeforeAll(async function(){
    browser = await chromium.launch({headless:false});
})

Before(async function(){
    context = await browser.newContext();
    page = await browser.newPage();
    // @ts-ignore
    pageFixture.page = page;
})

After(async function(){
    await page.close();
    await context.close();
})

AfterAll(async function(){
    await browser.close();
})