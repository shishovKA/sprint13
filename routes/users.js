const router = require('express').Router();
const { getUsers, getUserById, createUser } = require('../controllers/users.js');

router.get('/', getUsers);
router.get('/:userId', getUserById);
router.post('/', createUser);

module.exports = router;
