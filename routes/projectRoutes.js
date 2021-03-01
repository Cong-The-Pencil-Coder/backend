const express = require('express');
const projectController = require('../controllers/projectController');

const router = express.Router();

router.get('/', projectController.project_index);
router.get('/:id', projectController.project_details);
router.post('/', projectController.project_create);
router.delete('/:id', projectController.project_delete);

router.post('/features/:id', projectController.feature_add)
router.get('/features/:id', projectController.feature_get)

module.exports = router;