const Page = require('watch_framework').Page;

const medicalInfoPage = Page.extend({

  id: 'medicalInfo',

  title: 'Medical Info',

  render() {
    this.$el.html('<h1 style="color: red;">Medical Info</h1>');
    return this;
  },
});

module.exports = medicalInfoPage;
