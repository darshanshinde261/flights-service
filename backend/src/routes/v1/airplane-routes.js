const express = require("express")
const router = express.Router();

const {AirplaneController} = require("../../controllers")
const { AirplaneMiddlewares } = require("../../middlewares");

router.post('/',
    AirplaneMiddlewares.validateCreateRequest,
    AirplaneController.createAirplane);

router.get('/',
    AirplaneController.getAirplanes
);

router.get('/:id',
    AirplaneController.getAirplane
)

router.delete('/:id',
    AirplaneController.destroyAirplane
)

router.patch('/:id',
    AirplaneMiddlewares.validateUpdateRequest,
    AirplaneController.updateAirplane
)


module.exports = router;