const express = require("express");

const router = express.Router();

const userRouter = require("./users");

/* GET home page. */
router.get("/", (req, res) => {
  res.redirect("/users");
});

router.use("/users", userRouter);

module.exports = router;
