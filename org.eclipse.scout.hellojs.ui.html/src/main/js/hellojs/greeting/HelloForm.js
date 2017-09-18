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
hellojs.HelloForm = function() {
  hellojs.HelloForm.parent.call(this);
};
scout.inherits(hellojs.HelloForm, scout.Form);

hellojs.HelloForm.prototype._jsonModel = function() {
  return scout.models.getModel('hellojs.HelloForm');
};

hellojs.HelloForm.prototype._init = function(model) {
  hellojs.HelloForm.parent.prototype._init.call(this, model);

  this.widget('GreetButton').on('click', this._onGreetButtonClick.bind(this));
};

hellojs.HelloForm.prototype._onGreetButtonClick = function(event) {
  var name = this.widget('NameField').value || this.session.text('stranger');
  scout.MessageBoxes.openOk(this.session.desktop, this.session.text('GreetingMessage', name));
};
