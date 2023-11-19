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
import {Button, Event, Form, InitModelOf, MessageBoxes} from '@eclipse-scout/core';
import HelloFormModel, {HelloFormWidgetMap} from './HelloFormModel';

export class HelloForm extends Form {

  declare widgetMap: HelloFormWidgetMap;

  protected override _jsonModel() {
    return HelloFormModel();
  }

  protected override _init(model: InitModelOf<this>) {
    super._init(model);

    this.widget('GreetButton').on('click', this._onGreetButtonClick.bind(this));
  }

  protected _onGreetButtonClick(event: Event<Button>) {
    let name = this.widget('NameField').value || this.session.text('stranger');
    MessageBoxes.openOk(this.session.desktop, this.session.text('GreetingMessage', name));
  }
}
