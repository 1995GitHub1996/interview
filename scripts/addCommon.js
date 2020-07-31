var request = require('request');

var options = { method: 'POST',
    url: 'https://open.work.weixin.qq.com/wwopen/colleague/comment',
    qs: { _: '1596193450693' },
    headers: 
   { 'Postman-Token': 'c1e3b192-e9f4-49ac-8c29-cc4de53cb0e2',
       'cache-control': 'no-cache',
       Cookie: 'wwapp.cst=31D3022448365C12BBAC229995D6A61E692C40737A6AF6C89F60BAF318F4B525A827B4C74035D3FED307B909D9BB489F; wwapp.deviceid=6492d5e9-9d44-45f7-88e4-8fd01bd3821f; wwapp.st=E3AE5CE52D099BE707B4C86EF40F014ABF87C6CDFC8C2B78C607B2997806A422F3B264B9794EA2A21207A32E7272901F2A8AF8AE7189FA0789F250B0D761EFE4FDFA359EC84B461F1BC3A813DA05441EBE5D46DE6F8051AAED507790B9A61C2207DBF14A236B1094947A644BEF8A66A6F14361D477D0056481C43942E37BCB95; wwapp.vid=1688851114311063; wwrtx.sid=MoBQ59-ZvNX2YQ0LVkV66HEVl5Iy7KcOJiNzC9YSsiKEVRiVkihXFyExGomIX4YW; wwrtx.vst=93Z1UHgmcbiUXlqDsjoUJDHANga8rRWXcwVWioIWack5-edM68DKolYXbR_d3Vd0CWe-kL2SfCCDmcfSU_HaN2Fp_Z9NzFTmi4STib60zJVeXWOpEgyuChdktgFVVaKFAXRNeUIpch5nYmSg55doQXFRvtRR8zZVWDZp631hMOCPiGfXyD4lbMFSyU9b6OjzrGExlaam3-7b-6zgmT4G3tlq5Dlu3hEDUbh7A427UjuNbVokIpB0G2_IZKLXvvHXj2IwZ9TNhc9eJu0VS8dcZw; wwrtx.i18n_lan=zh-cn; _ga=GA1.2.1349881351.1596167206; _gid=GA1.2.2141778703.1596167206; Hm_lpvt_9364e629af24cb52acc78b43e8c9f77d=1596167204; Hm_lvt_9364e629af24cb52acc78b43e8c9f77d=1596167204; wwapp.corpid=1970324986026881; wwapp.sessionkey=; wwapp.termid=65538; wwrtx.c_gdpr=0; wwrtx.refid=4757094412800259; wap.sid=MoBQ59-ZvNX2YQ0LVkV66P-lkwbR3HB0HteBDM5jBYYh0r8c2i93aLjd_RahG7N4; wwopen.open.sid=wP51rfufRIWPzgwQgWyZfZJsXyoigs-UrEy-b5VCv0iw; wwrtx.ref=direct',
       Referer: 'https://open.work.weixin.qq.com/wwopen/colleague/detail?code=2401ff997af1b6c1157235452f387851&version=3.0.8.2067&platform=mac',
       'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/605.1.15 (KHTML, like Gecko) wxwork/3.0.8 (MicroMessenger/6.2) WeChat/2.0.4',
       Connection: 'keep-alive',
       'Content-Length': '135',
       Origin: 'https://open.work.weixin.qq.com',
       'Content-Type': 'application/x-www-form-urlencoded',
       'Accept-Language': 'zh-cn',
       'Accept-Encoding': 'gzip, deflate, br',
       'X-Requested-With': 'XMLHttpRequest',
       Accept: 'application/json',
       Host: 'open.work.weixin.qq.com' },
    form: 
   { content: '老板，#95加满！！！',
       anony: 'false',
       code: '2401ff997af1b6c1157235452f387851' } };

for (let index = 0; index < 200; index++) {
    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(body);
    });
}