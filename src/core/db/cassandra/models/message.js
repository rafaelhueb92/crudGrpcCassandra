const client = require("../index.js");
const cassandra = require("cassandra-driver");
const Mapper = cassandra.mapping.Mapper;
const UnderscoreCqlToCamelCaseMappings =
  cassandra.mapping.UnderscoreCqlToCamelCaseMappings;

const mappingOptions = {
  models: {
    message: {
      tables: ["message"],
      mappings: new UnderscoreCqlToCamelCaseMappings(),
      columns: {
        messageid: "id",
        description: "desc",
        status: "status"
      }
    }
  }
};

const messageMapper = new Mapper(client, mappingOptions);
const message = messageMapper.forModel("message");

module.exports = message;
