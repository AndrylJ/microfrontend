import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'table-body',
  styleUrl: 'table-body.sass',
  shadow: true,
})
export class TableBody {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
