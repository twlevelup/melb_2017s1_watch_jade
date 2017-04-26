const Page = require('watch_framework').Page;

const template = require('../../templates/pages/home.hbs');
const $ = require('jquery');

const homePage = Page.extend({

  id: 'home',

  template,

  buttonEvents: {
    left: 'goToContacts',
    top: 'scrollUp',
    bottom: 'scrollDown',
    face: 'goToMedicalInfo',
  },

  goToContacts() {
    window.App.navigate('contacts');
  },

  scrollUp() {
    $('#watch-face').animate({ scrollTop: '-=70px' });
  },

  scrollDown() {
    $('#watch-face').animate({ scrollTop: '+=70px' });
  },

  goToMedicalInfo() {
    window.App.navigate('medicalInfo');
  },

  render() {
    this.$el.html(this.template());
    return this;
  },

});

module.exports = homePage;
