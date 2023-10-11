const { Sequelize, DataTypes } = require('sequelize')
const config = require('./config/config')
const PessoaModel = require('./models/pessoa.js')
const sequelize = new Sequelize(config.development)
const Pessoa = PessoaModel(sequelize, DataTypes)

async function crud() {
    try {
        // Criando
        const pessoaCriada = await Pessoa.create({
            nome: 'Vinicius',
            idade: 25
        });
        console.log(`Pessoa criada: ${pessoaCriada.nome}, ${pessoaCriada.idade} anos`)

        // Lendo 
        const pessoas = await Pessoa.findAll();
        console.log(`Pessoas criadas: ${pessoas.map(p => p.toJSON())}`)

        // Atualizando
        const pessoaAtualizada = await Pessoa.update(
            { idade: 26 },
            { where: { id: pessoaCriada.id } }
        )
        console.log('Pessoa atualizada:',
            pessoaAtualizada[0] > 0 ? 'Atualizada com sucesso' : 'Falha')

        // Removendo
        const pessoaRemovida = await Pessoa.destroy({
            where: { id: pessoaCriada.id }
        });

        console.log('Pessoa removida:',
            pessoaRemovida > 0 ? 'Removida com sucesso' : 'Falha')
    } catch (e) {
        console.error(`Erro: ${e.message}`)
    } finally {
        await sequelize.close()
    }
}

crud();

