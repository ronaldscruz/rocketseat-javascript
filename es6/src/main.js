import api from './api'

class App{
   constructor(){
      this.repositories = []
      this.frmDados = document.getElementById('repo-form')
      this.inpRepo = document.getElementById('repository')
      this.ulRepos = document.getElementById('repo-list')
      this.registerHandlers()
   }

   registerHandlers(){
      this.frmDados.onsubmit = event => this.addRepository(event)
   }

   async addRepository(event){
      event.preventDefault()

      var inpRepoName = this.inpRepo.value

      if(inpRepoName.length === 0){
         return
      }

      try{
         const resposta = await api.get(`/repos/${inpRepoName}`)
         let {name, description, html_url, owner:{avatar_url, }} = resposta.data

         this.repositories.push({
            name, description, html_url, avatar_url
         })
      }catch(e){
         console.log('Falha ao buscar da API ('+e+').')
      }
      
      this.inpRepo.value = ""
      this.inpRepo.focus()
      this.render()
   }

   render(){
      this.ulRepos.innerHTML = ""

      this.repositories.forEach(repo => {
         var imgAvatar = document.createElement("img")
         imgAvatar.setAttribute('src', repo.avatar_url)

         var strongRepo = document.createElement("strong")
         var titleRepo = document.createTextNode(repo.name)
         strongRepo.appendChild(titleRepo)

         var pDesc = document.createElement("p")
         var desc = document.createTextNode(repo.description)
         pDesc.appendChild(desc)

         var aAcessar = document.createElement('a')
         aAcessar.href = repo.html_url
         aAcessar.setAttribute('target', '_blank')
         var acessar = document.createTextNode("Acessar")
         aAcessar.appendChild(acessar)

         var liItem = document.createElement("li")
         liItem.appendChild(imgAvatar)
         liItem.appendChild(strongRepo)
         liItem.appendChild(pDesc)
         liItem.appendChild(aAcessar)

         this.ulRepos.appendChild(liItem)
      })
   }
}

new App()