import { Angular2CRUDPage } from './app.po';

describe('angular2-crud App', function() {
  let page: Angular2CRUDPage;

  beforeEach(() => {
    page = new Angular2CRUDPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
