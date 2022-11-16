const fac = require("../factorial/index");
const rat = require("../ratio/index");

const ratioAndFactorial = (a = 3, b = 4, c = 5) => {
  const ratio = rat(a, b);
  const factorial = fac(c);
  //   console.log(factorial);
  let ob = { ratio: ratio, factorial: factorial };
  return ob;
};
ratioAndFactorial();
// console.log(re);
module.exports = ratioAndFactorial;
// console.log("hi ra bhanu,em chesthunnav");
