export function toggleMenu() {
  let nav = document.getElementById("myNavbar");

  if (nav.className === "navbar") {
    nav.className += " responsive";
  } else {
    nav.className = "navbar";
  }
}
