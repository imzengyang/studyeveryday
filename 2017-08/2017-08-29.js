/**JavasScript 对象 */ 

// 声明对象
const user = {
    name: "xiaoming",
    email: "xiaoming@123.com",
    age: 23,
}

//访问对象

console.log("name", user.name)
console.log("name", user["name"])


// 修改对象的值

// user.name = "xiaohong"
user["name"] = "xiaoxiao"
console.log(user)

