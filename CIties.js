const rp = require('request-promise');
const url = 'https://en.wikipedia.org/wiki/List_of_presidents_of_the_United_States'
const newurl = 'https://en.wikipedia.org/wiki/The_World%27s_Billionaires'
const cities = 'https://en.wikipedia.org/wiki/List_of_largest_cities'
const r = require('cheerio');
rp(url)
  .then(function(html){
    let res = r.load(html)
    let arr = res('td > b').find('a')
    let newarr = arr.map((i, e) =>{
      let newelem = res(e).text()
      return newelem
    })
    console.log(newarr)
  })
  .catch(function(err){
    console.log(err)
  });

  rp(newurl)
  .then(function(html){
    let res = r.load(html)
    let arr = res('td span.fn').find('a')
    let newarr = arr.map((i, e) =>{
      while(i < 10){
        let newelem = res(e).text()
      return newelem
      }
    })
    console.log(newarr)
  })
  .catch(function(err){
    console.log(err)
  });
  rp(cities)
  .then(function(html){
    let res = r.load(html)
    let arr = res('.wikitable > tbody > tr td:first-child').find('a')
    let newarr = arr.map((i, e) =>{
      while(i < 20){
        let newelem = res(e).text()
      return newelem
      }
    })
    console.log(newarr)
  })
  .catch(function(err){
    console.log(err)
  });