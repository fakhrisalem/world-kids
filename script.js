document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("#header");
    console.log("Header loaded:", header);
});

src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
crossorigin="anonymous"


src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js"
integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh"
crossorigin="anonymous"


src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js"
integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ"
crossorigin="anonymous"

///
window.onload = function() {
    const chatContainer = document.getElementById('chat');
    chatContainer.style.transform = 'translateY(0)';
    chatContainer.style.opacity = 1;
};

setTimeout(() => {
    const botMessage = document.getElementById('botMessage');
    botMessage.style.display = 'flex';
    botMessage.style.opacity = 1;
}, 2000);

setTimeout(() => {
    const userMessage2 = document.getElementById('userMessage2');
    userMessage2.style.display = 'flex';
    userMessage2.style.opacity = 1;
}, 4000);

setTimeout(() => {
    const userMessage = document.getElementById('userMessage');
    userMessage.style.opacity = 1;
}, 1000);

const loginContainer = document.getElementById('getStarted');

loginContainer.addEventListener('click', () => {
    loginContainer.classList.add('clicked');
});