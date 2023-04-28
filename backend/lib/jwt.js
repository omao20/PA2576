const dotenv = require('dotenv').config().parsed;
const jwt = require('jsonwebtoken');

function createJWT(UUID, email) {
  return jwt.sign({UUID, email}, dotenv.JWT_SECRET, {expiresIn: '1d'});
}

function verifyJWT(token) {
  return jwt.verify(token, dotenv.JWT_SECRET);
}

module.exports = {createJWT, verifyJWT};