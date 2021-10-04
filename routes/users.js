var express = require("express");
var router = express.Router({mergeParams: true});
const listRouter = require("./lists");
const controller = require("../controllers/users");

router.get("/", function (req, res, next) {
  res.redirect("/users/new");
});

// Render New User Form
router.route("/new").get(controller.new).post(controller.create);

router.use("/:user_id/lists", listRouter);

module.exports = router;
