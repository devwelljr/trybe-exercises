const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

// console.log(uppercase('aaa', (stringMaiuscula) => {
//   return stringMaiuscula;
// }));

module.exports = uppercase;