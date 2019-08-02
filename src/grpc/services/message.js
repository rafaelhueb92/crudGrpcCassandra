const grpc = require("grpc");
const messagesProto = grpc.load("./src/protos/message.proto");
const { message } = require("../../core/db/cassandra/models");
const { deparaObjetos } = require("../../core/utils/object");

module.exports = {
  messageService: messagesProto.MessageService.service,
  services: {
    list: (_, callback) => {
      message
        .findAll()
        .then(result => callback(null, result))
        .catch(err => callback(null, err));
    },
    find: ({ request }, callback) => {
      message
        .find({ id: request.id })
        .then(result => callback(null, result))
        .catch(err => callback(null, err));
    },
    insert: ({ request }, callback) => {
      message
        .insert({ ...request })
        .then(result => callback(null, result))
        .catch(err => callback(null, err));
    },
    update: ({ request }, callback) => {
      message.find({ id: request.id }).then(messgeFound => {
        const messageUpdate = deparaObjetos(request, messgeFound);
        message
          .update({ ...messageUpdate })
          .then(() => callback(null, messageUpdate))
          .catch(err => callback(null, err));
      });
    },
    delete: ({ request }, callback) => {
      message
        .remove({ id: request.id })
        .then(() => callback(null, messageUpdate))
        .catch(err => callback(null, err));
    }
  }
};
