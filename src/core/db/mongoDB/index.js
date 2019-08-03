const mongoose = require("mongoose");
const {
    mongoCx
} = require("../../config/default.json");

const options = {
    useNewUrlParser: true
};

const abrirConexao = () => mongoose.connect(mongoCx .connectionString, options);
const fecharConexao = () => mongoose.disconnect();

module.exports = {
    abrirConexao,
    fecharConexao
};