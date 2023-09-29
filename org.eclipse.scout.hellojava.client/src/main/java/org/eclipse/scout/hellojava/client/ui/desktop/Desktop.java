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
package org.eclipse.scout.hellojava.client.ui.desktop;

import org.eclipse.scout.hellojava.client.ui.greeting.HelloForm;
import org.eclipse.scout.rt.client.ui.action.menu.AbstractMenu;
import org.eclipse.scout.rt.client.ui.desktop.AbstractDesktop;
import org.eclipse.scout.rt.client.ui.desktop.IDesktop;
import org.eclipse.scout.rt.client.ui.form.IForm;
import org.eclipse.scout.rt.platform.Order;
import org.eclipse.scout.rt.platform.classid.ClassId;

@ClassId("9f272808-d28a-4adf-ad28-0096f73ab554")
public class Desktop extends AbstractDesktop implements IDesktop {

  @Override
  protected boolean getConfiguredNavigationVisible() {
    return false;
  }

  @Override
  protected boolean getConfiguredNavigationHandleVisible() {
    return false;
  }


  @Order(1000)
  @ClassId("d57a4bfd-e975-43b7-b097-3f8caedb9c36")
  public class Menu extends AbstractMenu {
    @Override
    protected String getConfiguredText() {
      return "Open Forms";
    }

    @Override
    protected void execAction() {
      for (int i = 0; i < 100; i++) {
        IForm form = new HelloForm();
        form.setDisplayHint(IForm.DISPLAY_HINT_VIEW);
        form.start();
      }
    }
  }

}
