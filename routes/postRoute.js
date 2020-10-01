const express = require("express")
const router = express.Router(); 
const blogController = require("../controllers/BlogController")

router.get("/",blogController.index);
router.get("/create",blogController.create);
router.post("",blogController.store);
router.get("/:id",blogController.show);
router.delete("/:id",blogController.destroy);


module.exports = router;