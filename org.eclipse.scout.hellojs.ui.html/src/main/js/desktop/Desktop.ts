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
import {Desktop as ScoutDesktop} from '@eclipse-scout/core';
import DesktopModel from './DesktopModel';

export class Desktop extends ScoutDesktop {

  protected override _jsonModel() {
    return DesktopModel();
  }
}
