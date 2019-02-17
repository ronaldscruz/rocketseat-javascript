class Usuario{
   constructor(email, senha){
      this.email = email
      this.senha = senha
   }

   isAdmin(){
      return this.admin === true
   }
}

class Admin extends Usuario {
   constructor(email, senha){
      super(email, senha)
      this.admin = true
   }
}

var user = new Usuario('ronald@email.com', 'kwanza')
var robote = new Admin('robotenique@email.com', 'inlidavel')

console.log(user.isAdmin())
console.log(robote.isAdmin())