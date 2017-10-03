/**
 * javascript 函数
 * 面向对象编程
 */


// funtion
function sayHello (name){
    console.log("hello",name)
}
sayHello("xiaoming");

// 

let saygoodbay = function(name){
    console.log("goodbye",name)
}
saygoodbay("xiaohong")



// OOP

// function Book (title,page,isbn){
//     this.title = title;
//     this.page = page;
//     this.isbn = isbn;


//     this.PrintPage = function(){
//         console.log(this.page)
//     }
// }

// let book = new Book("learn JavaScript ", 300, "128838283828328")
// book.PrintPage();

function Book (title,page,isbn){
    this.title = title;
    this.page = page;
    this.isbn = isbn;
}

Book.prototype.PrintIsbn = function(){
    console.log(this.isbn)
}

let book = new Book("javascript",12,"12321312312")
book.PrintIsbn();