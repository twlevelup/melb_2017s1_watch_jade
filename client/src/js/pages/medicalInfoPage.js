const Page = require('watch_framework').Page;

const template = require('../../templates/pages/medicalInfo.hbs');

const medicalInfoPage = Page.extend({

  id: 'medicalInfo',

  template,

  title: 'Medical Info',

  render() {
    const details = { name: 'Norman'};
    this.$el.html(this.template(details));
    return this;
  },
});

module.exports = medicalInfoPage;
