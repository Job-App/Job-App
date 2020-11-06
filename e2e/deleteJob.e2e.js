describe('Delete Job Test', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('Submit a Job App', async () => {
      await expect(element(by.id('homepage'))).toBeVisible();
      await element(by.text('Add')).tap();
      await expect(element(by.id('job-form'))).toBeVisible();
      await element(by.id('add-company')).typeText('TestCompany\n');
      await element(by.id('add-title')).typeText('TestPosition\n');
      await waitFor(element(by.id('add-submit'))).toBeVisible().withTimeout(2000);
      await element(by.id('add-submit')).tap();
      await element(by.text('OK')).tap();
      await waitFor(element(by.id('TestCompany'))).toBeVisible().withTimeout(2000);
    });

  it('Delete a Job App', async () => {
    await expect(element(by.id('JobDetails'))).toBeVisible();
    await waitFor(element(by.id('delete-app'))).toBeVisible().withTimeout(2000);
    await expect(element(by.id('homepage'))).toBeVisible();
    await element(by.text('TestCompany')).tap();
    await expect(element(by.id('details'))).toBeVisible();
    await element(by.id('delete-app')).tap();
    await element(by.text('OK')).tap();
  });
});