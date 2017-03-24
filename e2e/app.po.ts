import { browser, element, by } from 'protractor';

export class FamilyTreePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ft-root h1')).getText();
  }
}
