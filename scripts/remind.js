const axios = require('axios');
const _ = require('lodash');
const moment = require('moment');

async function remind() {
    const weatherData = await getWeather();
    const curDataWeather = _.find(weatherData.data, {date: timeString(new Date(), 'YYYY-MM-DD')})
    await send(curDataWeather);
    return 0
  }

  function getWeather() {
    return axios.get('https://www.tianqiapi.com/api/?version=v1&city=%E9%83%91%E5%B7%9E').then((data) => {
        return data.data
    })
  }

  function send(wetaherData) {
    return axios.post('https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=103a6a5b-7d64-442a-86c9-07d2dc412c7c',{
            msgtype: 'text',
            text: {
                'content': JSON.stringify(wetaherData, null, 4)
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