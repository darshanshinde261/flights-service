const express = require("express")
const router = express.Router();

const {AirportController} = require("../../controllers")
const { AirportMiddlewares } = require("../../middlewares");

router.post('/',
    AirportMiddlewares.validateCreateRequest,
    AirportController.createAirport);

router.get('/',
    AirportController.getAirports
);

router.get('/:id',
    AirportController.getAirport
)

router.delete('/:id',
    AirportController.destroyAirport
)

router.patch('/:id',
    AirplaneMiddleware.validateUpdateRequest,
    AirportController.updateAirport
)


module.exports = router;