function range(start, end) {
  var ans = []

}

const sumAll = function(int1, int2) {
  var sum = 0;
  
  if (typeof(int1) !== "number" || typeof(int2) !== "number"){
    return "ERROR";
  }

  if(int1 < 0 || int2 < 0){
    return "ERROR";
  }
  
  if (int1 > int2){
    for (i=int2; i <= int1; i++){
      sum += i;
    }
  }
  else {
    for (i=int1; i <= int2; i++){
      sum += i;
    }
  }
  return sum;
};


// Do not edit below this line
module.exports = sumAll;
