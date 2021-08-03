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
      const filePath = path.join(__dirname,"../data/member",data.memId + ".json");
      await fs.writeFile(filePath,JSON.stringify(data));

      //비밀번호 해시 처리
      data.memPw = await bcrypt.hash(data.memPw, 10);

      return true;
    }catch (err) { //회원 가입 실패
      return false;
    }
  }

  login : async function(memId, memPw, req) {

    try{
      const info = await this.get(memId);
      if (!info) { //회원정보가 없는 경우
        throw new Error('회원이 존재하지 않습니다.');
      }

      const match = await bcrypt.compare(memPw, info.memPw);
      if(match) { //비밀번호 일치
        req.session.memId = memId;

        return true;
      }else{
        throw new Error('비밀번호가 불일치 합니다.');
      }

      return false;
    } catch (err) {
      return false; // 로그인 실패
    }
  },

  get : async function(memId) {
    try {

      const filepath = path.join(__dirname,"../data/member/" + memId + ".json");
      let data = await fs.readFile(filePath); //buffer -> 문자열(toString()) -> 객체(JOSN.parse)
      data = JSON.parse(data.toString());
      return data;
    } catch(err) {
      return false;
    }
  }
};

module.exports = member;
