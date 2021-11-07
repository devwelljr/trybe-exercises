const router = require("express").Router();
const { userValidate, emailValidate, passValidate } = require("./validations");

router.post(
  "/register",
  userValidate,
  emailValidate,
  passValidate,
  (_req, res) => res.status(201).json({ message: "user created" })
);

router.post(
  "/login",
  userValidate,
  emailValidate,
  passValidate,
  (_req, res) => res.status(200).json({ "token": "86567349784e" })
);

module.exports = router;
