const express = require('express');
const app = express(); // express 객체가 생성 app 객체

/*
  use - 미들웨어
    - 가장 상단에 위치하는 use로 등록한 미들웨어
    - 모든 요청에 유입이되는 라우터
    - 공통 라우터
*/
app.use((req, res, next) => {
  // URL 명시 하지 않으면 공통 미들웨어
  console.log("use로 등록한 미들웨어");

  next(); // 다음 미들웨어로 이동
});

//GET방식 / URL
app.get("/", (req, res) => {
  /*
    res.status(상태코드번호) - res.writeHead ...
    res.send('출력할 데이터'); - res.write, res.end
  */

  return res.status(200).send("<h1>Express에서 출력</h1>");
});

// 미들웨어
app.get("/test", (req, res, next) => {
  console.log("0번째 미들웨어");
  next();
});

// 미들웨어 - 총 3개의 미들웨어
app.get("/test", (req, res, next) => {
  console.log("1번째 미들웨어");
  next(); // 다음 미들웨어로 이동
},(req, res, next) => {
  console.log("2번째 미들웨어");
  next();
},(req, res) => {
  console.log("3번째 미들웨어");

  return res.send("");
});

/*
* use로 등록된 미들웨어 - 가장 하단에 있다면?
*
*/
app.use((req, res, next) => {
  return res.send("가장 하단에 있는 라우터 - 없는 페이지 처리 라우터");
});

app.listen(3000, () => {
  console.log("3000번 포트에서 서버 대기중...");
});
