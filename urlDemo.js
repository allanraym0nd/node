import url from 'url';

const urlString = 'https://www.google.com/search?q=hello+world';

// URL object
const urlObj = new URL(urlString)
console.log(urlObj)
console.log(urlObj.pathname)

//format()
console.log(url.format(urlObj))

// file url
console.log(import.meta.url)

//file url to path -- file path()
console.log(url.fileURLToPath(import.meta.url))

const params = new URLSearchParams(urlObj.search)
console.log(params)
console.log(params.get('q')) // or just  console.log(url.format(urlObj.search))

