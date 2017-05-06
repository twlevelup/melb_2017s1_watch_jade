const Page = require('watch_framework').Page;

const template = require('../../templates/pages/medicalInfo.hbs');
const $ = require('jquery');

const medicalInfoPage = Page.extend({

  id: 'medicalInfo',

  template,

  buttonEvents: {
    face: 'goToHomePage',
    top: 'scrollUp',
    bottom: 'scrollDown',
  },

  details: {
    name: 'Norman',
    emergencyContact: {
      name: 'Bob',
      phoneNumber: '0431 318 162',
    },
    medicalConditions: 'Hypertension, Diabetes',
    allergies: 'Nil',
    bloodType: 'O+',
  },

  goToHomePage() {
    window.App.navigate('');
  },

  scrollUp() {
    $('#watch-face').animate({ scrollTop: '-=70px' });
  },

  scrollDown() {
    $('#watch-face').animate({ scrollTop: '+=70px' });
  },

  render() {
    const details = this.details;

    this.$el.html(this.template({ details }));
    return this;
  },
});

module.exports = medicalInfoPage;
