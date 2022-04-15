const menu = document.querySelector(".menu").children;
for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener("mouseover", function () {
    let section = menu[i].getAttribute("href");
    let sectionPosition = document.querySelector(section).offsetTop;
    window.scrollTo({
      top: sectionPosition,
      behavior: "smooth",
    });
    // remove the active class from the menu
    for (let i = 0; i < menu.length; i++) {
      menu[i].classList.remove("active");
    }
    // add the active class to the clicked menu
    this.classList.add("active");
  });
}
