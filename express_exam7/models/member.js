const path = require('path');
const fs = require('fs').promises;
const bcrypt = require('bcrypt');

/*
* 회원관련 Model
*
*/
const member = {
  /*
  * 회원 가입 처리
  *
  * @param data
  */
  join : async function(data) {
    try{
      cons  t filePath = path.join(__dirname,"../data/member",data.memId + ".json");
      await fs.writeFile(filePath,JSON.stringify(data));

      //비밀번호 해시 처리
      data.memPw = await bcrypt.hash(data.memPw, 10);

      return true;
    }catch (err) { //회원 가입 실패
      return false;
    }
  }
};

module.exports = member;
