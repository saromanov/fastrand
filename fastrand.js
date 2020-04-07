var FastRand = function(beem, bound){
    value = -bound % bound;
    n = next(beem);
    for (;n < value;) {
        n = next(n); 
    }
    return n % bound;
}

var next = function(n) {
    n ^= n >> 12;
    n ^= n >> 25;
    n ^= n >> 27;
    return n * 2685821657736338717;
}

