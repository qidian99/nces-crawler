# SchoolDistrictsByState

Automation Script for Fetching all NCES School Districts by States

## URL
https://nces.ed.gov/ccd/districtsearch/district_list.asp?Search=1&details=1&InstName=&DistrictID=&Address=&City=&State=02&Zip=&Miles=&County=&PhoneAreaCode=&Phone=&DistrictType=1&DistrictType=2&DistrictType=3&DistrictType=4&DistrictType=5&DistrictType=6&DistrictType=7&DistrictType=8&NumOfStudents=&NumOfStudentsRange=more&NumOfSchools=&NumOfSchoolsRange=more

## Regex:
https://nces.ed.gov/ccd/districtsearch/district_list.asp?Search=1&details=1&InstName=&DistrictID=&Address=&City=&State=$1&Zip=&Miles=&County=&PhoneAreaCode=&Phone=&DistrictType=1&DistrictType=2&DistrictType=3&DistrictType=4&DistrictType=5&DistrictType=6&DistrictType=7&DistrictType=8&NumOfStudents=&NumOfStudentsRange=more&NumOfSchools=&NumOfSchoolsRange=more

## Chromium Driver
### HTML Element:
<a href="JavaScript:GetExcelFile();" class="excelclass">Download<br>Excel File</a>

### CSS Selector:
table:nth-child(11) > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(1) > td:nth-child(2) > font > a

### JS Path:
document.querySelector("body > div:nth-child(7) > div.sfsContent > table:nth-child(11) > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(1) > td:nth-child(2) > font > a")

await driver.findElement(By.css('a[href="JavaScript:GetExcelFile();"]')).click();

document.querySelectorAll('td[align=right] > a[target^=NCESExcelTarget]').


### Chrome Popup
https://www.youtube.com/watch?v=ia7EhHLZas8

