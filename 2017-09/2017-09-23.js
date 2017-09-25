/**
 * axios  api : Post
 * https://www.npmjs.com/package/axios
 */


let axios = require('axios');
let got = require('got');
let assert = require('assert');

axios.post("http://192.168.219.129:3000/api/v1/topics",{
    accesstoken:"67cb2ef1-711a-4faa-ae70-0c1ba215643b",
    title: "测试",
    tab:"share",
    content:"hahdhadahdhahfdfdfdasfadsasdasdfadsdf"
}).then(function(res){
    console.log(res.data)
    assert.deepEqual(res.data.success, true);
}).catch(function (error) {
    console.log(error);
});



