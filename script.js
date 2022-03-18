const btn = document.querySelector(".btn");
const toasts = document.querySelector("#toasts");
var counter = 0;

btn.addEventListener("click", () => {

    const notif = document.createElement("div");
    notif.setAttribute("class", "notif");
    toasts.appendChild(notif);
    setTimeout(() => {
        notif.classList.add("fadeIn");
    }, 50);
    setTimeout(() => {
        toasts.removeChild(toasts.childNodes[(toasts.childNodes.length) - 1]);
    }, 5000);
    


})