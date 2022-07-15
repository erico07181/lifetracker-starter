// const { default: generate } = require("@babel/generator");
// const jwt = require("jsonwebtoken");
// const { secret } = require("../config");

// // const generateToken = (data) => jwt.sign(data, secret, { expiresIn: "24h" });

// function generateToken(data) {
// 	const token = jwt.sign(data, SECRET_KEY);
// 	return token;
// }

// const createUserJwt = (user) => {
//   const payload = {
//     email: user.email,
//   };

//   console.log(payload);

//   return generateToken(payload);
// };

// const validateToken = (token) => {
//   try {
//     const decoded = jwt.verify(token, secret);
//     return decoded;
//   } catch (err) {
//     return {};
//   }
// };

// module.exports = {
//   generateToken,
//   createUserJwt,
//   validateToken,
// };

const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");

function generateToken(data) {
  const token = jwt.sign(data, SECRET_KEY);
  return token;
}

function createUserJwt(user) {
  const payload = {
    email: user.email,
    isAdmin: user.isAdmin || false,
  };

  return generateToken(payload);
}

function validateToken(token) {
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    return decoded;
  } catch {
    return {};
  }
}

module.exports = {
  generateToken,
  createUserJwt,
  validateToken,
};
