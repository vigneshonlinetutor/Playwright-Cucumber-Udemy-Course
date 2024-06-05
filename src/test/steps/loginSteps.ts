import {Given, When, Then} from '@cucumber/cucumber';
import {chromium, Browser, Page, expect} from '@playwright/test';
import { pageFixture } from '../../hooks/pageFixture';
import { LandingPage } from '../pages/landingPage';
import { SignInPage } from '../pages/signinPage';
import { HomePage } from '../pages/homePage';
import { SettingsPage } from '../pages/settingsPage';

let landingPage:LandingPage;
let signinPage:SignInPage;
let homePage:HomePage;
let settingsPage:SettingsPage;

Given('I am on the conduit login page', async function () {
landingPage = new LandingPage(pageFixture.page);
signinPage = new SignInPage(pageFixture.page);
homePage = new HomePage(pageFixture.page);
settingsPage = new SettingsPage(pageFixture.page);

await landingPage.navigateTo('https://react-redux.realworld.io/');
await landingPage.clickSignInButton();
});


When('I login with valid credentials', async function () {
    await signinPage.enterEmailId("playwrightdemo@gmail.com");
    await signinPage.enterPassword("playwrightdemo");
    await signinPage.clickSignInButton();
});


When('I click on the settings button', async function () {
    await homePage.clickSettingsButton();
});

When('I click on the logout button', async function () {
    await settingsPage.clickLogoutButton();
});


Then('I route back to the login page', async function () {
    await expect(pageFixture.page.locator('//a[normalize-space()="Sign in"]')).toBeVisible();
});