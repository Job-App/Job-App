describe('Update Job Test', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('Update a Job App', async () => {
    await expect(element(by.id('homepage'))).toBeVisible();
    await element(by.text('N/A')).tap();
    await expect(element(by.id('details'))).toBeVisible();
    await element(by.text('Update Job')).tap();
    await expect(element(by.id('update_job'))).toBeVisible();
    await element(by.id('update-company')).typeText('UpdateCompany\n');
    await element(by.id('update-title')).typeText('UpdateTitle\n');
    await element(by.id('update-deadline')).typeText('12/01/2021\n');
    await element(by.id('update-applied')).typeText('11/06/2020\n');
    await element(by.id('update-link')).typeText('joblinkupdate.test\n');
    await element(by.text('Submit')).tap();
    await waitFor(element(by.text('Success'))).toBeVisible().withTimeout(2000);
  });

});