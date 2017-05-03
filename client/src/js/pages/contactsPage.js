const Page = require('watch_framework').Page;

const ContactView = require('../views/contact');

const template = require('../../templates/pages/contacts.hbs');

const contactsPage = Page.extend({

  id: 'contacts',

  template,

  buttonEvents: {
    face: 'goToHomePage',
    top: 'previousContact',
    bottom: 'nextContact',
  },

  initialize() {
    this.render();
  },

  goToHomePage() {
    window.App.navigate('');
  },

  contactIndex: 0,

  allContacts: [
    { name: 'Bob', relationship: 'Son', phoneNumber: '0431 318 162' },
    { name: 'Bryan', relationship: 'Son', phoneNumber: '0430 882 244' },
    { name: 'Carissa', relationship: 'Daughter', phoneNumber: '0412 891 475' },
  ],

  previousContact() {
    if (this.contactIndex === 0) {
      this.contactIndex = this.allContacts.length - 1;
    } else {
      this.contactIndex -= 1;
    }
    this.render();
  },

  nextContact() {
    if (this.contactIndex === this.allContacts.length - 1) {
      this.contactIndex = 0;
    } else {
      this.contactIndex += 1;
    }
    this.render();
  },

  render() {
    const contact = this.allContacts[this.contactIndex];
    this.$el.html(this.template({
      name: contact.name,
      relationship: contact.relationship,
      phoneNumber: contact.phoneNumber,
    }));

    return this;
  },

  createContactHTML(contact) {
    const view = new ContactView({
      model: contact,
    });
    return view.render().el;
  },

});

module.exports = contactsPage;
