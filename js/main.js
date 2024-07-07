const darkModeButton = document.querySelector("#toggle-dark-mode");
const body = document.body
let darkMode = localStorage.getItem("dark-mode");

function activarDarkMode(){
    body.classList.add("dark-mode");
    localStorage.setItem("dark-mode", "activado")
}
function desactivarDarkMode(){
    body.classList.remove("dark-mode");
    localStorage.setItem("dark-mode", "desactivado")
}
if(darkMode === "activado"){
    activarDarkMode()
} else {
    desactivarDarkMode()
}
darkModeButton.addEventListener("click", () =>{
    darkMode = localStorage.getItem("dark-mode");
    if(darkMode === "activado"){
        desactivarDarkMode();
    } else {
        activarDarkMode()
    }
})

