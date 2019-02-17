// rest
var multiplicar = (...nums) => nums.reduce((total, proximo) => total * proximo)
// console.log(multiplicar(4, 5, 5, 1, 2))


// spread
var carro = {
    modelo : 'Jetta',
    marca: 'Volkswagen',
    ano: 2015
}

var carro2 = {
    ...carro,
    modelo: "Voyage"
}

console.log(carro, carro2)