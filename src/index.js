const grpc = require("grpc");
const { message } = require("./core/services");
const server = new grpc.Server();

server.addService(message.messageService, message.services);

const adressPort = "127.0.0.1:50051";

server.bind(adressPort, grpc.ServerCredentials.createInsecure());
console.log(`Serve running at http://${adressPort}`);
server.start();
