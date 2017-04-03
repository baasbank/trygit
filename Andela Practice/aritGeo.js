function aritGeo(arr){
    var diff = arr[1] - arr[0];
    var ratio = arr[1]/arr[0];

    var arithmetic = true;
    var geometric = true;

    for (var i = 0; i < arr.length- 1; i++){
        if (arr[i + 1] - arr[i] !== diff ) {
            arithmetic = false;
        }
        if (arr[i + 1] / arr[i] !== ratio ) {
            geometric = false;
        }
    }
    if (arithmetic == true) {
        return "arithmetic";
    }
    else if (geometric == true) {
        return "geometric";
    }
    else {
        return "Not an arithmetic or geometric progression."
    }
    
}

console.log(aritGeo([3,9,15,21,27,28]));
console.log(aritGeo([3,9,15,21,27]));
console.log(aritGeo([4,2,1,0.5]));