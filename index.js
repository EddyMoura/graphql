const { gql, ApolloServer } = require("apollo-server")

/**
 * Scalar Types
 * - Int
 * - Float
 * - String
 * - Boolean
 * - ID - Identificador exclusivo - Decodificado como uma String
 */


const typeDefs = gql`
    type Query {
        idade: Int
        salario: Float
        nome: String
        ativo: Boolean
        id: ID
    }
`

const resolvers = {
    Query: {
        idade() {
            return 31;
        },
        salario() {
            return 3000.00;
        },
        nome() {
            return 'Eddy Moura';
        },
        ativo() {
            return true;
        },
        id() {
            return 1231564646;
        }
    }
}


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