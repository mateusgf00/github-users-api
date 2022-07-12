const {Router} = require('express');
const userController = require('./app/controllers/UserController');

const router = Router();

router.get('/api/users', userController.showUsers);
router.get('/api/users/:username/details', userController.showDetailUser);
router.get('/api/users/:username/repos', userController.showRepositoriesUser);

module.exports = router;