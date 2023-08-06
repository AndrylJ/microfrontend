import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'menu-component',
  styleUrl: 'menu-component.sass',
  shadow: true,
})
export class MenuComponent {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
