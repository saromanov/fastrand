var FastRand = function(beem, bound){
    if(!Number.isInteger(beem)) {
      throw 'beem argument is not integer'
    }
    if(!Number.isInteger(beem)) {
      throw 'bound argument is not integer'
    }
    if(bound <= 0) {
      throw 'bound argument cound not be less or equal 0';
    }
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

exports.New = function(beem, bound) {
  return FastRand(beem, bound);
}

