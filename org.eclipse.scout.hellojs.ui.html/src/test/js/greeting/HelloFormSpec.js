import {scout} from '@eclipse-scout/core';
import {HelloForm} from '../../../main/js/index';

describe('HelloForm', () => {
  let session;

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

    it('shows an empty string field', done => {
      /** @type {HelloForm} */
      let form = scout.create('hellojs.HelloForm', {
        parent: session.desktop
      });
      form.open()
        .then(() => {
          expect(form.widget('NameField').rendered).toBe(true);
          expect(form.widget('NameField').value).toBe(null);
          form.close();
        })
        .catch(fail)
        .always(done);
    });
  });

  describe('greeting button click', () => {

    it('shows a message box with the text of the string field', done => {
      /** @type {HelloForm} */
      let form = scout.create('hellojs.HelloForm', {
        parent: session.desktop
      });
      form.open()
        .then(() => {
          form.widget('NameField').setValue('Luke');
          form.widget('GreetButton').doAction();
          let messageBox = session.desktop.messageBoxes[0];
          expect(form.widget('NameField').value).toBe('Luke');
          expect(messageBox.body).toContain('Luke');
          messageBox.close();
          form.close();
        })
        .catch(fail)
        .always(done);
    });
  });
});
