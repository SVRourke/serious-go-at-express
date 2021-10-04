const express = require("express");
const router = express.Router({ mergeParams: true });

const controller = require("../controllers/items");

router.get("/", controller.index);
router.post("/", controller.create);
router.get("/new", controller.new).post(controller.create);

router.get("/:item_id/edit", controller.edit);
router.patch("/:item_id/", controller.update);

router.post("/:item_id/toggle", controller.toggle);

router.delete("/:item_id", controller.destroy);

module.exports = router;
