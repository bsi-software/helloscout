package org.eclipse.scout.hellojava.client.ui.greeting;

import org.eclipse.scout.rt.client.ui.form.AbstractForm;
import org.eclipse.scout.rt.client.ui.form.fields.groupbox.AbstractGroupBox;
import org.eclipse.scout.rt.platform.Order;
import org.eclipse.scout.rt.platform.classid.ClassId;

@ClassId("a932bcb1-5262-452e-b189-4679495c405b")
public class HelloForm extends AbstractForm {

  @Override
  protected String getConfiguredTitle() {
    return "a";
  }

  @Order(1000)
  @ClassId("a6363295-b3ec-4fce-a491-c277d393a888")
  public class MainBox extends AbstractGroupBox {
  }
}
