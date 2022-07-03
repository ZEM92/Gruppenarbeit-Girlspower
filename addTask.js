let task = [];
let newTask; 
let i = 0; 

async function addTask() {

   let title = document.getElementById('title');
   let dueDate = document.getElementById('dueDate');
   let category = document.getElementById('category'); 
   let urgency = document.getElementById('urgency'); 
   let text = document.getElementById('text'); 

   newTask = {
      'id' : i,
      'title' : title.value,
      'dueDate' : dueDate.value,
      'urgeny' : urgency.vaule,
      'text' : text.value,
   }

   task.push(newTask)
   i++;
   let allTasksAsString = JSON.stringify(task)
   await backend.setItem('task', allTasksAsString);
   console.log(task)
   cancel(); 
}

/*async function initBackend() {
   await downloadFromServer();
   task = JSON.parse(backend.getItem('task')) || [];
}*/

function cancel() {
   document.getElementById('title').value = ``;
   document.getElementById('dueDate').value = ``;
   document.getElementById('category').value = ``;
   document.getElementById('urgency').value = ``;
   document.getElementById('text').value = ``; 
}

function deleteUser(name) {
   backend.deleteItem('users');
 }


