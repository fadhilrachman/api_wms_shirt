const { kategori } = require("../../../models");

const attributes = ["id", "nama", "deskripsi"];

const getAllData = async (req, res) => {
  let limit = req.query.limit ? parseInt(req.query.limit) : null;
  let page = req.query.page ? parseInt(req.query.page) : null;
  let offset = (page - 1) * limit;
  try {
    const data = await kategori.findAndCountAll({
      attributes,
      limit,
      offset: offset,
    });
    const count = data.count;
    const totalPage = Math.ceil(count / limit);
    console.log(" page = " + page);

    let pagination = {
      count: count,
      totalPage,
    };
    if (totalPage != 1 && page < totalPage && page != null) {
      pagination.next = { page: page + 1 };
    }
    if (totalPage != 1 && page != null && page != 1 && page <= totalPage) {
      pagination.prev = { page: page - 1 };
    }
    res
      .status(200)
      .json({ message: "succes get data", pagination, data: data.rows });
  } catch (error) {
    res.status(400).json(error);
  }
};

const createData = async (req, res) => {
  try {
    const data = await kategori.create(req.body);
    res.status(201).json({ message: "succes create data data", data });
  } catch (error) {
    res.status(400).json(error);
  }
};

const getById = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await kategori.findOne({ where: { id }, attributes });
    !data
      ? res.status(404).json("invalid id")
      : res.status(201).json({ message: "succes create data data", data });
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateData = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await kategori.update(req.body, { where: { id } });
    !data
      ? res.status(404).json("invalid id")
      : res.status(200).json({ message: "succes update data", data: req.body });
  } catch (error) {
    res.status(400).json(error);
  }
};

const destroy = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await kategori.destroy({ where: { id } });
    !data
      ? res.status(404).json("invalid id")
      : res.status(200).json({ message: "succes delete data" });
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  getAllData,
  createData,
  getById,
  updateData,
  destroy,
};
