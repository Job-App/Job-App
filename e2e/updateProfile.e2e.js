describe('Test Profile Upload', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('Test Profile Upload', async () => {
    await expect(element(by.id('homepage'))).toBeVisible();
    await element(by.text('Login')).tap();
    await expect(element(by.id('login_page'))).toBeVisible();
    await element(by.id('update_profile')).tap();
    await element(by.id('update-pname')).typeText('TestName\n');
    await element(by.id('update-ptitle')).typeText('TestTitle\n');
    await waitFor(element(by.id('update-psubmit'))).toBeVisible().withTimeout(2000);
    await element(by.id('update-psubmit')).tap();
    await waitFor(element(by.text('Success'))).toBeVisible().withTimeout(2000);
  });

});