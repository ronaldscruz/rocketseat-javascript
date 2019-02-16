function temHabilidade(skills){
	/*
		MINHA SOLUÇÃO

		if(skills.indexOf("Javascript") < 0){
			return false
		}else{
			return true
		}
	*/

	return skills.indexOf("Javascript") !== -1
}

var skills = ["Javascript", "ReactJS", "React Native"]
console.log(temHabilidade(skills))