/**
 * https://www.npmjs.com/package/axios
 */

let axios = require('axios')

let url = "http://192.168.219.129:3000/api/v1"


var assert = require('assert');
axios.get(url+"/topics?page=1&tab=ask&limit=1&mdrender=false").then((res)=>{
    console.log(res.data);
    let issuccess = res.data.success;
    assert.deepEqual(true, issuccess)

    let title = res.data.data[0].title;
    console.log("title",title)

    assert.deepEqual("请问中国cnodejs社区你好啊",title)
})
