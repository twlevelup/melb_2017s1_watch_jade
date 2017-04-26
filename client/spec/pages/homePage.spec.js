const HomePage = require('../../src/js/pages/homePage');
const App = require('../../src/js/app');
const eventHub = require('watch_framework').EventHub;

let page;

window.App = App;

describe('The Home Page', () => {
  beforeEach(() => {
    page = new HomePage();
  });

  describe('button event handlers', () => {
    describe('left', () => {
      it('should take the user to the contacts page', () => {
        spyOn(window.App, 'navigate');
        page.configureButtons();
        eventHub.trigger('left');
        expect(window.App.navigate).toHaveBeenCalledWith('contacts');
      });
    });

    describe('top', () => {
      it('should scroll the watch face up', () => {
        spyOn(page, 'scrollUp');
        page.configureButtons();
        eventHub.trigger('top');
        expect(page.scrollUp).toHaveBeenCalled();
      });
    });

    describe('bottom', () => {
      it('should scroll the watch face down', () => {
        spyOn(page, 'scrollDown');
        page.configureButtons();
        eventHub.trigger('bottom');
        expect(page.scrollDown).toHaveBeenCalled();
      });
    });
  });

  describe('rendering', () => {
    it('should produce the correct HTML', () => {
      page.render();
      expect(page.$el).toContainText('Hello, World!');
    });

    it('returns the view object', () => {
      expect(page.render()).toEqual(page);
    });
  });

  describe('face', () => {
    it('should navigate to medical info page', () => {
      spyOn(window.App, 'navigate');
      page.configureButtons();
      eventHub.trigger('face');
      expect(window.App.navigate).toHaveBeenCalledWith('medicalInfo');
    });
  });
});
