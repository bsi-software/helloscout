/*
 * Copyright (c) 2017 BSI Business Systems Integration AG.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Distribution License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/org/documents/edl-v10.html
 *
 * Contributors:
 *     BSI Business Systems Integration AG - initial API and implementation
 */
import {Desktop as ScoutDesktop, models} from '@eclipse-scout/core';
import DesktopModel from './DesktopModel';

export default class Desktop extends ScoutDesktop {

  _jsonModel() {
    return models.get(DesktopModel);
  }

  _init(model) {
    super._init(model);
    this.widget('OpenFormsMenu').on('action', () => {
      for (let i = 0; i < 100; i++) {
        let f = scout.create('Form', {
          parent: this,
          displayHint: 'view',
          title: 'a',
          rootGroupBox: {
            objectType: 'GroupBox'
          }
        });
        f.open();
      }
    });
  }
}
