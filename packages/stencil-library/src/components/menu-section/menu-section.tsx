import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'menu-section',
  styleUrl: 'menu-section.sass',
  shadow: true,
})
export class MenuSection {

  /**
   * Section label
   */
  @Prop() label: string

  render() {
    return (
      <Host>
        <span class="section__title">{this.label}</span>
        <div class="section__body">
          <slot></slot>
        </div>
      </Host>
    );
  }

}
