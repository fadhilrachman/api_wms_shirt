const express = require("express");
const router = express();
const {
  getAllData,
  createData,
  updateData,
  getById,
  destroy,
} = require("./controller");

router.get("/kategori", getAllData);
router.post("/kategori", createData);
router.put("/kategori/:id", updateData);
router.get("/kategori/:id", getById);
router.delete("/kategori/:id", destroy);

module.exports = router;
