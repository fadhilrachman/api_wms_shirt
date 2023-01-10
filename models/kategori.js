module.exports = (sequelize, DataTypes) => {
  const kategori = sequelize.define(
    "kategori",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nama: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      deskripsi: DataTypes.TEXT,
      createdAt: {
        type: DataTypes.DATE,
      },
      updatedAt: DataTypes.DATE,
    },
    {
      tableName: "kategori",
    }
  );
  return kategori;
};
