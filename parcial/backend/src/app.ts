import ServerFactory from "./express/infrastructure/factory/ServerFactory";
const server = ServerFactory.createServer([])
server.start()