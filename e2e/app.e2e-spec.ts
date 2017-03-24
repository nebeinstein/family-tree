import { FamilyTreePage } from './app.po';

describe('family-tree App', function() {
  let page: FamilyTreePage;

  beforeEach(() => {
    page = new FamilyTreePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ft works!');
  });
});
