// define UI vars
// you need your form, task input, tasklist and the clear tasks button 
const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const taskList = document.querySelector('.collection');
const clearTasks = document.querySelector('.clear-tasks');

// add event listeners
loadEventListeners();

function loadEventListeners(){
  form.addEventListener('submit', addTask);
}

function addTask(e){
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(taskInput.value));
  taskList.appendChild(li);

  e.preventDefault();

  saveLocalStorage();

  function saveLocalStorage(e){
    const task = document.getElementById('task').value;
    let tasks;

    if(localStorage.getItem('tasks') === null){
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    e.preventDefault
  }
}

