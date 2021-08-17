//jest.setTimeout(30000)

it("Should login", async () => {
    await page.goto("https://web-client-staging-t748z32a.weareindy.com/app/");
    await page.fill("//*[@name='email']", "andrei.kaliasinski+auto@tispr.com");
    await page.fill("//*[@name='password']", "NAozuQqp11");
    await page.click("//button[text()='Sign in']");
    await page.click("//div[text()='Drive']");
    expect(await page.title()).toBe("Indy");
});