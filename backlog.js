function renderBacklog() {
    let backlog = document.getElementById('backlogCardWrapper');
    
    backlog.innerHTML += `
    <div class="backlogCard">
    <div class="backlogCardAvatar width30">
        <img src="Profilpicture/profilepicture2.png" class="assignedTo">
        <div class="assignedToText">
        <span class="namebacklog">Britney </span> <br>
        <span class="emailbacklog">Britneys E-Mail</span></div>
    </div>
    <div class="backlogCardCategory width20">
        <span>Skandal </span>
    </div>
    <div class="backlogCardDetails width50bl">
        <span>Aufgabe</span>                    
    </div>
</div>
    `;
}