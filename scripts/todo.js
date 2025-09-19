const todoList  = [{
  name:'Make Dinner', 
  dueDate: '2025-10-22'
  },{
  name:'Wash Dishes',
  dueDate:'2025-10-23'
  }];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;
    const {name, dueDate} = todoObject;
    const html = `
    <div class="todo-name">  ${name} </div
    <div class="todo-dueDate"> ${dueDate} </div>
    <button onclick ="
      todoList.splice(${i}, 1);
      renderTodoList();
    " class="delete-todo-button">Delete</button>
    ` ;// generating the html
    todoListHTML += html;
  }
  

  document.querySelector('.js-todo-list')
  .innerHTML = todoListHTML;
  console.log(document.querySelector('.js-todo-list'));
}

function addTodo() {
 const inputElement = document.querySelector('.js-name-input');
 const name = inputElement.value;

 const dateInputElement = document.querySelector('.js-due-date-input');

 const dueDate = dateInputElement.value;

 todoList.push({
  // name: name,
  // dueDate: dueDate,
  name,
  dueDate
 });
 

 inputElement.value = '';

 renderTodoList();
}

