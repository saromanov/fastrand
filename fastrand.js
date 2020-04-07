var FastRand = function(bound){
    value = -bound % bound;
    n = next(value);
    for (;n < value;) {
        n = next(n); 
    }
}

var next = function(n) {
    n ^= n >> 12;
    n ^= n >> 25;
    n ^= n >> 27;
    return n * 2685821657736338717;
}

