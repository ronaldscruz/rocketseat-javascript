var usuarios = [
	{
		nome: "Diego",
		habilidades:["Javascript", "ReactJS", "Redux"]
	},
	{
		nome: "Gabriel",
		habilidades:["VueJS", "Ruby on Rails", "Elixir"]
	}
]

var habilidades = function(){
	for(let perfil of usuarios){
		console.log(`O ${perfil.nome} possui as seguintes habilidades: ${perfil.habilidades.join(", ")}`)
	}
}

habilidades(usuarios)