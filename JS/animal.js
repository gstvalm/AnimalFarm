/* --------- modo claro modo escuro ------------ */
function themeLightDark(){
    const switcherBtn = document.querySelector(".js-switcher-btn");
    const icon = switcherBtn.querySelector("i");

    function changeIcon() {
        if(document.body.classList.contains("dark")){
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        }
        else {
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
        }
    }

    switcherBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        changeIcon();
        if(document.body.classList.contains("dark")){
            localStorage.setItem("theme", "dark");
        }
        else{
            localStorage.setItem("theme", "light");
        }
    })

    /* checar preferência do usuário no load do site */
    if(localStorage.getItem("theme") !== null){
        if(localStorage.getItem("theme") === "light"){
            document.body.classList.remove("dark");
        }
        else {
            document.body.classList.add("dark");
        }
    }


    changeIcon();
}
themeLightDark();