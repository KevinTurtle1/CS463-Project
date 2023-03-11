//Adding a navigation bar
const tabs = ["Home", "About Me", "Projects", "Contact"];
const links = [
  "../index.html",
  "../about_me.html",
  "../projects.html",
  "../contact.html",
];

//let navbar = document.querySelector(".nav-list");
let navbar = document.querySelector(".nav-list");
for (let index = 0; index < links.length; index++) {
  let li = document.createElement("li");
  li.className = "nav-item";
  let link = document.createElement("a");
  link.className = "nav-link";
  link.href = links[index];
  link.innerHTML = tabs[index];
  li.appendChild(link);
  navbar.appendChild(li);
}

//Footer
let footer = document.querySelector(".footer");

//Creating the Contact Information Section
let contact_item = document.createElement("div");
contact_item.className = "footer-item";
let contact_header = document.createElement("h2");
contact_header.textContent = "Contact Information:";
let text = document.createElement("p");
text.textContent = "kvuong@pdx.edu";
contact_item.appendChild(contact_header);
contact_item.appendChild(text);
footer.appendChild(contact_item);

//Creating the Connect Section
let connect_item = document.createElement("div");
connect_item.className = "footer-item";

let link = document.createElement("a");
link.href = "https://www.linkedin.com/in/kevin-vuong-b47664235";
let connect_header = document.createElement("h2");
connect_header.textContent = "Connect:";
let icon = document.createElement("i");
icon.classList.add("fa", "fa-linkedin-square");
icon.style.fontSize = "36px";
icon.style.color = "#0A66C2";
link.appendChild(icon);
connect_item.appendChild(connect_header);
connect_item.appendChild(link);
footer.appendChild(connect_item);
