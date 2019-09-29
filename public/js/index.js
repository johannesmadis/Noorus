// VARIABLES for the hamburger button and hidden menu (for smaller screens)

var hamburgerButton = document.getElementById("hamburger-button");
var hiddenMenu = document.getElementById("hidden-menu");

// FUNCTION that makes hidden menu visible

function toggleHiddenMenu() {
  hiddenMenu.classList.toggle("show");
  hiddenMenu.classList.toggle("hide");
}

function removeHiddenMenu() {
  hiddenMenu.classList.remove("show");
  hiddenMenu.classList.add("hide");
}

// VARIABLES for the dropdown buttons and menus

var dropdownButtonHeader = document.getElementById("dropdown-button-header");
var dropdownButtonHidden = document.getElementById("dropdown-button-hidden");
var dropdownButtonFooter = document.getElementById("dropdown-button-footer");
var dropdownIconHeader = document.getElementById("dropdown-icon-header");
var dropdownIconHidden = document.getElementById("dropdown-icon-hidden");
var dropdownIconFooter = document.getElementById("dropdown-icon-footer");
var dropdownMenuHeader = document.getElementById("dropdown-menu-header");
var dropdownMenuHidden = document.getElementById("dropdown-menu-hidden");
var dropdownMenuFooter = document.getElementById("dropdown-menu-footer");

// FUNCTIONS that make dropdown menus visible

function toggleDropdownMenuHeader() {
  dropdownMenuHeader.classList.toggle("show");
  dropdownMenuHeader.classList.toggle("hide");
}

function removeDropdownMenuHeader() {
  dropdownMenuHeader.classList.remove("show");
  dropdownMenuHeader.classList.add("hide");
}

function toggleDropdownMenuHidden() {
  dropdownMenuHidden.classList.toggle("show");
  dropdownMenuHidden.classList.toggle("hide");
  dropdownButtonHidden.classList.toggle("rotate");
}

function removeDropdownMenuHidden() {
  dropdownMenuHidden.classList.remove("show");
  dropdownMenuHidden.classList.add("hide");
  dropdownButtonHidden.classList.remove("rotate");
}

function toggleDropdownMenuFooter() {
  dropdownMenuFooter.classList.toggle("show");
  dropdownMenuFooter.classList.toggle("hide");
}

function removeDropdownMenuFooter() {
  dropdownMenuFooter.classList.remove("show");
  dropdownMenuFooter.classList.add("hide");
}

// EXECUTION CODE- Activates one of the above functions if the right button is clicked and closes the hidden menus if anything else is clicked

document.addEventListener("click", function(event) {
  if (event.target === hamburgerButton) {
    event.preventDefault();
    toggleHiddenMenu();
    removeDropdownMenuHeader();
    removeDropdownMenuHidden();
    removeDropdownMenuFooter();
  } else if (event.target === dropdownButtonHeader || event.target ===dropdownIconHeader) {
    event.preventDefault();
    removeHiddenMenu();
    toggleDropdownMenuHeader();
    removeDropdownMenuHidden();
    removeDropdownMenuFooter();
  } else if (event.target === dropdownButtonHidden || event.target === dropdownIconHidden) {
    event.preventDefault();
    removeDropdownMenuHeader();
    toggleDropdownMenuHidden();
    removeDropdownMenuFooter();
  } else if (event.target === dropdownButtonFooter || event.target === dropdownIconFooter) {
    event.preventDefault();
    removeHiddenMenu();
    toggleDropdownMenuFooter();
    removeDropdownMenuHidden();
    removeDropdownMenuHeader();
  } else {
    removeHiddenMenu();
    removeDropdownMenuHeader();
    removeDropdownMenuHidden();
    removeDropdownMenuFooter();
  }
});

// VARIABLE for the current viewport height

var vh = window.innerHeight * 0.01;

// EXECUTION CODE- a css variable is set to the document, which equals the variable above

window.addEventListener("orientationchange", function() {
  document.documentElement.style.setProperty("--vh", "&{vh}px");
});