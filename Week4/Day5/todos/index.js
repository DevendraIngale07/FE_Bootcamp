
let todos = JSON.parse(localStorage.getItem('todos')) || []
let input = document.querySelector('input')
let addBtn = document.querySelector('.addIcon')
let todosContainer = document.querySelector('.todos')
// let actionManuDocts = document.querySelector()

todos.length > 0 && renderTodos(todos)

function renderTodos(todos) {
    todosContainer.innerHTML = ""
    todos.forEach(todo => {
        let todoHtml = `<div class="todo">
        <div class="todoText">${todo.text}</div>
        <div class="todoAc">
            <span onclick = {deleteTodo(${todo.id})} class="material-symbols-outlined editicon">edit</span>
            <span class="material-symbols-outlined delicon btn">delete</span>
        </div>
    </div>`
    todosContainer.innerHTML += todoHtml
    });
}
function deleteTodos(id){
    todos = todos.filter(todo => todo.id !== id)
    localStorage.setItem(`todos`, JSON.stringify(todos))
    renderTodos(todos)
}

function addTodo(){
    let intVal = input.value;
    if (!intVal)return
    input.value = ""
     let todo = {}
     todo.text = intVal
     let unqId = new Date().getTime()
     todo.id = unqId
     todos.push(todo)
     localStorage.setItem('todos', JSON.stringify(todos))
    renderTodos(todos)
}


addBtn.addEventListener('click',()=> {
    addTodo
})
addBtn.addEventListener('keydown',()=> {
    if (e.keyCode === 13) addTodo()
})


