const Cafe = require("../models/Cafe");

const createCafe = (req, res) => {
    console.log(req.body);
  
    res.setHeader("Content-Type", "application/json");

    const newCafe = new Cafe({
        ...req.body,
    });

    newCafe.save((err) => {
        console.log(err);
        if (err) res.status(400).json(`Error: ${err}`);
        else res.status(200).json("added a new Cafe");
    });
}

const getCafes = async (req, res) => {
    // console.log(req.body);
    // console.log("hi")
  
    res.setHeader("Content-Type", "application/json");

    const data = await Cafe.find({});

    if(data)
    {
        return res.status(200).json(data);
    }
    res.status(400).json("no data");
}

module.exports = {
    createCafe,
    getCafes
}