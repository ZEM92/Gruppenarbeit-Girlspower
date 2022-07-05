function initBacklog() {
    setTimeout(() => {
        renderBacklog();
    }, 300)    
}

function renderBacklog() {
    let backlog = document.getElementById('backlogCardWrapper');

    for (let i = 0; i < task.length; i++) {
        const element = task[i];

        let title = element.title; 
        let category = element.category; 
        
        backlog.innerHTML += `
        <div class="backlogCard">
        <div class="backlogCardAvatar width30">
            <img src="Profilpicture/profilepicture2.png" class="assignedTo">
            <div class="assignedToText">
            <span class="namebacklog">Britney </span> <br>
            <span class="emailbacklog">Britneys E-Mail</span></div>
        </div>
        <div class="backlogCardCategory width20">
            <span>${category} </span>
        </div>
        <div class="backlogCardDetails width50bl">
            <span>${title}</span>                    
        </div>
        <div>
            <img src="img/trash.png" onclick="deleteTask(${element.id})" class="delete-task-backlog">
        <div>
    </div>  
    `;

    }   
}