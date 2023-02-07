import { expect } from '@open-wc/testing';
import MyInfo from './my-info.js';

describe('MyInfo', () => {
  it('<app-my-info> is an instance of MyInfo', async () => {
    const element = document.createElement('app-my-info');
    expect(element).to.be.instanceOf(MyInfo);
  });
});
