const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const { authenticateToken } = require('../middleware/authMiddleware');

router.use(authenticateToken); // Protect all routes below
router.get('/', taskController.getTasks);
router.post('/', taskController.createTask);

module.exports = router;