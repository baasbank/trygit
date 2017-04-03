function getPrimes(num){
    for (var i = 2; i<num; i++){
        if(num % i == 0){
            return false;
        }
    }
    return true;
}

function display(n){
    var arr = [2];
    for (var i = 3; i < n; i += 2){
        if (getPrimes(i)){
            arr.push(i);
        }
    }
    return arr;
}

var check = display(200);
console.log(check);