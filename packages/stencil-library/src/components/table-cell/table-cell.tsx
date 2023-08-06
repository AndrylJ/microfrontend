import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'table-cell',
  styleUrl: 'table-cell.sass',
  shadow: true,
})
export class TableCell {
  /**
   * Text align
   */
  @Prop() textalign: 'center' | 'left' | 'justify' | 'right' = 'left';

  /**
   * Cell variant
   */
  @Prop() variant: 'body' | 'footer' | 'head'  = 'body'

  render() {
    return (
      <Host class={{
        [`align-${this.textalign}`]: true,
        [`variant-${this.variant}`]: true
      }}>
        <slot></slot>
      </Host>
    );
  }

}
