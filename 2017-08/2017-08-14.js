/**
 * Node.js 断言使用
 * Assert
 * 
 * https://nodejs.org/api/assert.html
 * 
 * equal  
 * deepEqual 
 * deepStrictEqual
*/

const assert = require('assert');
const a = 1;
const b = "1";

// assert.equal(a,b)   ==  值
// assert.deepEqual(a,b) // ==
// assert.deepStrictEqual(a,b)  // ===

const obj1 = {
  a: {
    b: 1
  }
};
const obj2 = {
  a: {
    b: 1
  }
};

// assert.deepEqual(obj1,obj2)
// assert.equal(obj1,obj2)
assert.deepStrictEqual(obj1,obj2)
