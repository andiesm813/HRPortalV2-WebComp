import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { defineComponents, IgcAvatarComponent, IgcButtonComponent, IgcIconButtonComponent, IgcIconComponent, IgcListComponent, IgcListItemComponent, IgcRippleComponent } from 'igniteui-webcomponents';

defineComponents(IgcIconComponent, IgcAvatarComponent, IgcButtonComponent, IgcRippleComponent, IgcIconButtonComponent, IgcListComponent, IgcListItemComponent);

@customElement('app-home')
export default class Home extends LitElement {
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
    .content {
      background-color: hsla(var(--ig-gray-100));
      justify-content: center;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .group_1 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 960px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .group_2 {
      background-color: hsla(var(--ig-surface-500));
      border-color: hsla(var(--ig-gray-200));
      border-width: 1px;
      border-style: solid;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      margin: -32px 16px 32px 0;
      padding: 0 0 16px;
      width: 300px;
      min-width: 50px;
      flex-shrink: 0;
    }
    .group_3 {
      background-color: hsla(var(--ig-gray-200));
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      margin: 0 0 32px;
      padding: 16px;
      height: max-content;
      min-width: 50px;
      flex-shrink: 0;
    }
    .group_4 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
    }
    .group_5 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      margin: 0 0 16px;
      height: max-content;
      min-width: 50px;
      flex-shrink: 0;
    }
    .group_6 {
      border-color: hsla(var(--ig-gray-200));
      border-width: 0px 1px 0px 0px;
      border-style: solid;
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      position: relative;
      height: max-content;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
    }
    .group_7 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      position: relative;
      height: max-content;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
    }
    .group_8 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      margin: 0 0 8px;
      height: max-content;
      min-width: 50px;
      flex-shrink: 0;
    }
    .group_9 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      position: relative;
      margin: 0 0 32px;
      padding: 0 16px;
      min-width: 50px;
    }
    .group_10 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      overflow: auto;
      position: relative;
      min-width: 50px;
    }
    .list_scroll {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      overflow: auto;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_11 {
      background-color: hsla(var(--ig-surface-500));
      border-color: hsla(var(--ig-gray-200));
      border-width: 1px;
      border-style: solid;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      margin: -32px 0 32px;
      min-width: 50px;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .group_12 {
      background-color: hsla(var(--ig-surface-500));
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      margin: 0 0 16px;
    }
    .group_13 {
      background-color: hsla(var(--ig-gray-200));
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      align-content: flex-start;
      margin: 0 0 8px;
      padding: 4px 16px;
      height: max-content;
      flex-shrink: 0;
    }
    .group_14 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .group_15 {
      border-color: hsla(var(--ig-gray-200));
      border-width: 1px 0px 0px;
      border-style: solid;
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      margin: 0 0 16px;
      padding: 0 16px;
      height: max-content;
      flex-shrink: 0;
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
    .icon {
      font-size: 36px;
      width: 36px;
      height: 36px;
      color: hsla(var(--ig-surface-500));
      margin: 0 16px 0 0;
    }
    .h4 {
      color: hsla(var(--ig-surface-500));
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .avatar {
      --background: none;
      margin: 0 16px 0 0;
    }
    .content_1 {
      height: max-content;
    }
    .text {
      margin: 0 0 8px;
      width: max-content;
      height: max-content;
    }
    .icon_1 {
      font-size: 24px;
      width: 24px;
      height: 24px;
      margin: 0 0 8px;
    }
    .text_1 {
      height: max-content;
      min-width: min-content;
    }
    .content_2 {
      margin: 0 8px 0 0;
      width: max-content;
      height: max-content;
      flex-shrink: 0;
    }
    .icon_2 {
      font-size: 24px;
      width: 24px;
      height: 24px;
      color: hsla(var(--ig-primary-500));
    }
    .text_2 {
      margin: 0 16px 8px;
      height: max-content;
    }
    .avatar_1 {
      --background: none;
    }
    .icon_3 {
      font-size: 24px;
      width: 24px;
      height: 24px;
    }
    .text_3 {
      color: hsla(var(--ig-gray-900));
      height: max-content;
    }
    .text_4 {
      color: hsla(var(--ig-gray-500));
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .avatar_1::part(base) {
      background-color: hsla(var(--ig-gray-100));
    }
    .icon-button::part(base) {
      color: hsla(var(--ig-primary-500));
    }
    .button {
      margin: 0 8px 0 0;
      height: max-content;
      min-width: min-content;
      max-width: 100%;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .list {
      height: max-content;
      min-width: min-content;
    }
  `;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="column-layout page-content">
        <div class="row-layout header">
          <div class="row-layout group">
            <span class="material-icons icon">
              home
            </span>
            <h4 class="h4">
              Home
            </h4>
          </div>
        </div>
        <div class="row-layout content">
          <div class="row-layout group_1">
            <div class="column-layout group_2">
              <div class="row-layout group_3">
                <igc-avatar src="/src/assets/Avatar6.png" size="medium" shape="circle" class="avatar"></igc-avatar>
                <div class="column-layout group_4">
                  <h5 class="content_1">
                    Erin Brockovich
                  </h5>
                  <p class="typography__body-1 content_1">
                    Water quality specialist
                  </p>
                </div>
              </div>
              <div class="row-layout group_5">
                <div class="column-layout group_6">
                  <p class="typography__subtitle-2 text">
                    Open PTO
                  </p>
                  <span class="material-icons icon_1">
                    date_range
                  </span>
                  <p class="typography__body-2 text_1">
                    8.5 days used (YTD)
                  </p>
                  <p class="typography__caption text_1">
                    1 day scheduled
                  </p>
                </div>
                <div class="column-layout group_7">
                  <p class="typography__subtitle-2 text">
                    Bereavement leave
                  </p>
                  <div class="row-layout group_8">
                    <h6 class="content_2">
                      0.0
                    </h6>
                    <span class="material-icons icon_2">
                      date_range
                    </span>
                  </div>
                  <p class="typography__body-2 text_1">
                    Days available
                  </p>
                  <p class="typography__caption text_1">
                    0 day scheduled
                  </p>
                </div>
              </div>
              <div class="row-layout group_9">
                <igc-button class="button">
                  <span class="material-icons">
                    send
                  </span>
                  <span>Request time off</span>
                  <igc-ripple></igc-ripple>
                </igc-button>
                <igc-icon-button variant="flat" class="icon-button">
                  <span class="material-icons">
                    email
                  </span>
                  <igc-ripple></igc-ripple>
                </igc-icon-button>
              </div>
              <div class="column-layout group_10">
                <p class="typography__subtitle-2 text_2">
                  What's the buzz
                </p>
                <div class="column-layout list_scroll">
                  <igc-list class="list">
                    <igc-list-item>
                      <div slot="start">
                        <igc-avatar src="/src/assets/Avatar3.png" size="small" shape="circle" class="avatar_1"></igc-avatar>
                      </div>
                      <div slot="title">Ethan Hunt</div>
                      <div slot="subtitle">Birthday, Oct 1</div>
                      <div slot="end">
                        <span class="material-icons icon_3">
                          cake
                        </span>
                      </div>
                    </igc-list-item>
                    <igc-list-item>
                      <div slot="start">
                        <igc-avatar src="/src/assets/Avatar5.png" size="small" shape="circle" class="avatar_1"></igc-avatar>
                      </div>
                      <div slot="title">Luke Skywalker</div>
                      <div slot="subtitle">25th work-anniversary</div>
                      <div slot="end">
                        <span class="material-icons icon_3">
                          flag
                        </span>
                      </div>
                    </igc-list-item>
                    <igc-list-item>
                      <div slot="start">
                        <igc-avatar src="/src/assets/Avatar1.png" size="small" shape="circle" class="avatar_1"></igc-avatar>
                      </div>
                      <div slot="title">Donnie Darko</div>
                      <div slot="subtitle">On vacation, Oct 10-23</div>
                      <div slot="end">
                        <span class="material-icons icon_3">
                          beach_access
                        </span>
                      </div>
                    </igc-list-item>
                    <igc-list-item>
                      <div slot="start">
                        <igc-avatar src="/src/assets/Avatar2.png" size="small" shape="circle" class="avatar_1"></igc-avatar>
                      </div>
                      <div slot="title">Edna Mode</div>
                      <div slot="subtitle">Visiting customer</div>
                      <div slot="end">
                        <span class="material-icons icon_3">
                          airplanemode_active
                        </span>
                      </div>
                    </igc-list-item>
                  </igc-list>
                </div>
              </div>
            </div>
            <div class="column-layout group_11">
              <div class="column-layout group_12">
                <div class="row-layout group_13">
                  <p class="typography__subtitle-2 text_3">
                    What's happening at Rapid Fission Inc.
                  </p>
                  <p class="typography__subtitle-2 text_3">
                    Announcements (1)
                  </p>
                </div>
                <igc-list class="list">
                  <igc-list-item>
                    <div slot="start">
                      <igc-avatar src="/src/assets/Avatar4.png" size="small" shape="circle" class="avatar_1"></igc-avatar>
                    </div>
                    <div slot="title">George Bailey posted  an announcement, awards, and call for nominations</div>
                    <div slot="subtitle">19 days ago</div>
                    <div slot="end">
                      <span class="material-icons icon_3">
                        clear
                      </span>
                    </div>
                  </igc-list-item>
                </igc-list>
              </div>
              <div class="column-layout group_14">
                <div class="row-layout group_15">
                  <p class="typography__subtitle-2 content_2">
                    MY BENEFITS
                  </p>
                </div>
              </div>
              <igc-list class="list">
                <igc-list-item>
                  <div slot="start">
                    <igc-avatar size="small" shape="circle" class="avatar_1">
                      <span class="material-icons">security</span>
                    </igc-avatar>
                  </div>
                  <div slot="title">Radiation protection health insurance planre</div>
                  <div slot="subtitle">$600 every other week</div>
                </igc-list-item>
                <igc-list-item>
                  <div slot="start">
                    <igc-avatar size="small" shape="circle" class="avatar_1">
                      <span class="material-icons">remove_red_eye</span>
                    </igc-avatar>
                  </div>
                  <div slot="title">20/20 Vision plans here</div>
                  <div slot="subtitle">$234 every other week</div>
                </igc-list-item>
                <igc-list-item>
                  <div slot="start">
                    <igc-avatar size="small" shape="circle" class="avatar_1">
                      <span class="material-icons">child_friendly</span>
                    </igc-avatar>
                  </div>
                  <div slot="title">Child care savings</div>
                  <div slot="subtitle">$4955 remaining</div>
                </igc-list-item>
                <igc-list-item>
                  <div slot="start">
                    <igc-avatar size="small" shape="circle" class="avatar_1">
                      <span class="material-icons">security</span>
                    </igc-avatar>
                  </div>
                  <div slot="title">Fire hazard protection  </div>
                  <div slot="subtitle">On da house!</div>
                </igc-list-item>
              </igc-list>
            </div>
          </div>
        </div>
        <div class="row-layout footer">
          <p class="typography__body-2 text_4">
            (c) 2020 Rapid Fission Inc.
          </p>
        </div>
      </div>
    `;
  }
}
