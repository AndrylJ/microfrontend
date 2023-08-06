import { Component, Prop, h } from '@stencil/core';
import { classnames } from '../../utils/helpers/classnames';

@Component({
  tag: 'paper-component',
  styleUrl: 'paper-component.sass',
  shadow: true,
})
export class PaperComponent {
  @Prop() elevation: number = 1

  private classes(): string {
    return classnames(
      'paper',
      `paper--elevation-${this.elevation}`,
    )
  }

  render() {
    return (
      <div class={this.classes()}>
        <slot></slot>
      </div>
    );
  }

}
