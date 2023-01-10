const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 5000;
const kategoriRouter = require("./api/products/kategori/route");
const typeRouter = require("./api/products/type/route");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/wms/shirt", kategoriRouter);
app.use("/api/wms/shirt", typeRouter);

app.listen(port, (req, res) => {
  console.log(`prot = ${port}`);
});
