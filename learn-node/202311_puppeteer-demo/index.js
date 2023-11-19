const puppeteer = require('puppeteer-core');

(async () => {
  // 设置指定的chrome/chromium路径
  // const browserPath = './chrome/mac_arm-116.0.5793.0/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing'

  const browser = await puppeteer.launch({
    headless: false,
    // executablePath: browserPath 
  });
  const page = await browser.newPage({
  });
  await page.goto('https://www.bilibili.com/bangumi/play/ep691612?version=3');
  await page.screenshot({ path: 'example.png' });

  // browser.close();

})();


// Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36

// Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36