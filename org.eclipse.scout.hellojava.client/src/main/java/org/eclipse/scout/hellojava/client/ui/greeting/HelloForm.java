package org.eclipse.scout.hellojava.client.ui.greeting;

import org.eclipse.scout.hellojava.client.ui.greeting.HelloForm.MainBox.DetailBox;
import org.eclipse.scout.hellojava.client.ui.greeting.HelloForm.MainBox.DetailBox.GreetButton;
import org.eclipse.scout.hellojava.client.ui.greeting.HelloForm.MainBox.DetailBox.NameField;
import org.eclipse.scout.rt.client.ui.form.AbstractForm;
import org.eclipse.scout.rt.client.ui.form.fields.button.AbstractButton;
import org.eclipse.scout.rt.client.ui.form.fields.groupbox.AbstractGroupBox;
import org.eclipse.scout.rt.client.ui.form.fields.stringfield.AbstractStringField;
import org.eclipse.scout.rt.client.ui.messagebox.MessageBoxes;
import org.eclipse.scout.rt.platform.Order;
import org.eclipse.scout.rt.platform.classid.ClassId;
import org.eclipse.scout.rt.platform.util.ObjectUtility;
import org.eclipse.scout.rt.shared.TEXTS;

@ClassId("a932bcb1-5262-452e-b189-4679495c405b")
public class HelloForm extends AbstractForm {

  public DetailBox getDetailBox() {
    return getFieldByClass(DetailBox.class);
  }

  public NameField getNameField() {
    return getFieldByClass(NameField.class);
  }

  public MainBox getMainBox() {
    return getFieldByClass(MainBox.class);
  }

  public GreetButton getGreetingButton() {
    return getFieldByClass(GreetButton.class);
  }

  @Override
  protected int getConfiguredDisplayHint() {
    return DISPLAY_HINT_VIEW;
  }

  @Override
  protected int getConfiguredModalityHint() {
    return MODALITY_HINT_MODELESS;
  }

  @Order(1000)
  @ClassId("a6363295-b3ec-4fce-a491-c277d393a888")
  public class MainBox extends AbstractGroupBox {

    @Order(0)
    @ClassId("42b3e2bc-804e-4757-99fb-b845105c7303")
    public class DetailBox extends AbstractGroupBox {

      @Override
      protected int getConfiguredGridColumnCount() {
        return 1;
      }

      @Override
      protected String getConfiguredCssClass() {
        return "detail-box";
      }

      @Override
      protected boolean getConfiguredFillHorizontal() {
        return false;
      }

      @Override
      protected boolean getConfiguredFillVertical() {
        return false;
      }

      @Override
      protected int getConfiguredHorizontalAlignment() {
        return 0;
      }

      @Override
      protected int getConfiguredVerticalAlignment() {
        return 0;
      }

      @Override
      protected double getConfiguredGridWeightY() {
        return 1;
      }

      @Override
      protected int getConfiguredWidthInPixel() {
        return 450;
      }

      @Order(1000)
      @ClassId("b192bc02-9b3f-47ad-b1f6-50557b54ee91")
      public class NameField extends AbstractStringField {
        @Override
        protected String getConfiguredLabel() {
          return TEXTS.get("Name");
        }

        @Override
        protected byte getConfiguredLabelPosition() {
          return LABEL_POSITION_TOP;
        }

        @Override
        protected boolean getConfiguredStatusVisible() {
          return false;
        }
      }

      @Order(100000)
      @ClassId("d84e812d-3e63-4523-a78e-09169ffd635a")
      public class GreetButton extends AbstractButton {

        @Override
        protected String getConfiguredLabel() {
          return TEXTS.get("Hello");
        }

        @Override
        protected boolean getConfiguredProcessButton() {
          return false;
        }

        @Override
        protected boolean getConfiguredDefaultButton() {
          return true;
        }

        @Override
        protected String getConfiguredKeyStroke() {
          return "enter";
        }

        @Override
        protected void execClickAction() {
          String name = ObjectUtility.nvl(getNameField().getValue(), TEXTS.get("stranger"));
          MessageBoxes.createOk().withBody(TEXTS.get("GreetingMessage", name)).show();
        }
      }
    }
  }
}
