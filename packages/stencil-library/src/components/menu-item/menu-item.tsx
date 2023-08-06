import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'menu-item',
  styleUrl: 'menu-item.sass',
  shadow: true,
})
export class MenuItem {

  @Prop() href?: string;
  @Prop() disabled: boolean = false;
  @Prop() clickHandler?: (event: MouseEvent) => void;

  render() {
    return (
      <Host>
        {
          this.href ? (
            <a class='item' href={this.disabled ? undefined : this.href} onClick={this.clickHandler}>
              <slot></slot>
            </a>
          ) : (
            <button class='item' onClick={this.clickHandler} disabled={this.disabled}>
              <slot></slot>
            </button>
          )
        }
      </Host>
    );
  }

}
