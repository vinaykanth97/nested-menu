let parentDropMenu = document.querySelectorAll(".parent-drop-menu li");
let subdropDown = document.querySelectorAll(".main-menu .sub-drop-menu");
let mainMenu = document.querySelectorAll(".main-menu >ul>li");

parentDropMenu.forEach((dropMenu, index) => {
  dropMenu.addEventListener("mouseenter", function () {
    removeSelected();
    this.classList.add("active-nest");
    if (this.classList.contains("active-nest")) {
      subdropDown[index].classList.add("active-nest");
    }
    let highlightedText = document.querySelectorAll(".parent-menu-list .title")[
      index
    ].innerText;
    document.querySelectorAll(".parent-menu-list-title")[index].innerText =
      highlightedText;
  });
});
document.querySelectorAll(".dropdown-include").forEach(function (menu, i) {
  menu.addEventListener("mouseenter", function () {
    menu.classList.add("active");
    document
      .querySelector(".active .parent-drop-menu li")
      .classList.add("active-nest");
    document
      .querySelector(".active .sub-drop-menu")
      .classList.add("active-nest");
  });
  menu.addEventListener("mouseleave", function () {
    removeSelected();
    menu.classList.remove("active");
  });
});
function removeSelected() {
  parentDropMenu.forEach((dropMenu, index) => {
    dropMenu.classList.remove("active-nest");
    subdropDown[index].classList.remove("active-nest");
  });
}
