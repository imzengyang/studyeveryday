

function sayHello(user){
    console.log('hello',user);
}

function sayWelcome(user){
    console.log('welcome',user);
}

module.exports.sayHello = sayHello;
module.exports.sayWelcome = sayWelcome;