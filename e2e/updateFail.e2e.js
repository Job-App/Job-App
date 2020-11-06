describe('Update Job Fail', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

    it('Submit a Job App', async () => {
      await expect(element(by.id('homepage'))).toBeVisible();
      await element(by.text('Add')).tap();
      await expect(element(by.id('job-form'))).toBeVisible();
      await element(by.id('add-company')).typeText('TestCompany\n');
      await element(by.id('add-title')).typeText('TestPosition\n');
      await element(by.id('add-deadline')).typeText('12/01/2020\n');
      await element(by.id('add-applied')).typeText('10/01/2020\n');
      await element(by.id('add-link')).typeText('joblink.test\n');
      await waitFor(element(by.id('add-submit'))).toBeVisible().withTimeout(2000);
      await element(by.id('add-submit')).tap();
      await element(by.text('OK')).tap();
      await waitFor(element(by.id('TestCompany'))).toBeVisible().withTimeout(2000);
    });

  it('Update a Job Fail', async () => {
    await expect(element(by.id('homepage'))).toBeVisible();
    await element(by.text('TestCompany')).tap();
    await expect(element(by.id('details'))).toBeVisible();
    await element(by.text('Update Job')).tap();
    await expect(element(by.id('update_job'))).toBeVisible();
    await element(by.id('Submit')).tap();
    await waitFor(element(by.text('Please fill in job title'))).toBeVisible().withTimeout(2000);
  });

});