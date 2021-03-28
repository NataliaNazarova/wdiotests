import MainPage from '../pageobjects/portal/main.portal.page';
import CoursesPage from '../pageobjects/portal/courses.portal.page';

describe('Navigation', () => {
    before(() => {
        browser.login('nhiciwi5818@ichkoch.com', 'nhiciwi5818');
    });

    beforeEach(() => {
        browser.pause(3000);
        MainPage.open();
    })

    it('courses page opens', () => {
        MainPage.goToCourses();
        browser.pause(3000);
        CoursesPage.isOpen();
    })
});