
module.exports = (sequelize, DataTypes) => {
    const Pessoa = sequelize.define('Pessoa', {
        nome:{
            type: DataTypes.STRING,
            allowNull: false
        },
        idade:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })

    return Pessoa
}
