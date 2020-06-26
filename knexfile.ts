// Update with your config settings.
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const POSTGRES = process.env.POSTGRES;

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      host: "192.168.0.9",
      database: "crud_update",
      user: "postgres",
      password: POSTGRES,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: path.resolve(__dirname, "src", "database", "migrations"),
    },
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
