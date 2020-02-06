import {RemoteApp} from '@eclipse-scout/core';
import * as hellojava from '@eclipse-scout/hellojava-core';

Object.assign({}, hellojava); // workaround so that the imports are not unused

new RemoteApp().init();
