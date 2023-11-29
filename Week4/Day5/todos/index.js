 /* */

let todos = []
let input = document.querySelector('input')
let addBtn = document.querySelector('.btn')
let todosContainer = document.querySelector('.todos')
// let actionManuDocts = document.querySelector()

todos.length > 0 && renderTodos(todos)

function renderTodos(todos) {
    todos.forEach(todo => {
        let todoHtml = `<div class="todo">
        <div class="todoText">${todo.text}</div>
        <div class="todoAc">
            <span class="material-symbols-outlined editicon">edit</span>
            <span class="material-symbols-outlined delicon">delete</span>
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






addBtn.addEventListener('click', () => {
    let inVal = input.value
    input.value = ""
    let todo = {}
    todo.text = inVal
    let unqId = new Date().getTime()
    todo.id = unqId

    todos.push(todo)
    renderTodos(todos)
    
})



