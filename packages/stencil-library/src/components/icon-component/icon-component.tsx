import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'icon-component',
  styleUrl: 'icon-component.sass',
  shadow: true,
})
export class IconComponent {

  /**
   * Icon size
   */

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
