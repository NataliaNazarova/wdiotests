import LoginPage from  '../pageobjects/login.page';
import ProfilePage from '../pageobjects/profile.page';

describe('Auth', () => {

    beforeEach(() => {
        LoginPage.open();
  //      browser.refresh();
    });

    afterEach(() => {
        browser.execute('window.localStorage.clear()');
    });

    it('user logs in with valid data', () => {
        LoginPage.open();
        LoginPage.setLogin('nhiciwi5818@ichkoch.com');
        LoginPage.setPassword('nhiciwi5818');
        LoginPage.clickSummitButton();
        ProfilePage.isOpen();

    });

    it('submit button is disabled if login and password are absent', () => {
//        LoginPage.open();
        LoginPage.submitButtonIsDisabled();
    });

    it("fails if invalid data provided", () => {
        LoginPage.setLogin('example@example.com');
        LoginPage.setPassword('123456');
        LoginPage.clickSummitButton();
        LoginPage.errorToastAppeared();
    });


});


