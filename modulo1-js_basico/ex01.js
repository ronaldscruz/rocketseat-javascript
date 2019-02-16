var endereco = {
	rua: "Rua dos Pinheiros",
	numero: 1293,
	bairro: "Centro",
	cidade: "São Paulo",
	uf: "SP"
}

var mostraEndereco = function(obj){
	return `O usuário mora em ${obj.cidade} / ${obj.uf}, no bairro ${obj.bairro}, na rua "${obj.rua}" com nº ${obj.numero}.`
}

console.log(mostraEndereco(endereco))