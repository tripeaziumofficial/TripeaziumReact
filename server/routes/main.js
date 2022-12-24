const express = require("express");
const router = express.Router();

// const restaurantController = require("../controller/restaurant");
// const hotelController = require("../controller/hotel");
const cafeController = require("../controller/cafe");
const userController = require('../controller/user');

router.get("/test", (req, res) => {
    res.send("API working ");
});

// router.post("/add_restaurant", restaurantController.createRestaurant);
// router.post("/add_hotel", hotelController.createHotel);
router.post("/add_cafe", cafeController.createCafe);

router.post('/login', userController.loginUser);
router.post('/signup', userController.createUser);

module.exports = router;