const MedicalInfoPage = require('../../src/js/pages/medicalInfoPage');
// const eventHub = require('watch_framework').EventHub;

let page;

describe('The Medical Information Page', () => {
  beforeEach(() => {
    page = new MedicalInfoPage();
    page.render();
  });

  it('should have a title', () => {
    expect(page.title).toBeDefined();
  });

  it('should have name as Norman', () => {
    expect(page.$el).toContainText('Norman');
  });

  it('should have Doctor\'s name as Dr Joe Smith', () => {
    expect(page.$el).toContainText('Dr Joe Smith');
  });
});
