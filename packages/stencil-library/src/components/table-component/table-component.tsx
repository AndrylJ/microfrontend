import { Component, Host, h } from '@stencil/core';
import { JSX } from '@stencil/core/internal';

export interface TableHead {
  [key: string]: string;
}

export interface TableRow {
  [key: string]: string | number | JSX.Element | JSX.Element[];
}

@Component({
  tag: 'table-component',
  styleUrl: 'table-component.sass',
  shadow: true,
})
export class TableComponent {
  render() {
    return (
      <Host>
        <paper-component>
          <div class='table-container'>
            <div class='table'>
              <slot></slot>
            </div>
          </div>
        </paper-component>
      </Host>
    );
  }

}
