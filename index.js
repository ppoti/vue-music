const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?';
const parm = 'g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1526207923067'
const https = require('https');
const http = require('http');

http.createServer((req, res) => {

  let curData = '';
  https.get(url + parm, (res) => {
    res.on('data', function (d) {
      curData = d;
    });

    res.on('end', next);
  });

  let next = () => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200, {
      'Content-Type': 'text/html;charset=UTF8'
    })

    res.end(curData);
  }

}).listen(3001);
