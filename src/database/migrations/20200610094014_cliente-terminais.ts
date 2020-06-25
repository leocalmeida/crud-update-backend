import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable("cliente-terminais", (table) => {
    table.increments("id");
    table
      .integer("cliente_id")
      .notNullable()
      .references("id")
      .inTable("clientes");
    table
      .integer("terminal_id")
      .notNullable()
      .references("id")
      .inTable("terminais");
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable("cliente-terminais");
}
