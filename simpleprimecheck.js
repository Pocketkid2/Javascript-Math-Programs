var isPrime = function(x) {
    // Fermats little theorem
    return pow(2, x - 1) % x === 1;
};

println(isPrime(11));
