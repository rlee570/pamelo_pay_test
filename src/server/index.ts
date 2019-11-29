import express from "express";
import routes from "../routes";
import morgan from "morgan";

const server = express();

server.use(morgan("combined"));
server.use(express.json());
server.use("/", routes);

export default server;
