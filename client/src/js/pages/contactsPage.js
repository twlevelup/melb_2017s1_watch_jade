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

  previousContact() {
    this.contactIndex -= 1;
    this.render();
  },

  nextContact() {
    this.contactIndex += 1;
    this.render();
  },

  render() {
    const allContacts = [
      { name: 'Adam', phoneNumber: '0431 111 111' },
      { name: 'James', phoneNumber: '0431 222 222' },
      { name: 'Marzena', phoneNumber: '0431 333 333' },
    ];

    const contact = allContacts[this.contactIndex];
    this.$el.html(this.template({ name: contact.name, phoneNumber: contact.phoneNumber }));

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
