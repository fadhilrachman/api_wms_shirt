const { type } = require("../../../models");

const attributes = ["id", "nama", "harga", "deskripsi"];
const getAllData = async (req, res) => {
  const limit = req.query.limit ? parseInt(req.query.limit) : null;
  const page = req.query.page ? parseInt(req.query.page) : null;
  const offset = (page - 1) * limit;
  try {
    const data = await type.findAndCountAll({
      attributes,
      limit: limit,
      offset: offset,
    });
    const count = data.count;
    let pagination = {
      count: count,
      totalPage: Math.ceil(count / limit),
    };
    res
      .status(200)
      .json({ offset, message: "succes get data", pagination, data });
  } catch (error) {
    res.status(400).json(error);
  }
};

const createData = async (req, res) => {
  try {
    const data = await type.create(req.body);
    res.status(201).json({ message: "succes get data", data });
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateData = async (req, res) => {
  const id = req.params.id;
  try {
    const update = await type.update(req.body, { where: { id } });
    console.log(update);
    update == 0
      ? res.status(404).json("invalid id")
      : res.status(200).json({ message: "succes update data", data: req.body });
  } catch (error) {
    res.status(400).json(error);
  }
};

const destroy = async (req, res) => {
  const id = req.params.id;
  try {
    const destroy = await type.destroy({ where: { id } });
    console.log(typeof destroy);

    !destroy
      ? res.status(404).json("invalid id")
      : res.status(200).json({ message: "succes delete data" });
  } catch (error) {
    res.status(400).json(error);
  }
};

const getById = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await type.findOne({ where: { id } });
    !data
      ? res.status(404).json("invalid id")
      : res.status(200).json({ message: "succes get data", data });
  } catch (error) {}
};

module.exports = { getAllData, getById, createData, destroy, updateData };
