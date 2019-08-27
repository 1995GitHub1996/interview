const axios = require('axios');
const _ = require('lodash');
const moment = require('moment');

async function remind() {
    const weatherData = await getWeather();
    const curDataWeather = _.find(weatherData.data, {date: timeString(new Date(), 'YYYY-MM-DD')})
    await send(curDataWeather);
    return 0;
  }

  function getWeather() {
    return axios.get('https://www.tianqiapi.com/api/?version=v1&city=%E9%83%91%E5%B7%9E').then((data) => {
        return data.data
    })
  }

  function send(wetaherData) {
    return axios.post('https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=464212f7-b572-4650-b164-e7a24b8d0c91',{
            msgtype: 'text',
            text: {
                content: `郑州${wetaherData.day}天气：\n\n气温: 最低温:${wetaherData.tem2}, 最高温:${wetaherData.tem1}, ${wetaherData.wea}\n空气质量：${wetaherData.air_level}\n贴心小提示：${wetaherData.air_tips} \n\n`,
                mentioned_mobile_list:["13137921493"]
            }
        })
  }

/**
 * 格式化一个时间字符串
 * @param time
 * @param format
 * @returns {*}
 */
function timeString(time, format) {
    const form = format ? format : 'YYYY-MM-DD HH:mm:ss';
    return moment(time).format(form);
}

remind().then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})