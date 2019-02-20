import api from './api'

class App{
   constructor(){
      this.repositories = [
         // {
         //    name: 'rocketseat-javascript',
         //    description: 'Desafios de Javascript da Rocketseat ',
         //    html_utl: 'http://github.com/ronaldscruz/rocketseat-javascript',
         //    avatar_url: 'https://avatars2.githubusercontent.com/u/36777554?v=4'
         // }
      ]
      this.frmDados = document.getElementById('repo-form')
      this.inpRepo = document.getElementById('repository')
      this.ulRepos = document.getElementById('repo-list')
      this.registerHandlers()
   }

   registerHandlers(){
      this.frmDados.onsubmit = event => this.addRepository(event)
      this.inpRepo.onblur = () => this.inpRepo.setAttribute('style','border: 1.5px solid white;')
   }

   setLoading(isloading = true){
      if(isloading === true){
         var spanLoading = document.createElement("span")
         spanLoading.setAttribute('id','loading')
         spanLoading.appendChild(document.createTextNode(' Carregando...'))
         this.frmDados.appendChild(spanLoading)
      }else{
         document.getElementById('loading').remove()
      }
   }

   async addRepository(event){
      event.preventDefault()

      var inpRepoName = this.inpRepo.value

      if(inpRepoName.length === 0){
         return
      }

      this.setLoading()

      try{
         const resposta = await api.get(`/repos/${inpRepoName}`)
         let {name, description, html_url, owner:{avatar_url, }} = resposta.data

         this.repositories.push({
            name, description, html_url, avatar_url
         })

         this.inpRepo.setAttribute('style','border: 1.5px solid white;')
      }catch(e){
         console.log('Falha ao buscar da API ('+e+').')
         this.inpRepo.setAttribute('style','border: 1.5px solid red;')
      }
      
      this.setLoading(false)
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

      if(this.repositories.length < 1){
         this.ulRepos.innerHTML = `<h4 style='margin: 25px 5px; color: white'>Nada foi encontrado. Tente novamente :/ </h4>`
      }
   }
}

new App()