import { Angular4BasicPage } from './app.po';

describe('angular4-basic App', () => {
  let page: Angular4BasicPage;

  beforeEach(() => {
    page = new Angular4BasicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
