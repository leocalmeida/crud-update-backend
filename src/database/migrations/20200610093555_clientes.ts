import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable("clientes", (table) => {
    table.increments("id");
    table.string("nome").notNullable();
    table.string("razao").notNullable();
    table.string("cnpj").notNullable();
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable("clientes");
}
