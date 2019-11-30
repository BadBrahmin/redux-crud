const express = require("express");
const router = express.Router();
const usercontroller = require("../controllers/userController");

router.post("/create", usercontroller.createUser);
router.get("/list", usercontroller.listUser);
router.put("/update/:id", usercontroller.updateUser);
router.delete("/delete/:id", usercontroller.deleteUser);

module.exports = router;
