//4.1
const empresa = {
   nome: "Rocketseat",
   endereco: {
      cidade: "Rio do Sul",
      estado: "SC"
   }
}

var {nome, endereco:{cidade, estado}} = empresa
// console.log(nome)  Rocketseat
// console.log(cidade)   Rio do Sul
// console.log(estado)   SC


//4.2
function mostraInfo({nome, idade} = usuario) {
   return `${nome} tem ${idade} anos.`;
}

mostraInfo({nome:'Ronald', idade: 18})

