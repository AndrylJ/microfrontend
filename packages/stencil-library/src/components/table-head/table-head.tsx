import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'table-head',
  styleUrl: 'table-head.sass',
  shadow: true,
})
export class TableHead {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
