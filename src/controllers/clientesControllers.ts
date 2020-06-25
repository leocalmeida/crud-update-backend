import { Request, Response } from "express";
import connection from "../database/connection";

class Clientes {
  async create(request: Request, response: Response) {
    const { nome, razao, cnpj } = request.body;
    const [id] = await connection("clientes").returning("id").insert({
      nome,
      razao,
      cnpj,
    });

    return response.json(id);
  }
  async index(request: Request, response: Response) {
    const data = await connection("clientes").select("*");

    return response.json(data);
  }
}

export default Clientes;
