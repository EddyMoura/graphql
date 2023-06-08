const { gql, ApolloServer } = require("apollo-server")

const resolvers = {
    Query: {
        hello() {
            return 'World';
        }
    }
}

const typeDefs = gql`
    type Query {
        hello: String
    }
`

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