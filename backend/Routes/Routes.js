const express = require("express");
const Products = require("../models/Products");
const UserModel= require("../models/UserModel");
const { comparePassword, hasPassword } = require("../helper/authhelper");
const Jwt = require("jsonwebtoken");
const verifytoken = require("../middleware/AuthMiddleware");

// route object
const router = express.Router();

router.post("/products",verifytoken,async (req, res) => {
  let product = new Products(req.body);
  let result = await product.save();
  res.send(result);
  console.log(result);
});

router.get("/getproducts",verifytoken,async (req, res) => {
  try {
    const prod = await Products.find();
    res.send(prod);
  } catch (error) {
    if (!error.response) {
      // network error
      this.errorStatus = "Error: Network Error";
    } else {
      this.errorStatus = error.response.data.message;
    }
  }
});

router.get("/getcategories/:id",verifytoken, async (req, res) => {
  const id = req.params.id;
  try {
    let result = await Products.find({ categories: { $regex: id } });
    res.send(result);
  } catch {
    if (!error.response) {
      // network error
      this.errorStatus = "Error: Network Error";
    } else {
      this.errorStatus = error.response.data.message;
    }
  }
});

router.get("/search/:key",verifytoken, async (req, res) => {
  const key1 = req.params.key;
  const key = String(key1);
  try {
    let result = await Products.findById(key);
    res.send(result);
  } catch {
    if (!error.response) {
      // network error
      this.errorStatus = "Error: Network Error";
    } else {
      this.errorStatus = error.response.data.message;
    }
  }
});

router.get("/find/:key",verifytoken, async (req, res) => {
  const key = req.params.key;
  let result = await Products.find({ title: { $regex: key } });
  res.send(result);
});

//Auth Routes are here:
//POST Register
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;

    //validation
    if (!name) {
      return res.send({ message: "Name is required" });
    }
    if (!email) {
      return res.send({ message: "Email is required" });
    }
    if (!password) {
      return res.send({ message: "Password is required" });
    }
    if (!phone) {
      return res.send({ message: "Phone is required" });
    }
    if (!address) {
      return res.send({ message: "Address is required" });
    }

    //check user
    const exisitinguser = await UserModel.findOne({ email });
    //exsting user check
    if (exisitinguser) {
      return res.status(200).send({
        sucess: false,
        message: "User Already Registered",
      });
    }

    //register user hashpassword
    const hashpassword = await hasPassword(password);
    //save

    const user = await new UserModel({
      name,
      email,
      password: hashpassword,
      phone,
      address,
    }).save();
    let result = user.toObject();


    const token = Jwt.sign(result, process.env.JWT_SECRET, {
      expiresIn: "2h",
    });
    res.status(200).send({ 
      success: true, 
      message: "Register successful",
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
      },
      auth:token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in registration",
      error,
    });
  }
});

//POST Login.....
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    //validate
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid email or password",
      });
    }


    //check user
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not registered",
      });
    }

    //match password from req and database
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }

    //token base login
    const token = Jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "2h",
    });
    res.status(200).send({ 
      success: true, 
      message: "Login successful",
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
      },
      auth:token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Login",
      error,
    });
  }
});

router.get('/checkout',verifytoken,(req,res) => {
   res.send("Welcome")
})

module.exports = router;
