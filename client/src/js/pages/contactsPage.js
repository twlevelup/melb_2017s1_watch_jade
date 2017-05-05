const Page = require('watch_framework').Page;

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
    { name: 'Dr Joe Smith', relationship: 'Doctor', phoneNumber: '0412 891 475' },
    { name: 'Bob', relationship: 'Son', phoneNumber: '0431 318 162' },
    { name: 'Bryan', relationship: 'Son', phoneNumber: '0430 882 244' },
    { name: 'Carissa', relationship: 'Daughter-in-law', phoneNumber: '0412 891 475' },
    { name: 'Elaine', relationship: 'Carer', phoneNumber: '0412 431 931' },
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
});

module.exports = contactsPage;
