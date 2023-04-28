const {Sequelize, QueryTypes} = require('sequelize');
const dotenv = require('dotenv').config().parsed;
const { v4: uuidv4 } = require('uuid');

const db = new Sequelize(dotenv.DB_NAME, dotenv.DB_USER, dotenv.DB_PASS, {
  host: dotenv.DB_HOST,
  dialect: 'mysql',
  logging: false
});

async function getAllUsers() {
  return await db.query('SELECT * FROM users', {type: QueryTypes.SELECT});
}

async function createUser(username, email, password, firstname, lastname, isStudent) {
  return await db.query(`INSERT INTO users (uuid, username, email, password, firstname, lastname, is_student) VALUES ('${uuidv4()}', '${username}', '${email}', '${password}', '${firstname}', '${lastname}', ${isStudent})`, {type: QueryTypes.INSERT});
}

async function getUserByEmail(email) {
  return await db.query(`SELECT * FROM users WHERE email = '${email}'`, {type: QueryTypes.SELECT});
}

async function getUserByUUID(uuid) {
  return await db.query(`SELECT * FROM users WHERE uuid = '${uuid}'`, {type: QueryTypes.SELECT});
}
module.exports = {getAllUsers, createUser, getUserByEmail, getUserByUUID};