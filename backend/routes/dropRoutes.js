const express = require('express');
const router = express.Router();
const dropController = require('../controllers/dropController');
const verifyToken = require('../middlewares/verifyUser'); // Import the middleware
 
// Routes with middleware
router.get('/', verifyToken, dropController.getAll); // Verify token before accessing this route
router.get('/:id', verifyToken, dropController.getById); // Verify token before accessing this route
router.post('/', verifyToken, dropController.create); // Verify token before accessing this route
router.put('/:id', verifyToken, dropController.updateById); // Verify token before accessing this route
router.delete('/:id', verifyToken, dropController.deleteById); // Verify token before accessing this route

module.exports = router;