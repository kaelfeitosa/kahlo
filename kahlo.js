import {LitElement, html} from '@polymer/lit-element';

export const register = (name, render) => {
  class KahloElement extends LitElement {
    static get properties() {
      return {
        data: Object,
        load: Boolean,
        src: String,
      }
    }

    constructor() {
      super()
      this.loaded = true;
    }

    getSrc(props) {
      return props.src ? props.src : `/data/${this.nodeName.toLowerCase()}.json`
    }

    _shouldRender(props, changedProps, prevProps) {
      if(changedProps && (changedProps.src != undefined)) {
        this.loaded = false;
        fetch(this.getSrc(props)).then(async (response) => {
          if (response.ok) {
            this.data = await response.json()
            this.loaded = true
          }
        })
      }
      return true;
    }

    _render({data}) {
      return (this.loaded || data) ? render(html, this.data) : html``;
    }
  }
  window.customElements.define(name, KahloElement);
}
