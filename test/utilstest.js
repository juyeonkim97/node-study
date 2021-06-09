const util=require('util');
const utils=require('../utils');

let str="NodeJS";

//단방향 test
util.log("sha2= "+utils.encryptSha2(str)); //키 안 주고 실행해본 거

//양방향 test
return;
util.log("enc= "+utils.encrypt(str)); //키 안 주고 실행해본 거
util.log("enc= "+utils.encrypt(str,'aaa')); //키 줘봄
const enc=utils.encrypt(str);
const dec=utils.decrypt(enc);
const decUTF=utils.decryptUTF(enc);
util.log("enc= "+enc); 
util.log("dec= "+dec); //NodeJS로 나올 것을 예상했지만 16진수로 바뀐 걸로 나옴
util.log("decUTF= "+decUTF);

//ogs test
return;//뒤에 거 실행 안 시키려고 return 일단 해둔 거
let url="https://naver.com";
utils.ogsinfo(url,(err,res)=>{
    util.log(err,res); 
});