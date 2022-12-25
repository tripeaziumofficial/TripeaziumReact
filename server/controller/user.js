const User = require("../models/User");

const createUser = (req, res) => {
    console.log(req.body);
  
    res.setHeader("Content-Type", "application/json");

    const newUser = new User({
        ...req.body,
        type: 'user'
    });

    const { name, password, email, college, contact } = req.body;

    if(!name || !password || !email || !college || !contact)
    {
        return res.status(400).json("Please fill all the fields");
    }

    newUser.save((err) => {
        console.log(err);
        if (err) res.status(400).json(`Error: ${err}`);
        else res.status(200).json("added a new user");
    });
}

const loginUser = async (req, res) => {
    // console.log(req.body);

    res.setHeader("Content-Type", "application/json");

    const { password, email } = req.body;

    if(!password || !email)
    {
        return res.status(400).json("Please fill all the fields");
    }

    const userExists = await User.findOne({ email: email });
    console.log(userExists.password)

    if(userExists)
    {
        if(password === userExists.password)
        {
            console.log(userExists.password);
            return res.status(200).json("User found successfully");
        }
        else
        {
            return res.status(400).json("Enter correct email / password");
        }
    }
    else
    {
        return res.status(400).json("User does not exist");
    }

}

module.exports = {
    createUser, 
    loginUser
}