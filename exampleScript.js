describe('browserGoogleSearchTest', () => {
    it('quick start test', async () => {
        await browser.url('https://demo-bank.ct.digital.ai')
        const username = await $("//*[@data-auto='username']//input");
        await username.setValue('company');
        const password = await $("//*[@data-auto='password']//input");
        await password.setValue('company');
        const loginButton = await $("//*[@data-auto='login']");
        await loginButton.click();
        const transferFundButton = await $("//*[@data-auto='transfer-funds']");
        await transferFundButton.click();
        const name = await $("//input[@name='NAME']");
        await name.setValue('John');
        const phone = await $("//input[@name='PHONE']");
        await phone.setValue('1-234-5678');
        const amount = await $("//input[@name='AMOUNT']");
        await amount.setValue('1000');
        const countryList = await $("//*[@id='country-arrow']");
        await countryList.click();
        const india = await $("//*[text()='India']");
        await india.click();
        const transferButton = await $("//*[@data-auto='transfer-button']");
        transferButton.click();
    })
})
