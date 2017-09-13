function sayHello() {
    return "hello"
}
function add(x, y) {
    return x + y;
}
exports.sayHello = sayHello
exports.add = add

const nodemailer = require('nodemailer')
let smtpConfig = {
    host: 'smtp.163.com',
    port: 465,
    secure: true, // upgrade later with STARTTLS
    auth: {
        user: '15599098746@163.com',
        pass: '2031741385'
    }
};

let transporter = nodemailer.createTransport(smtpConfig)

let mailOptions = {
    from: '"Fred Foo 👻" <15599098746@163.com>', // sender address
    to: '3378074761@qq.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world?', // plain text body
    html: '<b>Hello world?</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
});