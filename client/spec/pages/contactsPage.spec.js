const ContactsPage = require('../../src/js/pages/contactsPage');
const eventHub = require('watch_framework').EventHub;

let page;

describe('The Contacts Page', () => {
  beforeEach(() => {
    page = new ContactsPage();
  });

  describe('button events', () => {
    beforeEach(() => {
      page.configureButtons();
    });

    describe('face', () => {
      it('should take the user to the home page', () => {
        spyOn(window.App, 'navigate');
        eventHub.trigger('face');
        expect(window.App.navigate).toHaveBeenCalledWith('');
      });
    });

    // describe('face', () => {
    //   it('should display "Oh noes!" to the user', () => {
    //     page.render();
    //     eventHub.trigger('face');
    //     expect(page.$el).toContainText('Oh noes!');
    //   });
    // });
  });

  describe('rendering', () => {
    it('should produce the correct HTML', () => {
      page.render();
      expect(page.$el).toContainHtml('<h1>Contacts</h1>');
    });

    it('returns the view object', () => {
      expect(page.render()).toEqual(page);
    });
  });

  describe('scrolling', () => {
    it('next contact should increment the index', () => {
      expect(page.contactIndex).toEqual(0);
      page.nextContact();
      expect(page.contactIndex).toEqual(1);
    });

    it('previousContact should decrement the index', () => {
      page.nextContact();
      expect(page.contactIndex).toEqual(1);
      page.previousContact();
      expect(page.contactIndex).toEqual(0);
    });
  });
});
