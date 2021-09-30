const puppeteer = require('puppeteer');

(async () =>{
    let movieUrl = 'https://www.imdb.com/title/tt0111161/?ref_=nv_sr_srsg_0';
    let browser = await puppeteer.launch();
    let page = await browser.newPage();
    await page.goto(movieUrl, { waitUntil: 'networkidle2'});

    let data = await page.evaluate(() =>{
        let title = document.querySelector('div[class="TitleBlock__TitleContainer-sc-1nlhx7j-1 jxsVNt"]>h1').innerText;
        let raiting = document.querySelector('span[class="AggregateRatingButton__RatingScore-sc-1ll29m0-1 iTLWoV"]').innerText;
        let raitingCount = document.querySelector('div[class="AggregateRatingButton__TotalRatingAmount-sc-1ll29m0-3 jkCVKJ"]').innerText;

        return {
            title,
            raiting,
            raitingCount
        };
    });

    console.log(data);

    debugger;

    await browser.close();
})();