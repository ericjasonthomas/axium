import { AxiumProductPage } from './app.po';

describe('axium-product App', () => {
  let page: AxiumProductPage;

  beforeEach(() => {
    page = new AxiumProductPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
