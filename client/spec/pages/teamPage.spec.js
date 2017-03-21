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

    it('should include the text "Jonathan Ly"', () => {
      expect(page.$el).toContainText('Jonathan Ly');
    });

    it('should include the text "Jaime Gunther"', () => {
      expect(page.$el).toContainText('Jaime Gunther');
    });
  });
});
