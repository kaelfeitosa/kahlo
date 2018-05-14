import { LitElement, html } from "./node_modules/@polymer/lit-element/lit-element.js";
import { installRouter } from "./node_modules/pwa-helpers/router.js";
const elements = [];
installRouter(location => {
  elements.forEach(el => el.current = location.pathname);
});

class AppTemplate extends LitElement {
  static get properties() {
    return {
      pathname: String,
      current: String
    };
  }

  constructor() {
    super();
    this.current = location.pathname;
    this.name = this.children[0].nodeName.toLowerCase();
    this.pathname = this.children[0].pathname;
    elements.push(this);
  }

  _render({
    current,
    pathname
  }) {
    if (current !== pathname) return html``;
    if (!this.loaded) this.load();
    return html`<slot></slot>`;
  }

  load() {
    const module = document.createElement('script');
    module.src = `./templates/${this.name}.js`;
    module.type = 'module';
    document.getElementsByTagName('head')[0].appendChild(module);
    this.loaded = true;
  }

}

customElements.define('kahlo-load', AppTemplate);