const usuarios = [
   { nome: 'Ronald', idade: 18, empresa: 'Rocketseat' },  
   { nome: 'Vncs', idade: 30, empresa: 'Rocketseat' },  
   { nome: 'Vitor', idade: 18, empresa: 'Facebook' },
]

var ex21 = usuarios.map(u => u.idade)
// console.log(ex21)

var ex22 = usuarios.filter(u => u.empresa === 'Rocketseat' && u.idade > 18)
// console.log(ex22)

var ex23 = usuarios.find(u => u.empresa === "Google" )
// console.log(ex23)

var ex24 = usuarios
.map(u => ({...u, idade: u.idade*2}))
.filter(u => u.idade <= 50)
console.log(ex24)