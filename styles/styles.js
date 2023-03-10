//Adding a navigation bar
const tabs = ["Home", "About Me", "Projects", "Contact"];
const links = [
  "../index.html",
  "../about_me.html",
  "../projects.html",
  "../contact.html",
];

let navbar = document.querySelector(".nav-container");

for (let index = 0; index < links.length; index++) {
  let flex_item = document.createElement("div");
  flex_item.className = "flex-item";

  let link = document.createElement("a");
  link.className = "flex-item-link";
  link.href = links[index];
  link.textContent = tabs[index];

  flex_item.appendChild(link);
  navbar.append(flex_item);
}
