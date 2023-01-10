module.exports = (sequelize, DataTypes) => {
  const type = sequelize.define(
    "type",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nama: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      harga: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      deskripsi: DataTypes.TEXT,
    },
    {
      tableName: "type",
    }
  );
  return type;
};
