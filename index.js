const { gql, ApolloServer } = require("apollo-server")

/**
 * => Schema 
 * -> Shema Definition Language ou Linguagem de Definição de Esquema
 * -> SDL
 */

// const produtos = [
//     {
//         id: 1,
//         nome: 'laptop',
//         valor: 12000.00
//     },
//     {
//         id: 2,
//         nome: 'mouse',
//         valor: 300.00
//     }
// ]

// const usuarios = [
//     {
//         id: 1,
//         nome: 'Eddy',
//         salario: 1234.54,
//         ativo: true,
//         idade: 31,
//     },
//     {
//         id: 2,
//         nome: 'Luiza',
//         salario: 5000.54,
//         ativo: false,
//         idade: 26,
//     }
// ]

const db = [
        {
        id: 1,
        nome: 'Eddy',
        email: "moura@moura.com",
        telefone_fixo: "1231456-1233",
    },
    {
        id: 2,
        nome: 'Luiza',
        email: "luiza@luiza.com",
        telefone_fixo: "11111-22222",
    }
]

const typeDefs = gql`

    type Usuario {
        id: Int
        nome: String
        email: String
        telefone: String
    }
    
    type Query {
        usuario: Usuario
    }

    # type Produto {
    #     id: ID,
    #     nome: String,
    #     valor: Float,
    # }

    # type Usuario {
    #     idade: Int
    #     salario: Float
    #     nome: String
    #     ativo: Boolean
    #     id: ID
    # }

    # type Query {
    #     usuarios: [Usuario],
    #     produtos: [Produto],
    #     usuario(id: Int, nome: String): Usuario,
    #     produto(id: Int): Produto,    
    # }
`;

const resolvers = {
    Usuario: {
        telefone(obj) {
            return obj.telefone_fixo;
        }
    },
    Query: {
        usuario() {
            return db[0];
        }
        // usuarios() {
        //     return usuarios;
        // },
        // usuario(_, args) {
        //     const { id, nome } = args;
        //     console.log(args)
        //     if (id) return usuarios.find(usuario => usuario.id === id);
        //     return usuarios.find(usuario => usuario.nome === nome);
        // },
        // produtos() {
        //     return produtos;
        // },
        // produto(_, args) {
        //     console.log(args);
        //     return produtos.find(produto => produto.id === args.id);
        // }
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