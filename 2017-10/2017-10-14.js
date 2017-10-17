// 集合是由一组无序且唯一（即不能重复）的项组成的

function Set() {
    let items = {};
    let length = 0;

    this.add = function (value) {
        if (!this.has(value)) {
            items[value] = value;
            length++;
            return true;
        } else {
            return false;
        }

    }
    this.remove = function (value) {
        if (this.has(value)) {
            delete items[value]
            length--;
            return true
        } else {
            return false;
        }
    }

    this.union = function(OtherSet){
        let unionset = new Set();
        let values =this.values();
        for(let i=0;i<values.length;i++){
            unionset.add(values[i])
        }

        values = OtherSet.values();
        for(let i=0; i<values.length; i++){
            unionset.add(values[i])
        }
        return unionset;
    }

    this.intersection = function(OtherSet){
        let interSet = new Set();
        let values = this.values();

        for(let i =0; i<values.length;i++){
            if(OtherSet.has(values[i])){
                interSet.add(values[i])
            }
        }
        return interSet;
    }

    this.difference = function(OtherSet){
        let diffSet = new Set();
        let values = this.values();

        for(let i=0; i<values.length;i++){
            if(!OtherSet.has(values[i])){
                diffSet.add(values[i])
            }
        }

        return diffSet;
    }


    this.subSet = function(OtherSet){
        if(this.size() > OtherSet.size()){
            return false
        }else{
            let values = this.values();
            for(let i=0;i<values.length;i++){
                if(!OtherSet.has(values[i])){
                    return false;
                }else{
                    return true;
                }

            }
        }
    }


    this.clear = function () {
        items = {}
    }
    this.has = function (value) {
        return value in items;
    }
    this.size = function () {
        return length;
    }
    this.values = function () {
        return Object.keys(items)
    }

}

var setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

var setB = new Set();
setB.add(3);
setB.add(4);
setB.add(5);
setB.add(6);

let setC = new Set();
setC.add(1);


let unionset  = setA.union(setB);
let interSet = setA.intersection(setB)
let diffSet = setA.difference(setB);

console.log(unionset.values())
console.log("interSetcion:", interSet.values())
console.log("diffSet",diffSet.values())
console.log("setC subset setA",setC.subSet(setA), "setC subset setB",setC.subSet(setB))




