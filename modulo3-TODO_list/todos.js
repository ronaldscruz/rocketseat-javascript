var listaTodo = document.querySelector('#app ul')
var inputTodo = document.querySelector('#app input')
var btAdd = document.querySelector('#app button')

var todos = JSON.parse(localStorage.getItem('lista_todos')) || []

function renderTodos(){
	listaTodo.innerHTML = ""
	for(todo of todos){
		var liTodo = document.createElement('li')
		var txTodo = document.createTextNode(todo)

		var btExcluir = document.createElement('a')
		btExcluir.setAttribute("href", "#")

		var idTodo = todos.indexOf(todo)
		btExcluir.setAttribute("onclick",'removerTodo('+idTodo+')')

		var txExcluir = document.createTextNode('Excluir')
		btExcluir.appendChild(txExcluir)


		liTodo.appendChild(txTodo)
		liTodo.appendChild(btExcluir)
		listaTodo.appendChild(liTodo)
	}
	salvar()
}

renderTodos()

btAdd.onclick = function(){
	var newTodo = inputTodo.value
	todos.push(newTodo)
	inputTodo.value = ""
	inputTodo.focus()
	renderTodos()
}

function removerTodo(id){
	todos.splice(id, 1)
	renderTodos()
}

function salvar(){
	localStorage.setItem('lista_todos', JSON.stringify(todos))
}


