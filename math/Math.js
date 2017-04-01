class Math {
    static add = function(values) {
         let result = 0;
         values.forEach((value) => {
            result += value;
         });
         return result;
    }
}