
const dropBtn = document.querySelector(".profile-image")
const dropMenu = document.querySelector(".drop-menu")
const background = document.querySelector(".dropdown")

dropMenu.style.display="none"

dropBtn.addEventListener("click",()=> dropDownMenu())
const dropDownMenu=()=>{
    if(dropMenu.style.display==="none"){
        dropMenu.style.display = "block"
    }else{
        dropMenu.style.display="none"
    }
}

