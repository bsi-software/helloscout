export { default as App } from './App';
export { default as Desktop } from './desktop/Desktop';
export { default as HelloForm } from './greeting/HelloForm';
export * from './objectFactories';

import * as self from './index.js';
export default self;
window.hellojs = Object.assign(window.hellojs || {}, self);
