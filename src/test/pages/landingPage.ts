import { Locator, Page } from "@playwright/test";
import BasePage from "./basePage";

export class LandingPage extends BasePage{
    readonly page:Page;
    private readonly signInButton:Locator;

    constructor(page:Page){
        super(page);
        this.page = page;
        this.signInButton = page.locator('//a[normalize-space()="Sign in"]');
    }

    async clickSignInButton(){
        await this.clickElement(this.signInButton);
    }
}