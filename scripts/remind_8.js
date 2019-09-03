const axios = require('axios');
const _ = require('lodash');
const moment = require('moment');

const JU_HE_HOST = 'http://v.juhe.cn';
const KEY = '69234b14a875f86a39f9053523926632';

async function remind() {
    const jokeData = await getJokeData();
    let content = (!_.isEmpty(jokeData)) ? jokeData : '网络跑丢喽~~'
    await send(content);
    return timeString(new Date(), 'YYYY-MM-DD') + ': ' + content
}

  function getJokeData() {
    return axios.get(`${JU_HE_HOST}/joke/randJoke.php?key=${KEY}`).then((data) => {
        return _.get(data, ['data', 'result' , '0', 'content'], {})
    })
  }

  function send(jokeData) {
    return axios.post('https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=464212f7-b572-4650-b164-e7a24b8d0c91',{
            msgtype: 'text',
            text: {
                content: `每日一笑😁：\n\n ${jokeData}\n\n`,
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