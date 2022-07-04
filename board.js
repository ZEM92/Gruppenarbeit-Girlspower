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
        let variable = element.id;
        let variableToStink =  variableToStink.toString();
        
        console.log(title , dueDate , category , urgency , variableToStink )
        
        toDo.innerHTML += `
        <div class="drop-element" id="1" draggable="true" ondragstart="drag(event)">
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

function filterByCategory() {
    var inProgress = task.filter(function(job) {
        return job.status == "todo"; 
    });
    console.log(inProgress)
}

