// const User = require("../models/user");

const Joi = require("joi");

//promise
module.exports = {
  index: async (req, res, next) => {
    // console.log("req", req);
    res.json("home");
  }
};
