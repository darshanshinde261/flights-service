const express = require("express");
const router = express.Router();

const { FlightController } = require("../../controllers");
const { FlightMiddlewares } = require("../../middlewares");

// /api/v1/cities POST
router.post(
  "/",
  FlightMiddlewares.validateCreateRequest,
  FlightController.createFlight
);

router.get(
  "/",
  FlightController.getAllFlights
);

router.get(
  "/:id",
  FlightController.getFlight
);

router.patch(
  '/:id/seats',
  FlightMiddlewares.validateUpdateSeatsRequest,
  FlightController.updateSeats
)

module.exports = router;
