// seccion 19 y DOM
const todos= JSON.parse(localStorage.getItem('todos')) || [];

const render =() => {
  const todoList = document.getElementById('todo-list');
  const todosTemplate= todos.map(t => '<li>'+t+'</li>')
  todoList.innerHTML = todosTemplate.join('');
  const elemento= document.querySelectorAll('#todo-list li')
    elemento.forEach((elemento,i) =>{
      elemento.addEventListener('click', ()=>{
        elemento.parentNode.removeChild(elemento)
        todos.splice(i,1)
        actualizaTodos(todos)
        render()
      })
    })
}

const actualizaTodos=(todos) => {
  const todoString= JSON.stringify(todos)
  localStorage.setItem('todos', todoString)
}

window.onload= () => {
      render()
  const form= document.getElementById('todo-form');
  form.onsubmit = (e) => {
    e.preventDefault();
    const todo = document.getElementById('todo');
    const todoText = todo.value;
    todo.value = '';
    todos.push(todoText);
    actualizaTodos(todos)
    render()
  }
}
