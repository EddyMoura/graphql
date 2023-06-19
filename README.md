1. npm init -y
2. npm i -D nodemon
3. npm i graphql apollo-server
4. npm start

> https://www.apollographql.com/docs/apollo-server/getting-started

> https://www.markdownguide.org/cheat-sheet/

### **How to kill a process running on a particular port on localhost in Linux/mac:**

> sudo kill -9 $(lsof -t -i:8080 -sTCP:LISTEN)

- sudo - admin privilege
- kill - command to kill the process
- -9 - forcefully
- lsof - list of files (Also used to list related processes)
- -t - show only process ID
- -i - show only internet connections related process
- :8080 - show only processes in this port number

### **Alias and Frangments**

<code>
query buscaUsuario($idPrimeiroUsuario: Int, $idSegundoUsuario: Int) {
  primeiroUsuario: usuario(id: $idPrimeiroUsuario) {
    id
    nome
    email
    telefone
    perfil {
      id
      descricao
    }
  }

  segundoUsuario: usuario(id: $idSegundoUsuario) {
    id
    ...usuarioCompleto
  }
  usuarios {
    id
    ...usuarioCompleto
  }
}

fragment usuarioCompleto on Usuario {
    nome
    email
    telefone
    perfil {
      id
      descricao
    }
}
</code>
