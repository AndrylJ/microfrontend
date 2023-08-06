import { newSpecPage } from '@stencil/core/testing';
import { UserForm } from '../user-form';

describe('user-form', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UserForm],
      html: `<user-form></user-form>`,
    });
    expect(page.root).toEqualHtml(`
      <user-form>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </user-form>
    `);
  });
});
