/**
 * mocha.js before  after  beforEach  afterEach
 * package.json
 */


var app = require('./app')
var assert = require('assert')
describe('app', function () {
    
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