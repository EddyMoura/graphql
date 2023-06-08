const { gql, ApolloServer } = require("apollo-server")

/**
 * Scalar Types
 * - Int
 * - Float
 * - String
 * - Boolean
 * - ID - Identificador exclusivo - Decodificado como uma String
 */

/**
 * Arrays
 * Dentro de um array do tipo String, se um Int e Float for passado
 * Será feito um parse
 * Ao contrario não, um array do tipo Int/Float (para Strings quebradas não, ex: "3r", nesse caso sim "3"),
 */

/**
 * Null e Non-Null
 * quando os valores não são atribuidos nos resolvers, por padrão o valor null é atribuido.
 * ! é utilizados como um forma de determinar que esse campo não pode ser null.
 * tecnologias: [String]! - Nesse caso, o resolver deve retornar um array, mesmo que vazio;
 * tecnologias: [String!]! - Nesse caso, o resolver deve retornar um array e que não pode ser null.
 *     Query: {
        tecnologias() {
            return [null];
        },
 * retorna erro
 */


const typeDefs = gql`
    type Query {
        idade: Int
        salario: Float
        nome: String
        ativo: Boolean
        id: ID
        tecnologias: [String!]!
    }
`

const resolvers = {
    Query: {
        tecnologias() {
            return ["GraphQl", "Java", "Go", 8.5];
        },
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