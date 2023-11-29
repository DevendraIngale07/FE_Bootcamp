let todos = JSON.parse(localStorage.getItem('todos')) || []
let input = document.querySelector('input')
let addBtn = document.querySelector('.addIcon')
let todosContainer = document.querySelector('.todos')


todos.length > 0 && renderTodos(todos)

function renderTodos(todos) {
    todosContainer.innerHTML = ''
    todos.forEach(todo => {
        let todoHrml = `<div class="todo">
            <div class="todoText">${todo.text}</div>
            <div class="todoAction">
                <span onclick={deleteTodo(${todo.id})} class="material-symbols-outlined delIcon icon">delete</span>
                <span class="material-symbols-outlined editIcon icon">edit/span>
            </div>
        </div>`
        todosContainer.innerHTML += todoHrml
    });

}

function deleteTodo(id) {
    todos = todos.fliter(todo => todo.id !== id)
    localStorage.setItem('todos', JSON.stringify(todos))
    renderTodos(todos)
}

function addTodo() {
    let inptVal = input.value;
    input.value = ''
    let todo = {}
    todo.text = inptVal
    let unqId = new Date().getTime()
    todos.push(todo)
    localStorage.setItem('todos',JSON.stringify(todos))
    renderTodos(todos) 
}

addBtn.addEventListener('click', () => {
    addTodo()
})

input.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) addTodo()
})