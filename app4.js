const express = require('express');
const path = require('path');
const app = express();  // Express 애플리케이션 객체 생성
const bodyParser = require('body-parser'); // body-parser 모듈

// 정적 파일 제공 미들웨어 설정
app.use(express.static(path.join(__dirname, 'public')));

// body-parser 설정
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 요청 처리 미들웨어
app.use((req, res) => {
    const paramID = req.body.id || req.query.id;  // id 파라미터 가져오기
    const paramPassWd = req.body.password || req.query.password;  // password 파라미터 가져오기

    res.status(200).send(`
        <h1>서버에서 응답한 결과</h1>
        <div><p>Parm id: ${paramID}</p></div>
        <div><p>Parm passwd: ${paramPassWd}</p></div>
        <br><br><a href="/login1.html">로그인 페이지로 돌아가기</a>
    `);
});

// 서버 리스닝
app.listen(3000, () => {
    console.log('서버가 3000번 포트에서 실행 중입니다.');
});
