/* eslint-disable @stencil-community/required-jsdoc */
/* eslint-disable @stencil-community/own-props-must-be-private */
import { Component, Prop, h } from '@stencil/core';
import { classnames } from '../../utils/helpers/classnames';
import { Color } from '../../utils/constants/color';

@Component({
  tag: 'button-component',
  styleUrl: 'button-component.sass',
  shadow: true,
})
export class ButtonComponent {

  @Prop() type: 'button' | 'submit' | 'reset' = 'button';
  @Prop() href?: string;
  @Prop() color: Color = 'primary';
  @Prop() variant: 'contained' | 'outlined' | 'text' = 'contained';
  @Prop() size: 'small' | 'medium' | 'large' = 'medium';
  @Prop() disabled: boolean = false;

  private classes (): string {
    return classnames(
      'button',
      `button--${this.variant}`,
      `button--${this.variant}-${this.color}`,
      `button--size-${this.size}`,
      ['button--disabled', this.disabled],
    );
  }

  render() {
    return (
      Boolean(this.href) ? (
        <a href={this.disabled ? undefined : this.href} class={this.classes()}>
          <i class='button__icon button__icon--start'><slot name='start-icon'/></i>
          <slot/>
          <i class='button__icon button__icon--end'><slot name='end-icon'/></i>
        </a>
      ) : (
        <button type={this.type} class={this.classes()} disabled={this.disabled}>
          <i class='button__icon button__icon--start'><slot name='start-icon'/></i>
          <slot/>
          <i class='button__icon button__icon--end'><slot name='end-icon'/></i>
        </button>
      )
    );
  }
}
