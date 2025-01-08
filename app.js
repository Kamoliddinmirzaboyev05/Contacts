const nameContact = document.querySelector("#name");
const fam = document.querySelector("#fam");
const num = document.querySelector("#num");
const email = document.querySelector("#email");
const data = document.querySelector("#data");
const addBtn = document.querySelector(".addBtn");
const addButton = document.querySelector("#addButton");
const contacts = document.querySelector(".contacts");
const search = document.querySelector(".search");
const darkMode = document.querySelector(".dark");
const codes = document.querySelector(".codes");
const body = document.querySelector("body");
const p = document.querySelectorAll("p");
const cardInput = document.querySelector(".card-input");
const cardImg = document.querySelector(".card-img");
const title = document.querySelectorAll(".title");
const block = document.querySelector(".block");
const inputs = document.querySelectorAll("input");
const nav = document.querySelector("nav");

var writeContact = () => {
  contacts.innerHTML = "";
  db.forEach((item) => {
    contacts.innerHTML += `
         <div class="contact">
                        <div class="data">
                            <img src="img/users.svg" alt="">
                            <div class="contact-data">
                            <h2 >${item.contactName} ${item.contactFam}</h2>
                                <p>${item.contactNum}</p>
                            </div>
                        </div>
                        <div class="btns">
                            <i onclick = "removeContact(${item.id})" class="fa-solid fa-trash"></i>
                            <i onclick = "star()" class="$ fa-regular fa-star star"></i>
                            <i class="fa-solid fa-ellipsis-vertical"></i>
                            </div>
                            </div>
                            `;
  });
};

var db = JSON.parse(localStorage.getItem("db"))
  ? JSON.parse(localStorage.getItem("db"))
  : [];
writeContact();
var dark = 0;
darkMode.addEventListener("click", (e) => {
  e.preventDefault();
  if (dark == 0) {
    dark = 1;
    inputs.forEach((item) => {
      item.classList.add("white");
      item.style.color = "white";
    });
    p.forEach((item) => {
      item.style.color = "white";
    });
    search.style.color = "white";
    search.style.borderColor = "white";
    codes.style.color = "white";
    codes.style.borderColor = "white";
    darkMode.style.color = "white";
    darkMode.style.borderColor = "white";
    body.style.backgroundColor = "#212A3E";
    addBtn.style.backgroundColor = "#fff";
    addButton.style.color = "#394867";
    nav.style.backgroundColor = "#263148";
    cardInput.style.backgroundColor = "#2E3A54";
    cardImg.style.backgroundColor = "#263148";
    block.style.backgroundColor = "#263148";
    title.forEach((item) => {
      item.style.color = "white";
      item.classList.remove("black");
    });
    darkMode.innerHTML = `
    <img src="img/sun.svg" alt="">
  Kunduz rejimi
  `;
  } else if (dark == 1) {
    title.forEach((h2) => {
      h2.classList.add("black");
    });
    p.forEach((item) => {
      item.style.color = "black";
    });
    search.style.color = "#394867";
    search.style.borderColor = "#394867";
    codes.style.color = "#394867";
    codes.style.borderColor = "#394867";
    darkMode.style.color = "#394867";
    darkMode.style.borderColor = "#394867";
    addBtn.style.backgroundColor = "#394867";
    addButton.style.color = "white";
    body.style.backgroundColor = "white";
    nav.style.backgroundColor = "#F6F9FA";
    cardInput.style.backgroundColor = "#F6F9FA";
    cardImg.style.backgroundColor = "#394867";
    block.style.backgroundColor = "#F6F9FA";
    darkMode.innerHTML = `
  <img src="img/tun.svg" alt="" />Tun rejimi
  `;
    dark = 0;
  }
  title.forEach((item) => {
    item.style.color = "white";
  });
});

writeContact();
var stared = document.querySelector(".star");
addBtn.addEventListener("click", () => {
  if (
    nameContact.value == "" ||
    fam.value == "" ||
    num.value == "" ||
    email.value == "" ||
    data.value == ""
  ) {
    alert(
      "Kontakt ma'lumotlari to'liq kiritilmadi. Iltimos barcha ma'lumotlarni kiriting!"
    );
  } else {
    var contact = {
      id: Math.random() * 999,
      contactName: nameContact.value,
      contactFam: fam.value,
      contactNum: num.value,
      contactEmail: email.value,
      contactData: data.value,
    };
    nameContact.value = "";
    fam.value = "";
    num.value = "";
    email.value = "";
    data.value = "";
    db.push(contact);
    localStorage.setItem("db", JSON.stringify(db));
    writeContact();
  }
});

var removeContact = (id) => {
  var newDB = db.filter((item) => {
    return id != item.id;
  });
  db = newDB;
  localStorage.setItem("db", JSON.stringify(db))
  writeContact();
};

var arr = [1, 2, 3, 4, 5];

localStorage.setItem("arr", JSON.stringify(arr));

var newarr = JSON.parse(localStorage.getItem("arr"));

newarr.forEach((item) => {
  console.log(item);
});
