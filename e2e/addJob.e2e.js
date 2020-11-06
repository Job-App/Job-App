describe('Add Job Test', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('Submit a Job App', async () => {
    await waitFor(element(by.id('homepage'))).toBeVisible().withTimeout(2000);
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

  it('Submit a Job App/No company', async () => {
    await waitFor(element(by.id('homepage'))).toBeVisible().withTimeout(2000);
    await expect(element(by.id('homepage'))).toBeVisible();
    await element(by.text('Add')).tap();
    await expect(element(by.id('job-form'))).toBeVisible();
    await element(by.id('add-title')).typeText('TestPosition\n');
    await element(by.id('add-deadline')).typeText('12/01/2020\n');
    await element(by.id('add-applied')).typeText('10/01/2020\n');
    await element(by.id('add-link')).typeText('joblink.test\n');
    await waitFor(element(by.id('add-file'))).toBeVisible().withTimeout(2000);
    await element(by.id('add-file')).typeText('file.com\n');
    await waitFor(element(by.id('add-submit'))).toBeVisible().withTimeout(2000);
    await element(by.id('add-submit')).tap();
    await element(by.text('OK')).tap();
  });

  
  it('Submit a Job App/No title', async () => {
    await waitFor(element(by.id('homepage'))).toBeVisible().withTimeout(2000);
    await expect(element(by.id('homepage'))).toBeVisible();
    await element(by.text('Add')).tap();
    await expect(element(by.id('job-form'))).toBeVisible();
    await element(by.id('add-company')).typeText('TestCompany\n');
    await element(by.id('add-deadline')).typeText('12/01/2020\n');
    await element(by.id('add-applied')).typeText('10/01/2020\n');
    await element(by.id('add-link')).typeText('joblink.test\n');
    await waitFor(element(by.id('add-file'))).toBeVisible().withTimeout(2000);
    await element(by.id('add-file')).typeText('file.com\n');
    await waitFor(element(by.id('add-submit'))).toBeVisible().withTimeout(2000);
    await element(by.id('add-submit')).tap();
    await element(by.text('OK')).tap();
  });
});