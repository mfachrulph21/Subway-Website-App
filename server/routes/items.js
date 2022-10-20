const express = require('express');
const itemController = require('../controllers/itemController');
const router = express.Router();

router.get('/', itemController.showItems)
router.get('/:id', itemController.getItem)
router.post('/', itemController.addItem)
router.put('/:id', itemController.editItem)
router.delete('/:id', itemController.deleteItem)

module.exports = router