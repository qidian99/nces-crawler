const fs = require('fs');
const {
    By,
    until
} = require('selenium-webdriver');




const queries = JSON.parse(fs.readFileSync('queries.json', 'utf8'));

// console.log(queries);

require('chromedriver');
var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();


const mockURL = 'https://nces.ed.gov/ccd/districtsearch/district_list.asp?Search=1&details=1&InstName=&DistrictID=&Address=&City=&State=02&Zip=&Miles=&County=&PhoneAreaCode=&Phone=&DistrictType=1&DistrictType=2&DistrictType=3&DistrictType=4&DistrictType=5&DistrictType=6&DistrictType=7&DistrictType=8&NumOfStudents=&NumOfStudentsRange=more&NumOfSchools=&NumOfSchoolsRange=more';

async function NCESQueryByState(url = null, urls = []) {

    try {

        for(const u of urls) {
            await NCESQueryByState(u);
        }

        if (url === null) {
            url = mockURL;
        }

        console.log("Getting: ", url);

        await driver.get(url);

        await driver.findElement(By.css('a[href="JavaScript:GetExcelFile();"]')).click();

        // driver.switchTo().newWindow
        let parentWindowHandler = await driver.getWindowHandle(); // Store your parent window
        let subWindowHandler = null;

        console.log('parentWindowHandler', parentWindowHandler);

        const handles = await driver.getAllWindowHandles(); // get all window handles
        console.log(handles);

        handles.forEach((handle) => {
            if (handle !== parentWindowHandler && subWindowHandler === null) {
                subWindowHandler = handle;
            }

        })

        console.log('subWindowHandler', subWindowHandler);

        // driver.switchTo().window(subWindowHandler); // switch to popup window

        // Now you are in the popup window, perform necessary actions here
        if (subWindowHandler === null) {
            return;
        }

        await driver.switchTo().window(subWindowHandler);

        // await driver.findElement(By.css('a[href="JavaScript:GetExcelFile();"]')).click();

        let firstResult = await driver.wait(until.elementLocated(By.css('td[align=right] > a[target^=NCESExcelTarget]')), 10000);
        console.log(await firstResult.getAttribute('textContent'));

        await firstResult.click();

        await driver.close();

        await driver.switchTo().window(parentWindowHandler);
        parentWindowHandler = null;
        console.log("Finished. Driver Closed.");
    } catch (e) {
        console.error(e);
    }
}


NCESQueryByState(null, queries);