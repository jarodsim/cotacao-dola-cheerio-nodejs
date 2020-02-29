# Robô desenvolvido com a biblioteca Cheerio para scraper do site [Dolar Hoje](https://dolarhoje.com/)

[Link do Github](https://github.com/cheeriojs/cheerio)

[Site](https://cheerio.js.org/)

# Passos para a instalação

* ``` npm init ```

* ``` npm install cheerio ```

Tem uma sintaxe próxima ao jquery 
* ```
const cheerio = require('cheerio')
const $ = cheerio.load('<h2 class="title">Hello world</h2>')

$('h2.title').text('Hello there!')
$('h2').addClass('welcome')

$.html()
//=> <h2 class="title welcome">Hello there!</h2>
 ```




