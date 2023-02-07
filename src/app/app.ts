import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { routes } from './app-routing.js';
import { defineComponents, IgcAvatarComponent, IgcButtonComponent, IgcIconButtonComponent, IgcIconComponent, IgcNavbarComponent, IgcRippleComponent } from 'igniteui-webcomponents';

defineComponents(IgcNavbarComponent, IgcButtonComponent, IgcRippleComponent, IgcIconButtonComponent, IgcIconComponent, IgcAvatarComponent);

@customElement('app-root')
export default class App extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      overflow: hidden;
    }
    .navbar {
      background-color: hsla(var(--ig-surface-500));
      height: max-content;
    }
    .view-container {
      overflow: auto;
      position: relative;
      min-width: 0;
      min-height: 0;
      flex-grow: 1;
    }
    .icon-button {
      margin: 0 8px 0 0;
    }
    .button {
      height: max-content;
      min-width: min-content;
    }
    .row-layout {
      display: flex;
    }
    .group {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      width: max-content;
      height: max-content;
    }
    .avatar {
      --background: none;
    }
  `;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <igc-navbar class="navbar">
        <h6>Rapid Fission Inc.</h6>
        <igc-button variant="flat" @click="${() => Router.go('/home')}" class="button">
          HOME
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="flat" @click="${() => Router.go('/my-info')}" class="button">
          MY INFO
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="flat" ?disabled="${true}" class="button">
          PEople
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="flat" ?disabled="${true}" class="button">
          MY FILES
          <igc-ripple></igc-ripple>
        </igc-button>
        <div slot="end">
          <div class="row-layout group">
            <igc-icon-button variant="flat" class="icon-button">
              <span class="material-icons">
                notifications
              </span>
              <igc-ripple></igc-ripple>
            </igc-icon-button>
            <igc-avatar src="/src/assets/Avatar6.png" size="small" shape="circle" class="avatar"></igc-avatar>
          </div>
        </div>
      </igc-navbar>
      <router-outlet class="view-container"></router-outlet>
    `;
  }

  firstUpdated() {
    const outlet = this.shadowRoot?.querySelector('router-outlet');
    const router = new Router(outlet);
    router.setRoutes(routes);
  }
}
