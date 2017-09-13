/**
 * 邮件模块 https://nodemailer.com/about/
 */
const nodemailer = require('nodemailer');

let smtpConfig = {
    host: 'smtp.163.com',
    port: 465,
    secure: true, // upgrade later with STARTTLS
    auth: {
        user: '**********@163.com',
        pass: '********'
    }
};
// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport(smtpConfig)

// setup email data with unicode symbols
let mailOptions = {
    from: '"Fred Foo 👻" <15599098746@163.com>', // sender address
    to: '3378074761@qq.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: '已经测试完毕?', // plain text body
    html: '<b>已经测试完毕</b>' // html body
};

var app = require('./app')
var assert = require('assert')
describe('app', function () {
    after(function(done){
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
            console.log("发送成功")
        });
        done();
    })

    describe("sayHello()",function(){
        before(function(){
            console.log("before")
        })

        after(function(){
            console.log("after")
        })

        beforeEach(function(){
            console.log('beforeach')
        })

        afterEach(function(){
            console.log('aftereach')
        })

        it('sayHello should be return hello',function(){
            let result =  app.sayHello()
            assert.equal('hello',result)
        })
        it('sayhello should return a string',function(){
            let result =  app.sayHello()
            assert.equal('string',typeof(result))
        })
    })

    describe("add()",function(){
        it('add(1,2) should get the result 3',function(){
            let result = app.add(1,2)
            assert.equal(3,result)
        })
        it('add(2,2) should get the result 3',function(){
            let result = app.add(3,2)
            assert.equal(5,result)
        })
        it('add(3,2) should get the result 3',function(){
            let result = app.add(3,2)
            assert.equal(5,result)
        })
        it('add(4,2) should get the result 3',function(){
            let result = app.add(4,2)
            assert.equal(6,result)
        })
    })
    
});

