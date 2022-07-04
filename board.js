function initBoard() {
    setTimeout(() => {
        renderBoard();
    }, 300)    
}

function renderBoard() {
    let toDo = document.getElementById('toDo');

    for (let i = 0; i < task.length; i++) {
        const element = task[i];

        let title = element.title; 
        let dueDate = element.dueDate; 
        let category = element.category; 
        let urgency = element.urgency; 
        let num = element.id;
        
        console.log(title , dueDate , category , urgency , num )
        
        toDo.innerHTML += `
        <div class="drop-element" id="${num}" draggable="true" ondragstart="startDragging(${num})">
        <img class="boardImg" src="Profilpicture/profilepicture1.png">
        <div class="wrapper-card-elements">
            <h3 class="h3-not-center">${title}</h3>
            <span class="card-span">${category}</span><br>
            <span class="card-span">${dueDate}</span>
        </div>
    </div>
    `;
    }   
}

function initUpdateBoard() {
    setTimeout(() => {
        updateBoard();
    }, 300)    
}

function updateBoard() {
    let progressTasks = task.filter( t => t['status'] == `inProgress`); 
    let inProgressHTML = document.getElementById('inProgess');
    inProgressHTML += generateHTML(progressTasks);
}

function generateHTML(element) {
    return `
    <div class="drop-element" id="${element.id}" draggable="true" ondragstart="startDragging(${element.id})">
    <img class="boardImg" src="Profilpicture/profilepicture1.png">
    <div class="wrapper-card-elements">
        <h3 class="h3-not-center">${element.title}</h3>
        <span class="card-span">${element.category}</span><br>
        <span class="card-span">${element.dueDate}</span>
    </div>
</div>
    `
}