import {Form, MessageBoxes, models} from '@eclipse-scout/core';
import HelloFormModel from './HelloFormModel';

/*******************************************************************************
 * Copyright (c) 2017 BSI Business Systems Integration AG.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Distribution License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/org/documents/edl-v10.html
 *
 * Contributors:
 *     BSI Business Systems Integration AG - initial API and implementation
 ******************************************************************************/
export default class HelloForm extends Form {

  constructor() {
    super();
  }

  _jsonModel() {
    return models.get(HelloFormModel);
  }

  _init(model) {
    super._init(model);

    this.widget('GreetButton').on('click', this._onGreetButtonClick.bind(this));
  }

  _onGreetButtonClick(event) {
    var name = this.widget('NameField').value || this.session.text('stranger');
    MessageBoxes.openOk(this.session.desktop, this.session.text('GreetingMessage', name));
  }
}
