//5.1A Rest
const arr = [1, 2, 3, 4, 5, 6]
var [x, ...y] = arr
// console.log(x)  1
// console.log(y)  [ 2, 3, 4, 5, 6 ]

//5.1B
var soma = (...numeros) => numeros.reduce((atual, prox) => atual+prox)
soma(1, 23, 51)


//5.2 Spread
const usuario = {  
   nome: 'Diego',  
   idade: 23,  
   endereco: {    
      cidade: 'Rio do Sul',    
      uf: 'SC',    
      pais: 'Brasil',  
   }
}

var usuario2 = {
   ...usuario,
   nome: 'Gabriel'
}

var usuario3 = {
   ...usuario,
   endereco:{
      cidade: 'Lontras'
   }
}

// console.log(usuario3.endereco.cidade);
