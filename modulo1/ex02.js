function pares(x, y){
	var pares = []

	for(i = x; i <= y; i++){
		if(i % 2 == 0){pares.push(i)}	
	}

	return pares.join(", ");
}

console.log(pares(15, 321))
