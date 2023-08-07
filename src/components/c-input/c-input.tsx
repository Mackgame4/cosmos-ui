import { Component, Prop, h } from '@stencil/core';
import { cn } from '../../utils/utils';

@Component({
  tag: 'c-input',
  styleUrl: 'c-input.css',
  shadow: true,
})
export class CInput {
  @Prop() type: string = 'text';
  @Prop() placeholder: string = 'Placeholder';
  @Prop() disabled: boolean = false;
  @Prop() required: boolean = false;
  @Prop() readonly: boolean = false;
  @Prop() value: string = '';
  @Prop() label: string = '';
  @Prop() min: string = '';
  @Prop() max: string = '';
  @Prop() step: string = '';

  get inputVariants() {
    return cn(
      "flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
    );
  }

  render() {
    return (
      <div class="grid w-full max-w-sm items-center gap-1.5">
        {this.label && <c-label htmlFor="input">{this.label}</c-label>}
        <input
          id="input"
          class={this.inputVariants}
          type={this.type}
          placeholder={this.placeholder}
          disabled={this.disabled}
          required={this.required}
          readonly={this.readonly}
          min={this.min}
          max={this.max}
          step={this.step}
          value={this.value}
        />
      </div>
    );
  }

}
