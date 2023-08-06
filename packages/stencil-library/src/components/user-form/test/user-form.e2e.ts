import { newE2EPage } from '@stencil/core/testing';

describe('user-form', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<user-form></user-form>');

    const element = await page.find('user-form');
    expect(element).toHaveClass('hydrated');
  });
});
