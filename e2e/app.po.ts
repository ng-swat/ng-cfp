import { browser, element, by } from 'protractor';

export class NgCfpPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('cfp-root h1')).getText();
  }
}
