import LoginPage from  '../pageobjects/login.page';
import ProfilePage from '../pageobjects/profile.page';

describe('Auth', () => {
    it('user logs in with valid data', () => {
        LoginPage.open();
        LoginPage.setLogin('nhiciwi5818@ichkoch.com');
        LoginPage.setPassword('nhiciwi5818');
        LoginPage.clickSummitButton();
        ProfilePage.isOpen();

    });
});


