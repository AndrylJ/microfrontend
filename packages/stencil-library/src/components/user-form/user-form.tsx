import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'user-form',
  styleUrl: 'user-form.css',
  shadow: true,
})
export class UserForm {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
