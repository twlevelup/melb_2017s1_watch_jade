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

    it('should render contact name title', () => {
      page.render();
      expect(page.$el).toContainText('Name:');
    });

    it('should should render contact relationship title', () => {
      page.render();
      expect(page.$el).toContainText('Relationship:');
    });

    it('should should render contact phone title number', () => {
      page.render();
      expect(page.$el).toContainText('Phone Number:');
    });

    it('returns the view object', () => {
      expect(page.render()).toEqual(page);
    });
  });

  describe('scrolling through contacts', () => {
    it('nextContact should increment the index', () => {
      expect(page.contactIndex).toEqual(0);
      page.nextContact();
      expect(page.contactIndex).toEqual(1);
    });

    it('should go back to 0 if user is at end of array', () => {
      page.contactIndex = page.allContacts.length - 1;
      page.nextContact();
      expect(page.contactIndex).toEqual(0);
    });

    it('previousContact should decrement the index', () => {
      page.contactIndex = 1;
      page.previousContact();
      expect(page.contactIndex).toEqual(0);
    });

    it('should go to last contact if user goes backwards from beginning of list', () => {
      page.contactIndex = 0;
      page.previousContact();
      expect(page.contactIndex).toEqual(page.allContacts.length - 1);
    });
  });
});
