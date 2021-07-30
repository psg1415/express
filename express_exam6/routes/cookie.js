const express = require('express');
const router = express.Router();

router.get("/:mode", (req,res) => {
  const mode = req.params.mode;
  switch(mode) {
    case "set" : //쿠키설정
      res.cookie("testcooke1", "쿠키 값설정1");
      res.cookie("testcooke2", "쿠키 값설정2");
      res.cookie("testcooke3", "쿠키 값설정3");
      break;
    case "del" : //쿠키삭제
      res.clearCookie("testcooke2");
      break;
    case "get" : //쿠키조회
      console.log(req.cookies);
      const testcooke2 = req.cookies.testcooke2;
      break;
  }
  return res.send("");
});

module.exports = router;
