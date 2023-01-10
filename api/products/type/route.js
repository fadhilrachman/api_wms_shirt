const express = require("express");
const router = express();
const {
  getAllData,
  createData,
  getById,
  destroy,
  updateData,
} = require("./controller");

router.get("/type", getAllData);
router.post("/type", createData);
router.get("/type/:id", getById);
router.delete("/type/:id", destroy);
router.put("/type/:id", updateData);

module.exports = router;
