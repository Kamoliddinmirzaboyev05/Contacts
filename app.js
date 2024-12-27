const nameContact = document.querySelector("#name");
const fam = document.querySelector("#fam");
const num = document.querySelector("#num");
const email = document.querySelector("#email");
const data = document.querySelector("#data");
const addBtn = document.querySelector("#addBtn");
const contacts = document.querySelector(".contacts");
var db = [];

var writeContact = () => {
  contacts.innerHTML = "";
  db.forEach((item) => {
    contacts.innerHTML += `
         <div class="contact">
                        <div class="data">
                            <img src="img/users.svg" alt="">
                            <div class="contact-data">
                                <h2>${item.contactName} ${item.contactFam}</h2>
                                <p>${item.contactNum}</p>
                            </div>
                        </div>
                        <div class="btns">
                            <i onclick = "removeContact(${item.id})" class="fa-solid fa-trash"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-solid fa-ellipsis-vertical"></i>
                        </div>
                    </div>
        `;
  });
};
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
    writeContact();
  }
});

var removeContact = (id) => {
  var newDB = db.filter((item) => {
    return id != item.id;
  });
  db = newDB;
  writeContact();
};
