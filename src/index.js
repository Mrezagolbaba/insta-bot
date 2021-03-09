const puppeteer = require('puppeteer');
const credentials = require('./credentials');

(async () => {
    const browser = await puppeteer.launch({
        headless:false,
    });
    const page = await browser.newPage();
    await page.goto('https://www.instagram.com/accounts/login/');
    await page.waitForFunction(()=> document.querySelectorAll('input').length)
    await page.evaluate(()=>{
        document.querySelector('.aOOlW').click()
    })
    await page.type('[name=username]',credentials.username)
    await page.type('[name=password]',credentials.password)
    await page.evaluate(()=>{
        document.querySelector('.sqdOP.L3NKy.y3zKF').click()
    })
    await page.waitForTimeout(3000)
    await page.evaluate(()=> {
            document.querySelector('.sqdOP.L3NKy.y3zKF').click()
    })
    await page.waitForTimeout(4000)

    await page.evaluate(()=> {
        document.querySelector('.aOOlW.HoLwm').click()
    })

    await page.waitForSelector(()=> document.querySelector('[placeholder=Search]'))
    await page.waitForSelector(()=> document.querySelector('[href="/accounts/acitivity"]'))

    await page.waitForTimeout(9000)
    await browser.close();
})();