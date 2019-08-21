function animateCSS(element, animationName, callback) {
  const node = document.querySelector(`.${element}`)
  node.classList.add("animated", animationName)

  function handleAnimationEnd() {
    node.classList.remove("animated", animationName)
    node.removeEventListener("animationend", handleAnimationEnd)

    if (typeof callback === "function") callback()
  }

  node.addEventListener("animationend", handleAnimationEnd)
}

const navList = document.querySelectorAll(".nav-list li")
navList.forEach((currentValue, index, array) => {
  currentValue.addEventListener("click", (e) => {
    // show the clicked section
    const sectionName = e.target.textContent.toLowerCase()
    const currentSection = document.querySelector(`.${sectionName}`)
    currentSection.style.display = "block"
    const animationArray = ['bounceInRight','bounceInDown','bounceInUp','bounceInLeft']
    const randomNumber = Math.floor(Math.random()*4) 
    animateCSS(sectionName, animationArray[randomNumber])

    // setting display:none for other unclicked sections
    array.forEach((item) => {
      if (currentValue != item) {
        const anotherSectionName = item.textContent.toLowerCase()
        const anotherSection = document.querySelector(`.${anotherSectionName}`)
        anotherSection.style.display = "none"
      }
    })
  })
})
