import { Builder, By, until } from "selenium-webdriver";

(async () => {
    let driver = await new Builder().forBrowser('chrome').build()

    try {
        await driver.get('https://planzajec.pjwstk.edu.pl')
        await driver.findElement(By.css('#ctl00_menuGlowneRadMenu a[href="PlanGrupy.aspx"]')).click()
        await driver.wait(until.urlContains('PlanGrupy'))
        const courses = await driver.findElements(By.css('#ctl00_ContentPlaceHolder1_StudiaComboBox_DropDown li'))
        console.log(courses)
        await courses.find(async el => (await el.getText()) === "Zarządzanie Informacją stacjonarne po angielsku" +
            " (kierunek Zarządzanie Informacją)")?.click()
        await driver.findElement(By.id('ctl00$ContentPlaceHolder1$PobierzPlanButton')).click()

        setTimeout(() => {}, 10000)
    } finally {
        await driver.quit()
    }
})()