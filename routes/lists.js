const express = require("express");

const router = express.Router({ mergeParams: true });
const itemRouter = require("./items");
const controller = require("../controllers/lists");

router.get("/", controller.index);
router.route("/new").get(controller.new).post(controller.create);

router.delete("/:list_id", controller.destroy);

router.use("/:list_id/items", itemRouter);
module.exports = router;
