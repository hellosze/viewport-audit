const puppeteer = require('puppeteer');
function getAdContainerDimensions(width, height){

    (async () => {
        const browser = await puppeteer.launch({headless: false, devtools: true});
        const page = await browser.newPage();
        page.setViewport({"width":1250,"height":1000});
        await page.goto('https://www.legacy.com/obituaries/name/kate-spade-obituary?pid=189206274');
        const adContainerWidth = 0;

        // Get the "viewport" of the page, as reported by the page.
        const dimensions = await page.evaluate(() => {
          return {
            adContainerWidth: JSON.parse(JSON.stringify(window.getComputedStyle(document.querySelector('Aside.DisplayAd')))).width,
            viewportWidth: window.innerWidth,
            deviceScaleFactor: window.devicePixelRatio
          };
          this.adContainerWidth = SON.parse(JSON.stringify(window.getComputedStyle(document.querySelector('Aside.DisplayAd')))).width;
        });
        this.adContainerWidth = dimensions.adContainerWidth;

        console.log('Dimensions:', dimensions);
        
        await browser.close();
        return this.adContainerWidth;
    })();
      
}
module.exports = getAdContainerDimensions;
