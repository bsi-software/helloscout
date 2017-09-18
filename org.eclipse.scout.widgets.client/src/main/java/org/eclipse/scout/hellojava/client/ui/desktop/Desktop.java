/*******************************************************************************
 * Copyright (c) 2015 BSI Business Systems Integration AG.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Distribution License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/org/documents/edl-v10.html
 *
 * Contributors:
 *     BSI Business Systems Integration AG - initial API and implementation
 ******************************************************************************/
package org.eclipse.scout.hellojava.client.ui.desktop;

import org.eclipse.scout.hellojava.client.ui.greeting.HelloForm;
import org.eclipse.scout.rt.client.ui.desktop.AbstractDesktop;
import org.eclipse.scout.rt.client.ui.desktop.IDesktop;

public class Desktop extends AbstractDesktop implements IDesktop {

  @Override
  protected boolean getConfiguredNavigationVisible() {
    return false;
  }

  @Override
  protected boolean getConfiguredNavigationHandleVisible() {
    return false;
  }

  @Override
  protected boolean getConfiguredHeaderVisible() {
    return false;
  }

  @Override
  protected void execOpened() {
    HelloForm form = new HelloForm();
    form.start();
  }

}
