// grab all the elements with class list of tab & panel and put them into a nodelist

const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

// Mobile Menu

const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const logo = document.getElementById("logo");

// Get Mobile Menu Links to close Mobile Menu

const mobileLink = document.querySelectorAll(".mobile-link");

// Tabs menu event listener

// We need to loop through all the tabs and add an eventListener on click and define a function
tabs.forEach((tab) => tab.addEventListener("click", onTabClick));

// Hamburger button Listener

btn.addEventListener("click", navToggle);

function onTabClick(e) {
  // we want to loop through again '.forEach' and remove the border-b class, (we will add this later to the tab that got clicked)
  tabs.forEach((tab) => {
    tab.children[0].classList.remove(
      "border-softRed",
      "border-b-4",
      "md:border-b-0"
    );
  });

  //   Hide all panels
  panels.forEach((panel) => panel.classList.add("hidden"));

  //   Activate a new tab & panel based on target
  e.target.classList.add("border-softRed", "border-b-4");

  const classString = e.target.getAttribute("data-target");
  document
    .getElementById("panels")
    .getElementsByClassName(classString)[0]
    .classList.remove("hidden");
}

// Hamburger function

function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("hidden");
  menu.classList.toggle("flex");

  if (menu.classList.contains("flex")) {
    logo.setAttribute("src", "./images/logo-bookmark-footer.svg");
  } else {
    logo.setAttribute("src", "./images/logo-bookmark.svg");
  }
}

// Mobile Links eventlistener

// tabs.forEach((tab) => tab.addEventListener("click", onTabClick));

// mobileLink is a node list, by forEach, we loop through the list when any of them is clicked, we then call the menuClose function

mobileLink.forEach((link) => link.addEventListener("click", menuClose));

function menuClose() {
  btn.classList.remove("open");
  menu.classList.add("hidden");
  menu.classList.remove("flex");
  logo.setAttribute("src", "./images/logo-bookmark.svg");
}
