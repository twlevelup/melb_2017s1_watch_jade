const MedicalInfoPage = require('../../src/js/pages/medicalInfoPage');
const eventHub = require('watch_framework').EventHub;

let page;

describe('The Medical Information Page', () => {
  beforeEach(() => {
    page = new MedicalInfoPage();
    page.render();
  });

  describe('button event handlers', () => {
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

    describe('face', () => {
      it('should navigate to home page', () => {
        spyOn(window.App, 'navigate');
        page.configureButtons();
        eventHub.trigger('face');
        expect(window.App.navigate).toHaveBeenCalledWith('');
      });
    });
  });

  describe('rendering', () => {
    it('should have a title', () => {
      expect(page.$el).toContainHtml('<h1>Medical Information</h1>');
    });

    it('should should render name title', () => {
      expect(page.$el).toContainText('Name:');
    });

    it('should should render emergency contact number title', () => {
      expect(page.$el).toContainText('Emergency Contact:');
    });

    it('should should render medical information title', () => {
      expect(page.$el).toContainText('Medical Conditions:');
    });

    it('should should render allergies title', () => {
      expect(page.$el).toContainText('Allergies:');
    });

    it('should should render blood type title', () => {
      expect(page.$el).toContainText('Blood Type:');
    });
  });
});
