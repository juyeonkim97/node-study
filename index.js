const express = require('express'); //웹 서버
const app = express(),
    testJson = require('./test/test.json');

app.use(express.static('public')); //static 폴더로 지정, images 경로를 /public/images라고 하지 않아도 됨
//ejs 쓰려면
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs'); //뷰 엔진으로 ejs 쓰겠다
app.engine('html', require('ejs').renderFile); //html 형식으로 ejs 쓰겠다.


app.get('/', (req, res) => { //get 메소드인 거
    //res.send("Hello NodeJS!!");
    //res.json(testJson); //json 형식 읽어올 때는 send 아니고 json
    //res.render('index',{name:'홍길동'}); //값을 넘겨주는데 json 형태로 넘겨줌
});

app.get('/test/:email', (req, res) => { // : 이거는 url에서 변수값 가져오는 거,,,..
    //email 이라는 키가 추가됨
    testJson.email = req.params.email;  // cf. req.body, req.query
    testJson.aa = req.query.aa; //aa를 받아오려면 url이 이럼 => http://localhost:7000/test/123@email?aa=123
    res.json(testJson);
});

const server = app.listen(7000, function () { //run임 이게
    console.log("Express's started on port 7000");
});
