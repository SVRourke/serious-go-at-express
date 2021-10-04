const express = require("express");
const router = express.Router({ mergeParams: true });

const controller = require("../controllers/items");

router.get("/", controller.index);
router.post("/", controller.create);
router.get("/new", controller.new).post(controller.create);

router.route("/:tag_id/edit").get(controller.edit).post(controller.update);

router.post("/:tag_id/toggle", controller.toggle);

router.delete("/:tag_id", controller.destroy);

module.exports = router;
