const express = require("express");
const router = express.Router();

// const restaurantController = require("../controller/restaurant");
// const hotelController = require("../controller/hotel");
const cafeController = require("../controller/cafe");

router.get("/test", (req, res) => {
    res.send("API working ");
});

// router.post("/add_restaurant", restaurantController.createRestaurant);
// router.post("/add_hotel", hotelController.createHotel);
router.post("/add_cafe", cafeController.createCafe);

module.exports = router;