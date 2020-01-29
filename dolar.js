var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

//-------------------------------------------//

var data = new Date();

var dia = data.getDate();
var mes = data.getMonth() + 1;
var ano = data.getFullYear();

var hora = data.getHours();
var minutos = data.getMinutes();
var segundos = data.getSeconds();

var str_data = `${dia} / ${mes} / ${ano}`;
var str_hora = `${hora}:${minutos}:${segundos}`;

//--------------------------------------------------------//


request('https://dolarhoje.com/', function (err, res, body) {
    if (err) console.log('Erro: ' + err);

    var $ = cheerio.load(body);

    var moeda = $('span.nacional').find('.symbol').text();
    var valor = $('input').filter('#nacional').attr('value');

    console.log(`DATA ${str_data} \nHORA ${str_hora} \nValor em dólar equivalente a 1 real: ${valor + moeda}`);

    //escrevendo os dados num arquivo txt
    fs.appendFileSync('dolar.txt', `\r\n------------------------------------------------\r\nDATA ${str_data} \nHORA ${str_hora} \nValor em dólar equivalente a 1 real: ${valor + moeda} \r\n `);

});