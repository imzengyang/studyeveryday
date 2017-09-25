

let axios = require('axios');
let assert = require('assert');

describe('发帖',function(){
    it('字数太少', async function(){
        try {
            let res =  await axios.post("http://192.168.219.129:3000/api/v1/topics",{
                accesstoken:"67cb2ef1-711a-4faa-ae70-0c1ba215643b",
                title: "测",
                tab:"share",
                content:"hahdhadahdhahfdfdfdasfadsasdasdfadsdf"
            }) 
        } catch (error) {
            console.log("error",error.response.data)
            assert("false", error.response.data.success)
        }
    })
})

// axios.post("http://192.168.219.129:3000/api/v1/topics", {
//     accesstoken: "67cb2ef1-711a-4faa-ae70-0c1ba215643b",
//     title: "测",
//     tab: "share",
//     content: "hahdhadahdhahfdfdfdasfadsasdasdfadsdf"
// }).then((res)=>{
//     console.log("scuccess",res)
// }).catch((err)=>{
//     console.log("error",err)
// })
