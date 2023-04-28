const express = require('express');
const JWT = require('../lib/jwt');
const dbManger = require('./dbController');
const bcrypt = require('bcrypt');

const router = express.Router();

/**
 * @api {get} /api/users/ get all users
*/
router.get('/', async (req, res) => { 
  const {authorization} = req.headers;

  if(!JWT.verifyJWT(authorization)) {
    res.status(401).send('Unauthorized');
  }

  try {
    const users = await dbManger.getAllUsers();
    res.status(200).send(users);
  } catch (error) { 
    res.status(500).send(error.message);
  }
});

/**
 * @api {post} /api/users/ create a new user
*/
router.post('/', async (req, res) => { 
  const {username, email, password, firstname, lastname, isStudent} = req.body;

  try {
    const encryptedPassword = await bcrypt.hashSync(password, 10);
    const user = await dbManger.createUser(username, email, encryptedPassword, firstname, lastname, isStudent);
    res.status(200).send(user);
  } catch (error) { 
    res.status(500).send(error.message);
  }
});

router.post('/login', async (req, res) => {
  const {email, password} = req.body;
  console.log(email, password)
  try {
    const user = await dbManger.getUserByEmail(email);
    if(!user) {
      res.status(404).send('User not found');
      return;
    }
    console.log(password, user[0])
    if(!bcrypt.compareSync(password, user[0].password)) {
      res.status(401).send('Unauthorized');
      return;
    }

    const token = JWT.createJWT(user.uuid, user.email);
    res.status(200).send({
      user,
      token
    });
  } catch (error) { 
    console.log(error);
    res.status(500).send(error);
  }
});

router.get('/:uuid', async (req, res) => { 
  const {uuid} = req.params;
  const {authorization} = req.headers;

  if(!JWT.verifyJWT(authorization)) {
    res.status(401).send('Unauthorized');
  }

  try {
    const user = await dbManger.getUserByUUID(uuid);
    res.status(200).send(user);
  } catch (error) { 
    res.status(500).send(error.message);
  }
});

module.exports = router;