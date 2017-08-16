'use strict'
function main(arr){
    var resArray = [];
    arr.forEach(function (elem) {
        if(arr.indexOf(elem)!== arr.lastIndexOf(elem)){
            if(resArray.indexOf(elem)<0){
                resArray.push(elem);
            }
        }
    })
    console.log("Array:" + arr +"\n"+ "RepeatedChar:" + resArray);  //resArray;
}

var arr = ['a','ab','ed','da','a','ed','b'];
main(arr);