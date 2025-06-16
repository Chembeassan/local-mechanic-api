const express = require('express');
const router = express.Router();
const mechanicController = require('../controllers/mechanics');
const { validateMechanic } = require('../middleware/validate');

router.post('/', validateMechanic, mechanicController.createMechanic);
router.get('/', mechanicController.getAllMechanics);
router.get('/:id', mechanicController.getMechanic);
router.put('/:id', validateMechanic, mechanicController.updateMechanic);
router.delete('/:id', mechanicController.deleteMechanic);

module.exports = router;
