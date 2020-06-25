import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable("terminais", (table) => {
    table.increments("id");
    table.string("funcao").notNullable();
    table.string("conexao_tipo").notNullable();
    table.string("conexao_endereco").nullable();
    table.string("conexao_usuario").nullable();
    table.string("conexao_senha").nullable();
    table.string("sat").nullable();
    table.string("impressora").nullable();
    table.string("automacao").nullable();
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable("terminais");
}
