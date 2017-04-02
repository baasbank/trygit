function minMax (arr) {
    if (Array.isArray(arr)) {
        var max = Math.max(...arr);
        var min = Math.min(...arr);
        return [max, min];

}
    else {
        return "Arrays only";
    }
}
var check = minMax ([1, 5, 8, 98, 40000000, 5000000, -2]);
console.log(minMax(5));
console.log(check);