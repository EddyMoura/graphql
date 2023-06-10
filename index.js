const { gql, ApolloServer } = require("apollo-server")

/**
 * => Schema 
 * -> Shema Definition Language ou Linguagem de Definição de Esquema
 * -> SDL
 */

const produtos = [
    {
        id: 1,
        nome: 'laptop',
        valor: 12000.00
    },
    {
        id: 2,
        nome: 'mouse',
        valor: 300.00
    }
]

const usuarios = [
    {
        id: 1,
        nome: 'Eddy',
        salario: 1234.54,
        ativo: true,
        idade: 31,
    },
    {
        id: 2,
        nome: 'Luiza',
        salario: 5000.54,
        ativo: false,
        idade: 26,
    }
]

const typeDefs = gql`

    type Produto {
        id: ID,
        nome: String,
        valor: Float,
    }

    type Usuario {
        idade: Int
        salario: Float
        nome: String
        ativo: Boolean
        id: ID
    }

    type Query {
        usuarios: [Usuario],
        produtos: [Produto],
        usuario(id: Int): Usuario,    
    }
`

const resolvers = {
    Query: {
        usuarios() {
            return usuarios;
        },
        usuario(_, args) {
            console.log(args);
            return usuarios.find(usuario => usuario.id === args.id);
        },
        produtos() {
            return produtos;
        }
    }
};

// The ApolloServer constructor requires two parameters: 
// your schema definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers
})

//padrão porta 4000
server.listen().then(({ url }) => {
    console.log(`Servidor rodando na porta ${url}`)
})