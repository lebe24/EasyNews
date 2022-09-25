const { withBrowser , withPage  } = require('./module/puppet')

// 
const startup = []
const venture =[]
const app = []
const security = []

// techcrunch urls
const url0 = 'https://techcrunch.com/category/startups/'
const url2 ="https://techcrunch.com/category/venture/"
const url3 = 'https://techcrunch.com/category/apps/'
const url4 = 'https://techcrunch.com/category/security/'
const url5 = 'https://techcrunch.com/events/'

const urls = [url0,url2,url3,url4];

// selector string
const sB = '.post-block__title .post-block__title__link'
const sl = '.post-block__title a'
const si = '.post-block__media img'

function  techcrunch() {
    withBrowser( async(browser) =>{
    for(const url of urls){
        const result = await withPage(browser)(async (page) => {
        
            if(url == url0){
                const txt0 = await page.$$eval(`${sB}`,div => div.map(x => x.textContent))
				const txt2 = await page.$$eval(`${sl}`,div => div.map(x => x.href))
				const txt1 = await page.$$eval(`${si}`,div => div.map(x => x.src))

                txt0.map((x,index) =>{
					startup.push({
						text:x,
						link:txt2[index],
						img:txt1[index] == undefined ? '' : txt1[index]

					})
				})
            }else if(url == url2){

                const txt0 = await page.$$eval(`${sB}`,div => div.map(x => x.textContent))
				const txt2 = await page.$$eval(`${sl}`,div => div.map(x => x.href))
				const txt1 = await page.$$eval(`${si}`,div => div.map(x => x.src))

                txt0.map((x,index) =>{
					venture.push({
						text:x,
						link:txt2[index],
						img:txt1[index] == undefined ? '' : txt1[index]

					})
				})

            }else if(url == url3){
                const txt0 = await page.$$eval(`${sB}`,div => div.map(x => x.textContent))
				const txt2 = await page.$$eval(`${sl}`,div => div.map(x => x.href))
				const txt1 = await page.$$eval(`${si}`,div => div.map(x => x.src))

                txt0.map((x,index) =>{
					app.push({
						text:x,
						link:txt2[index],
						img:txt1[index] == undefined ? '' : txt1[index]

					})
				})
            }else if(url == url4){
                const txt0 = await page.$$eval(`${sB}`,div => div.map(x => x.textContent))
				const txt2 = await page.$$eval(`${sl}`,div => div.map(x => x.href))
				const txt1 = await page.$$eval(`${si}`,div => div.map(x => x.src))

                txt0.map((x,index) =>{
					security.push({
						text:x,
						link:txt2[index],
						img:txt1[index] == undefined ? '' : txt1[index]

					})
				})
            }
    })}
})}