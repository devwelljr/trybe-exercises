const router = require("express").Router();

const createUser = require("../middlewares/createUser");
const getAllUsers = require("../middlewares/getAllUsers");
const findById = require("../middlewares/findById");
const attUser = require("../middlewares/attUser");

const {
  firstNameValidate,
  lastNameValidate,
  emailValidate,
  passValidate,
} = require("../middlewares/validations");

router.get("/:id", findById);

router.get("/", getAllUsers);

router.post(
  "/",
  firstNameValidate,
  lastNameValidate,
  emailValidate,
  passValidate,
  createUser
);

router.put(
  "/:id",
  firstNameValidate,
  lastNameValidate,
  emailValidate,
  passValidate,
  attUser,
);

module.exports = router;
