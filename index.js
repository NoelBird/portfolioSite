const express = require('express'); // express 패키지 불러오기
const https = require('https');
const fs = require('fs');
const http = require('http');
var app = express(); // express로 앱 생성

app.use('/static', express.static('public')); // static 폴더를 /public directory로 지정하기

app.set('views', __dirname + '/views'); // view 폴더를 /views로 지정하기
app.set('view engine', 'ejs'); // 렌더링 엔진은 ejs

app.engine('html', require('ejs').renderFile); // html 파일을 ejs로 렌더링하기

const options = {
  key: fs.readFileSync('keys/key.pem'),
  cert: fs.readFileSync('keys/key-cert.pem')
}

const IP="0.0.0.0"; // service ip //TODO: 디버그 모드와 릴리즈 모드로 나누기
const PORT=80; // service port

//TODO: 라우터 분리하기

app.get('/', (req, res) => {
    res.render("index");
});

app.get('/DetailedAboutMe', (req, res) => {
     res.render("DetailedAboutMe")
 });

app.get('/portfolio/handwriting', (req, res) => {
    res.render("portfolio/handwriting")
})

app.get('/base', (req, res) => {
    res.render("base")
});

http.createServer(app).listen(PORT);
https.createServer(options, app).listen(443);
