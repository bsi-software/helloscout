import {Desktop, DesktopModel} from '@eclipse-scout/core';
import {HelloForm} from '../index';

export default (): DesktopModel => ({
  objectType: Desktop,
  navigationVisible: false,
  navigationHandleVisible: false,
  headerVisible: false,
  views: [
    {
      objectType: HelloForm
    }
  ]
});
