import { Request, Response } from "express";
import connection from "../database/connection";

class ClienteTerminal {
  async show(request: Request, response: Response) {
    const { id } = request.params;

    const cliente = await connection("clientes")
      .where("clientes.id", Number(id))
      .select("*")
      .first();

    const terminais = await connection("terminais")
      .join(
        "cliente-terminais",
        "terminais.id",
        "=",
        "cliente-terminais.terminal_id"
      )
      .where("cliente-terminais.cliente_id", Number(id))
      .select("terminais.*");
    return response.json({
      cliente,
      terminais,
    });
  }
}

export default ClienteTerminal;
