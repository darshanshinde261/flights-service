const express = require('express')
const router = express.Router();

const {InfoController} = require('../../controllers');
const cityRoutes = require('./city-routes');
const airportRoutes =  require('./airport-routes');
const airplaneRoutes = require("./airplane-routes");

router.get("/info",InfoController.info);
router.use("/airplanes",airplaneRoutes);
router.use("cities",cityRoutes);
router.use("cities",airportRoutes);

module.exports = router;