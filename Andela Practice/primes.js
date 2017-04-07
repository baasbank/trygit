function primes(number) {
    var odd = [];
    var prime = [2];
    for (var i = 3; i < number; i++) {
        if (!(i % 2 == 0)) {
            odd.push(i);
        }
    }
    console.log(odd);
    
        for (var j in odd){
            for (var i = 0; i < number; i++){
                if (odd[i] % j !== 0 ) {
                    prime.push(j);
                }

    }
}
    return prime;
}
console.log(primes(10));