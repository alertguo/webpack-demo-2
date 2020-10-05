import x from './x.js'
console.log(x)
import png from './assets/1.png'
console.log(png)
const div = document.getElementById('app')
div.innerHTML = `
  <img src="${png}">
`