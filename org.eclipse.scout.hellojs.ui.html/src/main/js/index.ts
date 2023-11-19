/* !
* Eclipse Scout Hello JS
*
* Copyright (c) BSI Business Systems Integration AG. All rights reserved.
* Released under the Eclipse Distribution License v1.0
* http://www.eclipse.org/org/documents/edl-v10.html
*/
import {ObjectFactory} from '@eclipse-scout/core';

export * from './App';
export * from './desktop/Desktop';
export * from './greeting/HelloForm';
export * from './objectFactories';

import * as self from './index';
export default self;
ObjectFactory.get().registerNamespace('hellojs', self);
