const Pg = require("../models/Pg");

const createPg = (req, res) => {
    console.log(req.body);
  
    res.setHeader("Content-Type", "application/json");

    const newPg = new Pg({
        ...req.body,
    });

    newPg.save((err) => {
        console.log(err);
        if (err) res.status(400).json(`Error: ${err}`);
        else res.status(200).json("added a new Pg");
    });
}

const getPgs = async (req, res) => {
    // console.log(req.body);
    // console.log("hi")
  
    res.setHeader("Content-Type", "application/json");

    const data = await Pg.find({});

    if(data)
    {
        return res.status(200).json(data);
    }
    res.status(400).json("no data");
}

module.exports = {
    createPg,
    getPgs
}