const pessoas = ["José", "Carlos", "Pedro"]

// //Adiciona um elemento ao final do Array
pessoas.push("Caio")

// //Remove o último elemento do Array
pessoas.pop()

// //Adiciona um elemento no inicio do Array
pessoas.unshift("Caio")

// //Remove o primeiro elemento do Array
pessoas.shift()

// //Atualiza o valor de um elemento do Array
pessoas[1] = "Caio"

console.log(pessoas)

//Loop
pessoas.forEach(usuario => console.log(usuario))

//O map serve para criar uma cópia do Array, mantendo o original
const pessoasModificado = 
pessoas.map(usuario => console.log(usuario.toLowerCase()))