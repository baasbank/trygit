const MathLib = {
    add :  function(values) {
         let result = 0;
         values.forEach((value) => {
            result += value;
         });
         return result;
    }
}

const values = [4,3,5,7,8];
console.log(MathLib.add(values));