const ftoc = function(fahrenheit) {
  celsius = (fahrenheit - 32) / 1.8;

  return Math.round(celsius);
};

const ctof = function(celsius) {
  fahrenheit = (celsius * 1.8) +32;
  
  return Math.round(fahrenheit);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
