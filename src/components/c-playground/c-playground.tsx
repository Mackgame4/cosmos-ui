import { Component, Host, State, h } from '@stencil/core';
import { getComponents } from '../../utils/utils';

@Component({
  tag: 'c-playground',
  styleUrl: 'c-playground.css',
  shadow: true,
})
export class CPlayground {
  @State() component: string = 'c-button';

  // loop through all components in the components folder and render the choosen component
  get getComponent() {
    const components = getComponents();
    const component = components.find((component) => component.tag === this.component);
    if (component) {
      return component;
    }
    return;
  }

  componentWillLoad() {
    console.log(this.getComponent);
  }

  render() {
    return (
      <Host>
        <c-card class="max-w-3xl">
          <div class="flex flex-row space-x-4">
          <c-card class="flex-1">
            {this.getComponent ? <this.getComponent.tag /> : <p>Component not found</p>}
          </c-card>
          <c-card card-subtitle="Options">
            <c-input label="Component" value={this.component} />
          </c-card>
          </div>
        </c-card>
      </Host>
    );
  }

}
