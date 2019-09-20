const express = require('express'); // express 패키지 불러오기
var app = express(); // express로 앱 생성

app.use('/static', express.static('public')); // static 폴더를 /public directory로 지정하기

app.set('views', __dirname + '/views'); // view 폴더를 /views로 지정하기
app.set('view engine', 'ejs'); // 렌더링 엔진은 ejs

app.engine('html', require('ejs').renderFile); // html 파일을 ejs로 렌더링하기

const IP="0.0.0.0"; // service ip //TODO: 디버그 모드와 릴리즈 모드로 나누기
const PORT=80; // service port

//TODO: 라우터 분리하기

app.get('/', (req, res) => {
    res.render("index");
});

// app.get('/header', (req, res) => {
//     res.render("header")
// });

app.get('/base', (req, res) => {
    res.render("base")
});

app.listen(PORT, IP);