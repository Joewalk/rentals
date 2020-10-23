const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return console.log("please enter email and password");
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user || !(await user.validatePassword(password, user.password))) {
      return console.log("invalid email or password");
    }
    const token = jwt.sign({id: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
    
    res.cookie("jwt", token, {
      expires: new Date(Date.now() * 24 * 60 * 60 * 1000),
      httpOnly: true,
    });

    res.status(200).json({
      status: "success",
      token,
      data: user,
    });
  } catch (err) {
    console.log(err);
  }

  next();
};

exports.signup = async (req, res, next) => {
  try {
    const user = await User.create(req.body);

    const token = jwt.sign({id: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
    res.cookie("jwt", token, {
      expires: new Date(Date.now() * 24 * 60 * 60 * 1000),
      httpOnly: true,
    });
    res.status(200).json({
      status: "success",
      token: token,
      user: user,
    });
  } catch (err) {
    console.log(err.message);
  }

  next();
};


exports.protect =async (req, res, next) => {
 
  // get token from request
 
   try {
     let token;
      if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
      ) {
        token = req.headers.authorization.split(' ')[1];
      } 

      if(!token) return console.log('Please login to get access')
      
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      const currentUser = await User.findById(decoded.id)

      if(!currentUser) return console.log('token expired')
      
        req.user = currentUser;
        res.locals.user = currentUser;
      next()
  } catch (err) {
    console.log(err.message);
  }

};
