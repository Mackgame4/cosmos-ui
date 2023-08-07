import { Component, Host, h } from '@stencil/core';
import { debugMode } from '../../utils/utils';

@Component({
  tag: 'c-provider',
  styleUrl: 'c-provider.css',
  shadow: false,
})
export class CProvider {
  componentDidLoad() {
    if (debugMode) console.log('%c Cosmos UI is ready!', 'background: #222; color: #bada55');
  }

  render() {
    return (
      <Host>
        <div class="h-screen bg-background text-foreground font-sans antialiased">
          <slot></slot>
        </div>
      </Host>
    );
  }

}
