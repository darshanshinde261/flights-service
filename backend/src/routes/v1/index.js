const express = require('express')
const router = express.Router();

const {InfoController} = require('../../controllers');
const cityRoutes = require('./city-routes');
const airportRoutes =  require('./airport-routes');
const airplaneRoutes = require("./airplane-routes");
const flightRoutes = require("./flight-routes")


router.get("/info",InfoController.info);
router.use("/airplanes",airplaneRoutes);
router.use("/cities",cityRoutes);
router.use("/airports",airportRoutes);
router.use("/flights",flightRoutes);

module.exports = router;