const ping = require('./ping');
const { createUser, allUsers } = require('./loginController');

module.exports = {
  ping,
  createUser,
  allUsers,
};
