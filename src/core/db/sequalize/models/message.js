module.exports = (sequelize, DataTypes) => {
    const message = sequelize.define('message', {
        _id: DataTypes.STRING,
        description: DataTypes.STRING,
        status: DataTypes.STRING
    });

    return message;
}