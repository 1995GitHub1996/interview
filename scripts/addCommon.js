var request = require('request');

var options = { method: 'POST',
    url: 'https://open.work.weixin.qq.com/wwopen/colleague/comment',
    qs: { _: '1596193450693' },
    headers: 
    { 'cache-control': 'no-cache',
        'Postman-Token': 'c03bfd73-b76f-41fd-9098-fc8882e598ea,9cb3f0e8-5943-405f-932a-b95f411a2ed0',
        'Cache-Control': 'no-cache',
        Cookie: 'wwapp.cst=C2B4CB89FF20858DB83FA4CAE86EF7C5688465D13A26150B82E9335821406E3AFC92798616936232A7532D3BD07B52E3; wwapp.deviceid=13ce8820-a8cf-40d6-9daa-8b587c267299; wwapp.st=530639D81B4B379A0BFAFC557AC400D94E81A98B0D475439579FD1C88578ADE4E481E575A84D7ED3C8BA0134C5FD667DA47BB3A738C4B4DC2690E63DEEC8FBA07090704707E51516D19EF26853AD94C4807568E87EB2D910BCF413B4306E7ED2F1BC073454F190AF1CED618FAABC6138AD4B4ACDDB82D99649AEC97D41231A8658062D7DB57B9D4991711AC3A21BD8EB; wwapp.vid=1688851114311215; wwrtx.vst=cilZ73N5sIEn3w76bo0D1cH9DzJb5GOLvTJNSM16XRDhE329FmC-FMr_medPiKiduD4et8gEY2RWDHAJO_c6r5zR0otORZJ3MmrtXd-6yodnhLsFIuIDy6XJ_vJfHI_uDpeTqPNjWj17BpBCajeLfOo3NsnpfocE0CJmZVefP1QwkGiwsmujeMZhIYCXfErvV3bwPyRA3CyxbAakeLJa__RXxPoblY17qPZC2_CZ9_UwPmcwPEWvuDPWLgmQWVKeXzLVq20Yk9DsltCG4xNiWA; wwrtx.sid=mTQPIC9puFFVRHisjQSNOawrrh4hOMyhzaYIWg-6uHitHw_wWr1y1UcMv7Bso6-K; _qpsvr_localtk=1596161952348; wwopen.open.sid=wTqnNszULOnm4oLMOZ8oEN5WtN0HbRF5g0knHqtfi6Vs; wwrtx.ref=direct; wwrtx.i18n_lan=zh,wwapp.cst=C2B4CB89FF20858DB83FA4CAE86EF7C5688465D13A26150B82E9335821406E3AFC92798616936232A7532D3BD07B52E3; wwapp.deviceid=13ce8820-a8cf-40d6-9daa-8b587c267299; wwapp.st=530639D81B4B379A0BFAFC557AC400D94E81A98B0D475439579FD1C88578ADE4E481E575A84D7ED3C8BA0134C5FD667DA47BB3A738C4B4DC2690E63DEEC8FBA07090704707E51516D19EF26853AD94C4807568E87EB2D910BCF413B4306E7ED2F1BC073454F190AF1CED618FAABC6138AD4B4ACDDB82D99649AEC97D41231A8658062D7DB57B9D4991711AC3A21BD8EB; wwapp.vid=1688851114311215; wwrtx.vst=cilZ73N5sIEn3w76bo0D1cH9DzJb5GOLvTJNSM16XRDhE329FmC-FMr_medPiKiduD4et8gEY2RWDHAJO_c6r5zR0otORZJ3MmrtXd-6yodnhLsFIuIDy6XJ_vJfHI_uDpeTqPNjWj17BpBCajeLfOo3NsnpfocE0CJmZVefP1QwkGiwsmujeMZhIYCXfErvV3bwPyRA3CyxbAakeLJa__RXxPoblY17qPZC2_CZ9_UwPmcwPEWvuDPWLgmQWVKeXzLVq20Yk9DsltCG4xNiWA; wwrtx.sid=mTQPIC9puFFVRHisjQSNOawrrh4hOMyhzaYIWg-6uHitHw_wWr1y1UcMv7Bso6-K; _qpsvr_localtk=1596161952348; wwopen.open.sid=wTqnNszULOnm4oLMOZ8oEN5WtN0HbRF5g0knHqtfi6Vs; wwrtx.ref=direct; wwrtx.i18n_lan=zh; wwrtx.vst=Mn2ID723bXIvobL6CaiBGK_1Ump57RER15TsO8dB3xr2Oxo8Ohh_dQLs45BUn_mCIpH7ySKL2moB4tlQPk6bmHAM0hPqEOgDOQO1G6-2r-DkdMh8NnXdXNgizkhDMDrq6kEcoR73M7PnYlqM8xFic7M5B4r-cSdtLVcyVZB1VO5A7xcmhVKrdS8kxLVHzWElUKXcyVIrYdTNlWCcrmuXxk4GonugDC4-p1n4FE6T1Mm9Ls1wX1qMzRi33jxSyYgjCWlgxgIxChhvp8nshNyr-g',
        Referer: 'https://open.work.weixin.qq.com/wwopen/colleague/detail?code=2401ff997af1b6c1157235452f387851&version=3.0.8.2067&platform=mac',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/605.1.15 (KHTML, like Gecko) wxwork/3.0.8 (MicroMessenger/6.2) WeChat/2.0.4',
        Connection: 'keep-alive',
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
        code: 'bdf7ad66e64233e99f68f01eb1640aa9' } };

for (let index = 0; index < 200; index++) {
    const arr = ['Perfect girl！！', '蒙蒙加油！！', '加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油', '加油奥利给！！','加油加油加油！！', '怒赞!!!!', '小仙女加油！！', '你是最bang的！！！', '你是最棒的！！！'];
    options.form.content = arr[Math.floor((Math.random()*arr.length))];
          
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        console.log(body);
    });
}
    