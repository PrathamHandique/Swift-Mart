const express = require('express');
const { getItemController, addItemController } = require('../controllers/itemcontroller');
const router = express.Router();

//routes
//Method: GET
router.get('/get-item',getItemController)
//Method: POST
router.post('/add-item',addItemController)


module.exports = router;