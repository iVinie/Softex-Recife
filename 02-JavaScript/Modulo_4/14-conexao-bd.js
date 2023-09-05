const mysql = require("mysql2");
// Configurar conexão com o banco de dados MySQL
const db = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "password",
  database: "provabot",
})
db.connect((e) => {
    if (e) {
      console.error('Erro ao conectar ao banco de dados:', e.message);
      return
    }
    console.log('Conexão com o banco de dados MySQL bem-sucedida!')
    db.end()
})