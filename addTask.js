let task = [];

function addTask() {

   let title = document.getElementById('title').value;
   let dueDate = document.getElementById('dueDate').value;
   let category = document.getElementById('category').value; 
   let urgency = document.getElementById('urgency').value; 
   let text = document.getElementById('text').value; 

}

function cancel() {

   document.getElementById('title').value = ``;
   document.getElementById('dueDate').value = ``;
   document.getElementById('category').value = ``;
   document.getElementById('urgency').value = ``;
   document.getElementById('text').value = ``; 

}