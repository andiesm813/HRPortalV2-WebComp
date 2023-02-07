import { Route } from '@vaadin/router';
import './not-found/not-found.js';
import './home/home';
import './my-info/my-info';

export const routes: Route[] = [
  { path: '', component: 'app-home', name: 'Home' },
  { path: 'home', component: 'app-home', name: 'Home' },
  { path: 'my-info', component: 'app-my-info', name: 'My Info' },
  // The fallback route should always be after other alternatives.
  { path: '(.*)', component: 'app-not-found' }
];
