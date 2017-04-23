import { NgCfpPage } from './app.po';

describe('ng-cfp App', () => {
  let page: NgCfpPage;

  beforeEach(() => {
    page = new NgCfpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('cfp works!');
  });
});
