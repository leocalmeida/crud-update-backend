import { Request, Response } from "express";
import connection from "../database/connection";

class Terminais {
  async create(request: Request, response: Response) {
    const {
      funcao,
      conexao_tipo,
      conexao_endereco,
      conexao_usuario,
      conexao_senha,
      sat,
      impressora,
      automacao,
      medidor,
    } = request.body;

    const clienteId = request.query.cliente_id;
    console.log("clienteId", clienteId);

    const trx = await connection.transaction();

    const idTerminal = await trx("terminais")
      .insert(
        {
          funcao,
          conexao_tipo,
          conexao_endereco,
          conexao_usuario,
          conexao_senha,
          sat,
          impressora,
          automacao,
          medidor,
        },
        "id"
      )
      .then((id) => id[0]);

    const integracao = await trx("cliente-terminais")
      .insert(
        {
          cliente_id: Number(clienteId),
          terminal_id: Number(idTerminal),
        },
        "id"
      )
      .then((id) => id[0]);

    await trx.commit();

    return response.json({
      id: integracao,
      cliente_id: clienteId,
      terminal_id: idTerminal,
    });
  }
  async show(request: Request, response: Response) {
    const { id } = request.params;
    const data = await connection("terminais")
      .where("id", id)
      .select("*")
      .first();
    return response.json(data);
  }

  async change(request: Request, response: Response) {
    const { id } = request.params;
    // const {
    //   funcao,
    //   conexao_tipo,
    //   conexao_endereco,
    //   conexao_usuario,
    //   conexao_senha,
    //   sat,
    //   impressora,
    //   automacao,
    // } = request.body;
    const data = request.body;

    const result = await connection("terminais").where("id", id).update(data);

    return response.json(result);
  }
}

export default Terminais;
