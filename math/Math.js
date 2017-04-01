const MathLib = {
    add :  function(values) {
         let result = 0;
         values.forEach((value) => {
            result += value;
         });
         return result;
    }
}

const values = [4,6,3,7];
console.log(MathLib.add(values));