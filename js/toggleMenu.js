const toggleMenu = document.querySelector(".toggleMenuButton")
toggleMenu.addEventListener("click", () => {
  const icon = document.querySelector(".toggleMenuButton > i ")
  icon.classList.toggle("fa-align-justify")
  icon.classList.toggle("fa-window-close")
  const navList = document.querySelector('.nav-list')
  navList.classList.toggle("display")
})
