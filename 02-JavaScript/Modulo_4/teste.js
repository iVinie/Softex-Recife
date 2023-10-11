const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "password",
  database: "provabot",
});
sequelize
  .authenticate()
  .then(() => {
    console.log("Conexão bem-sucedida ao banco de dados.");
  })
  .catch((error) => {
    console.error("Erro ao conectar ao banco de dados:", error);
  });
