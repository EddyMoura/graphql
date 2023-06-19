const { gql, ApolloServer } = require("apollo-server")

/**
 * => Schema 
 * -> Shema Definition Language ou Linguagem de Definição de Esquema
 * -> SDL
 */

const db = {
    usuarios: [
        {
            id: 1,
            nome: 'Eddy',
            email: "moura@moura.com",
            telefone: "1231456-1233",
            perfil: 1,
        },
        {
            id: 2,
            nome: 'Luiza',
            email: "luiza@luiza.com",
            telefone: "11111-22222",
            perfil: 2,
        },
    ],
    perfis: [
        { id: 1, descricao: "admin" },
        { id: 2, descricao: "normal" }
    ]
};

const typeDefs = gql`

    type Usuario {
        id: Int
        nome: String
        email: String
        telefone: String
        perfil: Perfil
    }

    type Perfil {
        id: Int
        descricao: String
    }
    
    type Query {
        usuario(id: Int): Usuario
        perfis: [Perfil]
        usuarios: [Usuario]
    }
`;

const resolvers = {
    Usuario: {
        perfil(obj) {
            return db.perfis.find((perfil) => perfil.id === obj.perfil);
        }
    },

    Query: {
        usuario(_, args) {
            return db.usuarios.find((db) => db.id === args.id);
        },
        perfis() {
            return db.perfis;
        },
        usuarios: () => db.usuarios,
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