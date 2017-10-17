/**
 * JavaScript 字典
 */

function Dictionary() {
    let items = {};

    this.set = function (key, value) { 
        items[key] = value;
    }
    this.get = function (key) { 
        if(this.has(key)){
            return items[key]
        }else{
            return undefined;
        }
    }
    this.remove = function (key) { 
        if(this.has(key)){
            delete items[key];
            return true;
        }else{
            return false;
        }
    }
    this.has = function (key) {
        return key in items;
     }
    this.clear = function () { 
        items = {};
    }
    this.size = function () {
        return Object.keys(items).length;
     }
    this.keys = function () {
        return Object.keys(items);
     }
    this.values = function () {
        let values = [];
        for(let k in items){
            values.push(items[k]);
        }
        return values;
     }
    this.items = function () { 
        return items;
    }

}

let dictionary = new Dictionary();
dictionary.set("name", "jhon");
dictionary.set("phone", "18011231123");
console.log(dictionary.items())
console.log(dictionary.keys())
console.log(dictionary.values())




