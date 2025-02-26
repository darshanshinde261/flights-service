const express = require("express")
const router = express.Router();

const {CityController} = require("../../controllers")
const { CityMiddlewares } = require("../../middlewares");

// /api/v1/cities POST
router.post('/',  
    CityMiddlewares.validateCreateRequest,
    CityController.createCity);

router.delete("/:id", CityController.destroyCity);

// /api/v1/cities PATCH
router.patch('/:id',
    CityMiddlewares.validateUpdateRequest,
    CityController.updateCity);

module.exports = router;