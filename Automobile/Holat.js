
const sideBarToggle = document.getElementById("sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sideBar = document.querySelector(".aside")




sideBarToggle.addEventListener('click', function(){
    sideBar.classList.add("show-sidebar");
    // sideBarToggle.style.display = 'none'
})
closeBtn.addEventListener('click', function(){
    sideBar.classList.remove("show-sidebar");
    sideBarToggle.style.display = 'block'


})
sideBar.addEventListener('click',function(){
    sideBar.classList.remove("show-sidebar")
})



