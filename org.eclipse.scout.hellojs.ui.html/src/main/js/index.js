/*!
* Eclipse Scout Hello JS
*
* Copyright (c) BSI Business Systems Integration AG. All rights reserved.
* Released under the Eclipse Distribution License v1.0
* http://www.eclipse.org/org/documents/edl-v10.html
*/
export { default as App } from './App';
export { default as Desktop } from './desktop/Desktop';
export { default as HelloForm } from './greeting/HelloForm';
export * from './objectFactories';

import * as self from './index.js';
export default self;
window.hellojs = Object.assign(window.hellojs || {}, self);
