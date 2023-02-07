import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { defineComponents, IgcAvatarComponent, IgcButtonComponent, IgcIconComponent, IgcInputComponent, IgcRippleComponent, IgcSelectComponent } from 'igniteui-webcomponents';

defineComponents(IgcButtonComponent, IgcRippleComponent, IgcIconComponent, IgcAvatarComponent, IgcInputComponent, IgcSelectComponent);

@customElement('app-my-info')
export default class MyInfo extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .page-content {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 1000px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .row-layout {
      display: flex;
    }
    .header {
      background-color: hsla(var(--ig-primary-700));
      justify-content: center;
      align-items: stretch;
      align-content: flex-start;
      height: 144px;
      flex-shrink: 0;
    }
    .group {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      position: relative;
      width: 960px;
      min-width: 50px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .group_1 {
      justify-content: center;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      margin: 0 16px 0 0;
      min-width: 200px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .group_2 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
    }
    .group_3 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      margin: 0 0 16px;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
    }
    .group_4 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      min-width: 50px;
      min-height: min-content;
    }
    .content {
      background-color: hsla(var(--ig-gray-100));
      justify-content: center;
      align-items: stretch;
      align-content: flex-start;
      overflow: auto;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .group_5 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 960px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .group_6 {
      background-color: hsla(var(--ig-surface-500));
      border-color: hsla(var(--ig-gray-200));
      border-width: 1px;
      border-style: solid;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      margin: 0 16px 32px 0;
      width: 200px;
      min-width: 50px;
      flex-shrink: 0;
    }
    .group_7 {
      border-color: hsla(var(--ig-gray-200));
      border-width: 0px 0px 1px;
      border-style: solid;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      padding: 16px;
      min-width: 50px;
    }
    .group_8 {
      border-color: hsla(var(--ig-gray-200));
      border-width: 0px 0px 1px;
      border-style: solid;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 8px;
      position: relative;
      padding: 16px;
      min-width: 50px;
    }
    .group_9 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      height: max-content;
      min-width: 50px;
      flex-shrink: 0;
    }
    .group_10 {
      border-color: hsla(var(--ig-gray-300));
      border-width: 0px 0px 1px;
      border-style: solid;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      padding: 16px;
      min-width: 50px;
    }
    .group_11 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      margin: 0 0 8px;
      height: max-content;
      min-width: 50px;
      flex-shrink: 0;
    }
    .group_12 {
      background-color: hsla(var(--ig-surface-500));
      border-color: hsla(var(--ig-gray-200));
      border-width: 1px;
      border-style: solid;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      margin: 0 0 32px;
      padding: 16px;
      flex-grow: 1;
    }
    .group_13 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
    }
    .group_14 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 8px;
      position: relative;
      min-width: 50px;
    }
    .group_15 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
    }
    .group_16 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 8px;
      position: relative;
      margin: 0 0 16px;
      min-width: 50px;
    }
    .group_17 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 8px;
      position: relative;
      margin: 0 0 32px;
      min-width: 50px;
    }
    .footer {
      background-color: hsla(var(--ig-surface-500));
      border-color: hsla(var(--ig-gray-300));
      border-width: 1px 0px 0px;
      border-style: solid;
      justify-content: center;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      padding: 8px;
      min-width: 50px;
      min-height: min-content;
    }
    .image {
      object-fit: cover;
      border-radius: 50%;
      width: 112px;
      height: 112px;
      min-width: 0;
      min-height: 0;
      flex-shrink: 0;
    }
    .content_1 {
      color: hsla(var(--ig-surface-500));
      height: max-content;
      min-width: min-content;
    }
    .text {
      color: hsla(var(--ig-primary-500));
      margin: 0 0 8px;
      height: max-content;
      min-width: min-content;
    }
    .text_1 {
      height: max-content;
      min-width: min-content;
    }
    .icon {
      font-size: 18px;
      width: 18px;
      height: 18px;
      margin: 0 8px 0 0;
    }
    .content_2 {
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .avatar {
      --background: none;
      margin: 0 8px 0 0;
    }
    .icon_1 {
      font-size: 24px;
      width: 24px;
      height: 24px;
      margin: 0 8px 0 0;
    }
    .icon_2 {
      font-size: 18px;
      width: 18px;
      height: 18px;
    }
    .text_2 {
      color: hsla(var(--ig-gray-500));
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .user-input {
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .input {
      height: max-content;
      min-width: 484px;
      flex-shrink: 0;
    }
    .input_1 {
      height: max-content;
      max-width: 100px;
      flex-shrink: 0;
    }
    .user-input_1::part(base) {
      color: hsla(var(--ig-surface-500));
      background-color: hsla(var(--ig-primary-400));
    }
    .user-input_2::part(base) {
      color: hsla(var(--ig-surface-500));
    }
    .user-input_3::part(base) {
      color: hsla(var(--ig-surface-500));
    }
    .user-input_4::part(base) {
      color: hsla(var(--ig-surface-500));
    }
    .user-input_5::part(base) {
      color: hsla(var(--ig-surface-500));
    }
    .user-input_6::part(base) {
      color: hsla(var(--ig-surface-500));
    }
    .user-input_7::part(base) {
      color: hsla(var(--ig-surface-500));
    }
  `;

  @property()
  private value?: any = 'Erin';

  @property()
  private value1?: any = 'First name';

  @property()
  private value2?: any = 'Brockovich';

  @property()
  private value3?: any = '123 Wallaby Lane';

  @property()
  private value4?: any = 'Scramento';

  @property()
  private value5?: any = 'CA';

  @property()
  private value6?: any = '94203';

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="column-layout page-content">
        <div class="row-layout header">
          <div class="row-layout group">
            <div class="row-layout group_1">
              <img src="/src/assets/Avatar6.png" class="image" />
            </div>
            <div class="column-layout group_2">
              <div class="column-layout group_3">
                <h4 class="content_1">
                  Erin Brockovich
                </h4>
                <p class="typography__subtitle-1 content_1">
                  Water Quality Specialist
                </p>
              </div>
              <div class="row-layout group_4">
                <igc-button variant="flat" class="user-input user-input_1">
                  personal
                  <igc-ripple></igc-ripple>
                </igc-button>
                <igc-button variant="flat" class="user-input user-input_2">
                  job
                  <igc-ripple></igc-ripple>
                </igc-button>
                <igc-button variant="flat" class="user-input user-input_3">
                  time-off
                  <igc-ripple></igc-ripple>
                </igc-button>
                <igc-button variant="flat" class="user-input user-input_4">
                  emergency
                  <igc-ripple></igc-ripple>
                </igc-button>
                <igc-button variant="flat" class="user-input user-input_5">
                  documents
                  <igc-ripple></igc-ripple>
                </igc-button>
                <igc-button variant="flat" class="user-input user-input_6">
                  benefits
                  <igc-ripple></igc-ripple>
                </igc-button>
                <igc-button variant="flat" class="user-input user-input_7">
                  pay info
                  <igc-ripple></igc-ripple>
                </igc-button>
              </div>
            </div>
          </div>
        </div>
        <div class="row-layout content">
          <div class="row-layout group_5">
            <div class="column-layout group_6">
              <div class="column-layout group_7">
                <p class="typography__subtitle-2 text">
                  Hire Date
                </p>
                <p class="typography__body-2 text_1">
                  Feb 01, 2010
                </p>
                <p class="typography__caption text_1">
                  10y-10m-7d
                </p>
              </div>
              <div class="column-layout group_8">
                <div class="row-layout group_9">
                  <span class="material-icons icon">
                    waves
                  </span>
                  <p class="typography__body-2 content_2">
                    Waste water mgmt.
                  </p>
                </div>
                <div class="row-layout group_9">
                  <span class="material-icons icon">
                    domain
                  </span>
                  <p class="typography__body-2 content_2">
                    Nuclear Disposal
                  </p>
                </div>
                <div class="row-layout group_9">
                  <span class="material-icons icon">
                    location_on
                  </span>
                  <p class="typography__body-2 content_2">
                    California, USA
                  </p>
                </div>
              </div>
              <div class="column-layout group_10">
                <p class="typography__subtitle-2 text">
                  Manager
                </p>
                <div class="row-layout group_11">
                  <igc-avatar src="/src/assets/Avatar1.png" size="small" shape="circle" class="avatar"></igc-avatar>
                  <p class="typography__body-2 content_2">
                    Donni Darko
                  </p>
                </div>
              </div>
            </div>
            <div class="column-layout group_12">
              <div class="row-layout group_13">
                <span class="material-icons icon_1">
                  perm_contact_calendar
                </span>
                <h6 class="content_2">
                  Personal
                </h6>
              </div>
              <p class="typography__subtitle-1 text_1">
                Basic Information
              </p>
              <div class="row-layout group_14">
                <igc-input .value="${this.value}" label="First name" ?disabled="${true}" ?outlined="${true}" class="user-input"></igc-input>
                <igc-input .value="${this.value1}" label="Middle name" ?disabled="${true}" ?outlined="${true}" class="user-input"></igc-input>
                <igc-input .value="${this.value2}" label="Last name" ?disabled="${true}" ?outlined="${true}" class="user-input"></igc-input>
              </div>
              <div class="row-layout group_14">
                <igc-select ?outlined="${true}" label="Gender" value="2" class="user-input">
                  <igc-select-item value="1">
                    Male
                  </igc-select-item>
                  <igc-select-item value="2" ?selected="${true}">
                    Female
                  </igc-select-item>
                  <igc-select-item value="3">
                    It's complicated
                  </igc-select-item>
                </igc-select>
                <igc-select ?outlined="${true}" label="Marital status" class="user-input">
                  <igc-select-item value="1">
                    Married
                  </igc-select-item>
                  <igc-select-item value="1">
                    Single
                  </igc-select-item>
                </igc-select>
              </div>
              <div class="row-layout group_15">
                <igc-input .value="${this.value3}" label="Address" ?required="${true}" ?outlined="${true}" class="input"></igc-input>
              </div>
              <div class="row-layout group_16">
                <igc-input .value="${this.value4}" label="City" ?required="${true}" ?outlined="${true}" class="user-input"></igc-input>
                <igc-input .value="${this.value5}" label="State" ?required="${true}" ?outlined="${true}" class="input_1"></igc-input>
                <igc-input type="number" .value="${this.value6}" label="Zip/Postal Code" ?required="${true}" ?outlined="${true}" class="user-input"></igc-input>
              </div>
              <p class="typography__subtitle-1 text_1">
                Contact
              </p>
              <div class="row-layout group_17">
                <igc-input type="tel" label="Home phone" ?outlined="${true}" class="user-input">
                  <span slot="prefix">
                    <span class="material-icons icon_2">
                      home
                    </span>
                  </span>
                </igc-input>
                <igc-input type="tel" label="Work phone" ?outlined="${true}" class="user-input">
                  <span slot="prefix">
                    <span class="material-icons icon_2">
                      domain
                    </span>
                  </span>
                </igc-input>
                <igc-input type="tel" label="Mobile phone" ?outlined="${true}" class="user-input">
                  <span slot="prefix">
                    <span class="material-icons icon_2">
                      person
                    </span>
                  </span>
                </igc-input>
              </div>
            </div>
          </div>
        </div>
        <div class="row-layout footer">
          <p class="typography__body-2 text_2">
            (c) 2020 IndigoDesign Inc.
          </p>
        </div>
      </div>
    `;
  }
}
