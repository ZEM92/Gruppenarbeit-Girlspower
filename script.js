setURL('http://developerakademie.com/smallest_backend_ever-master');
let users = []; 

async function initBackend() {
    await downloadFromServer();
    users = JSON.parse(backend.getItem('users')) || [];
}

async function init() {
    await includeHTML();
}

async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html"); // "includes/navbar.html"
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = 'Page not found';
        }
    }
}
