import { Component, Event, EventEmitter, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'input-component',
  styleUrl: 'input-component.sass',
  shadow: true,
})
export class InputComponent {
  /**
   * Input type
   */
  @Prop() type: string = 'text';

  /**
   * Input label
   */
  @Prop() label: string = '';

  /**
   * Input name
   */
  @Prop() name: string;

  /**
   * Input value
   */
  @Prop() value: string = '';

  /**
   * Input placeholder
   */
  @Prop() placeholder: string = '';


  /**
   * Input helper text
  */
  @Prop() message?: string;

  /**
   * Input required
   */
  @Prop() required: boolean = false;

  /**
   * Input error state
   */
  @Prop() error: boolean = false;

  /**
   * Input error state
   */
  @Prop() disabled: boolean = false;

  /**
   * Input onChange
   */
  @Event() valueChanged: EventEmitter<string>;

  private onInputChangeValue(event: Event) {
    this.value = (event.target as HTMLInputElement).value;
    this.valueChanged.emit(this.value);
}

  render() {
    return (
      <Host class={{
        'input--error': !this.disabled && this.error,
        'input--disabled': this.disabled,
      }}>
        <label class='label'> {this.label}
          <input
            type={this.type}
            name={this.name}
            value={this.value}
            placeholder={this.placeholder}
            required={this.required}
            disabled={this.disabled}
            onInput={this.onInputChangeValue.bind(this)}
          />
        </label>
        <span class='message'>{this.message}</span>
      </Host>
    );
  }

}
