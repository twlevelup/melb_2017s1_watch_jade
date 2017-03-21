const TeamPage = require('../../src/js/pages/teamPage');

let page;

describe('Check-in dance', () => {
  beforeEach(() => {
    page = new TeamPage();
    page.render();
  });

  describe('initial git commit', () => {
    it('should include the text "Made by:"', () => {
      expect(page.$el).toContainText('Made by:');
    });


    it('should include the text "Babanpreet Kaur:"', () => {
      expect(page.$el).toContainText('Babanpreet Kaur');
    });
  });
});
