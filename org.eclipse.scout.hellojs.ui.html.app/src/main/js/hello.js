/*
 * Copyright (c) 2010, 2023 BSI Business Systems Integration AG
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 */

// noinspection JSUnresolvedVariable

class Desktop extends scout.Desktop {

  _jsonModel() {
    return {
      objectType: 'Desktop',
      navigationHandleVisible: false,
      navigationVisible: false,
      menus: [{
        id: 'OpenFormsMenu',
        objectType: 'Menu',
        text: 'Open Forms'
      }]
    };
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

scout.addObjectFactories({
  'Desktop': () => new Desktop()
});

new scout.App().init({
  bootstrap: {
    textsUrl: 'https://unpkg.com/@eclipse-scout/core@22.0.37/dist/texts.json',
    localesUrl: 'https://unpkg.com/@eclipse-scout/core@22.0.37/dist/locales.json'
  }
});
