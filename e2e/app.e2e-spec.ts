import { HashiPage } from './app.po';

describe('hashi App', () => {
  let page: HashiPage;

  beforeEach(() => {
    page = new HashiPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
