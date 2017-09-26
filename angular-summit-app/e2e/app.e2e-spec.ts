import { AngularSummitAppPage } from './app.po';

describe('angular-summit-app App', () => {
  let page: AngularSummitAppPage;

  beforeEach(() => {
    page = new AngularSummitAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
