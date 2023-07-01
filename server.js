var http = require('http');
const bs= require('boostrap')

let {readFileSync,writeFileSync,renameSync} = require('fs');
const { myDateTime } = require('./function');
const first = readFileSync('./txt files/first.txt','utf8');
const second = readFileSync('./txt files/second.txt','utf8');

writeFileSync('./txt files/second.txt',`${first}`)
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(myDateTime())
  res.write(`<html><body><h1>bla bla bla<br>
  the file content is :</h1>
  <p>${first}${second}</p>
  </body></html>`);
  res.end();
}).listen(8008);
renameSync('./txt files/second.txt','./txt files/third.txt')
