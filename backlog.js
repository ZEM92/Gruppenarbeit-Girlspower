function renderBacklog() {
    let backlog = document.getElementById('backlogCardWrapper');

    for (let i = 0; i < task.length; i++) {
        const element = task[i];

        let title = element.title; 
        let dueDate = element.dueDate; 
        let category = element.category; 
        let urgency = element.urgency; 
        console.log(title , dueDate , category , urgency)
        
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
    </div>  
    `;

    }   
}