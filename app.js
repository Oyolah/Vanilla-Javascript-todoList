//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Add Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
//function
function addTodo(e) {
  e.preventDefault();

  //create the main div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');

  //create the li
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);

  // create the check button
  const completeButton = document.createElement('button');
  completeButton.innerHTML = '<i class="fas fa-check"></i>';
  completeButton.classList.add('check-btn');
  todoDiv.appendChild(completeButton);

  // create the check button
  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
  deleteButton.classList.add('delete-btn');
  todoDiv.appendChild(deleteButton);

  // append main div to parent div
  todoList.appendChild(todoDiv);

  // clear the input
  todoInput.value = '';
}
function deleteCheck(e) {
  const item = e.target;
  if (item.classList[0] === 'delete-btn') {
    const todo = item.parentElement;
    // animation
    todo.classList.add('fall');
    todo.addEventListener('transitionend', function () {
      todo.remove();
    });
  }
  if (item.classList[0] === 'check-btn') {
    const todo = item.parentElement;
    todo.classList.toggle('completed');
  }
}
