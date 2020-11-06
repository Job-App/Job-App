describe('Test Profile', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('Test Profile', async () => {
    await expect(element(by.id('homepage'))).toBeVisible();
    await element(by.text('Login')).tap();
    await expect(element(by.id('login_page'))).toBeVisible();
  });

});