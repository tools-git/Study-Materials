const https = require('https')
const fs = require('fs')

// 这里 Node 充当了一个客户端的作用
https.get('https://www.qiushibaike.com/8hr/page/4/', (res) => {
  const { statusCode } = res;
  const contentType = res.headers['content-type'];

  let error;
  /*if (statusCode !== 200) {
    error = new Error('请求失败。\n' +
                      `状态码: ${statusCode}`);
  } else if (!/^application\/json/.test(contentType)) {
    error = new Error('无效的 content-type.\n' +
                      `期望 application/json 但获取的是 ${contentType}`);
  }*/
  /*if (error) {
    console.error(error.message);
    // 消耗响应数据以释放内存
    res.resume();
    return;
  }*/

  // 接收对方服务器的响应效果
  res.setEncoding('utf8');
  let rawData = '';
  res.on('data', (chunk) => { rawData += chunk; });
  res.on('end', () => {
    try {
      const parsedData = JSON.parse(rawData);
      console.log(parsedData);
    } catch (e) {
      console.error(e.message);
    }
  });
}).on('error', (e) => { //监听错误
  console.error(`错误: ${e.message}`);
});