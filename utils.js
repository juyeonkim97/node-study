const ogs=require('open-graph-scraper'),
    HashMap=require('hashmap'),
    Crypto=require('crypto-js'),
    SHA256=require('crypto-js/sha256');
const EKey="nodevue";
module.exports= {
    //단방향 암호화
    encryptSha2(data,key){
        if(!data){
            return null;
        }
        key=key||EKey; //둘 중 하나가 key
        try{
            return Crypto.SHA256(data+key).toString(); //sha256은 +로 인자를 주는구나,,,
        }catch(Err){
            return Err;
        }
    },

    //양방향 암호화
    encrypt(data,key){
        return Crypto.AES.encrypt(data,key||EKey).toString(); //key가 안 들어왔을 경우 EKey를 줌
    },
    decrypt(data,key){
        return Crypto.AES.decrypt(data,key||EKey).toString();
    },
    decryptUTF(data,key){
        return Crypto.AES.decrypt(data,key||EKey).toString(Crypto.enc.Utf8);
    },
    ogsinfo(url,fn){ 
        return ogs({url:url},(err,res)=>{
            fn(err,res);
        });
    }
};