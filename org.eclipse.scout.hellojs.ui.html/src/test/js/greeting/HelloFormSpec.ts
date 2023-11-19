import {scout, Session} from '@eclipse-scout/core';
import {HelloForm} from '../../../main/js/index';

describe('HelloForm', () => {
  let session: Session;

  beforeEach(() => {
    setFixtures(sandbox());
    session = sandboxSession({
      desktop: {
        // Bench is not visible by default for sandbox sessions. It is required here because forms with display style view are opened
        benchVisible: true
      }
    });
    // Texts are currently not initialized from the Texts.properties during a test run -> do it manually
    session.textMap.add('GreetingMessage', 'Hello {0}, nice to meet you!');
  });

  describe('open', () => {

    it('shows an empty string field', async () => {
      let form = scout.create(HelloForm, {
        parent: session.desktop
      });
      await form.open();
      expect(form.widget('NameField').rendered).toBe(true);
      expect(form.widget('NameField').value).toBe(null);
      form.close();
    });
  });

  describe('greeting button click', () => {

    it('shows a message box with the text of the string field', async () => {
      let form = scout.create(HelloForm, {
        parent: session.desktop
      });
      await form.open();
      form.widget('NameField').setValue('Luke');
      form.widget('GreetButton').doAction();
      let messageBox = session.desktop.messageBoxes[0];
      expect(form.widget('NameField').value).toBe('Luke');
      expect(messageBox.body).toContain('Luke');
      messageBox.close();
      form.close();
    });
  });
});
