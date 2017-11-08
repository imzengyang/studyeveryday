/**
 * 冒泡排序
 */

function ArrayList(){
    let array = [];
    
    this.insert = function(item){
        array.push(item)
    }
    
    this.toString = function(){
        return array.join();
    }

    this.bubbleSort = function(){
        let length = array.length;
        for(let i=0;i<length;i++){
            for (let j=0; j< length-1;j++){
                if(array[j] > array[j+1]){
                    swap(j,j+1);
                }
            }
        }
    }

    let swap = function(index1,index2){
        let temp= array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
    }
}


let createNonSortedArray = function(size){
    let array = new ArrayList();

    for (let i=size;i>0;i--){
        array.insert(i);
    }
    return array;
}

let array = createNonSortedArray(10);
console.log(array.toString())
array.bubbleSort();
console.log(array.toString());