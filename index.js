const {Builder, By, Key, until} = require('selenium-webdriver');

const fs = require('fs');
const queries = JSON.parse(fs.readFileSync('queries.json', 'utf8'));


(async function ncesQueryByState() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://nces.ed.gov/ccd/districtsearch/district_list.asp?Search=1&details=1&InstName=&DistrictID=&Address=&City=&State=02&Zip=&Miles=&County=&PhoneAreaCode=&Phone=&DistrictType=1&DistrictType=2&DistrictType=3&DistrictType=4&DistrictType=5&DistrictType=6&DistrictType=7&DistrictType=8&NumOfStudents=&NumOfStudentsRange=more&NumOfSchools=&NumOfSchoolsRange=more');
    // await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    // await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  } finally {
    await driver.quit();
  }
})();
