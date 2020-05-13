// Update with your config settings.
// const connectionStr =
//   process.env.DATABASE_URL || "postgres://localhost/schemes";
module.exports = {
  //   development: {
  //     client: "sqlite3",
  //     useNullAsDefault: true, // needed for sqlite
  //     connection: {
  //       filename: "./data/schemes.db3",
  //     },
  //     migrations: {
  //       directory: "./data/migrations",
  //     },
  //     seeds: {
  //       directory: "./data/seeds",
  //     },
  //     // add the following
  //     pool: {
  //       afterCreate: (conn, done) => {
  //         // runs after a connection is made to the sqlite engine
  //         conn.run("PRAGMA foreign_keys = ON", done); // turn on FK enforcement
  //       },
  //     },
  //   },
  development: {
    client: "pg",
    connection: "postgres://localhost/schemes",
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },
};
