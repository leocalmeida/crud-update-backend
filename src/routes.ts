import express from "express";
const routes = express.Router();

import Cliente from "./controllers/clientesControllers";
const cliente = new Cliente();

import Terminal from "./controllers/terminaisControllers";
const terminal = new Terminal();

import ClienteTerminal from "./controllers/clienteTerminalController";
const clienteTerminal = new ClienteTerminal();

routes.post("/clientes", cliente.create);
routes.get("/clientes", cliente.index);

routes.post("/terminais", terminal.create);
routes.get("/terminais/:id", terminal.show);
routes.put("/terminais/:id", terminal.change);

routes.get("/cliente/:id", clienteTerminal.show);

export default routes;
