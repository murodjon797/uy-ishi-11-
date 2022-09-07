let elContactForm = $(".js-contact-form");
let elContactName = $(".js-contact-name", elContactForm);
let elContactSurname = $(".js-contact-surname", elContactForm);
let elContactRelationship = $(".js-contact-relationship", elContactForm);
let elContactTelephone = $(".js-contact-telephone", elContactForm);

let elContactList = $(".js-contacts-list");

let contactsList = [];

let renderContacts = function() {
  elContactList.innerHTML = "";

  for (let i = 0; i < contactsList.length; i++) {
    let elNewFullname = document.createElement("li");
    elNewFullname.textContent = `${contactsList[i].name} ${contactsList[i].surname}`
    
    elContactList.appendChild(elNewFullname);
  }
}

elContactForm.addEventListener("submit", function(evt) {
  evt.preventDefault();

  let contactName = elContactName.value.trim();
  let contactSurname = elContactSurname.value.trim();
  let contactRelationship = elContactRelationship.value.trim();
  let contactTelephone = elContactTelephone.value.trim();

  // contactsList.push({
  //   name: contactName,
  //   surname: contactSurname,
  //   relationship: contactRelationship,
  //   telephone: contactTelephone,
  // })

  let contactPerson = {
    name: contactName,
    surname: contactSurname,
    relationship: contactRelationship,
    telephone: contactTelephone,
  }

  contactsList.push(contactPerson);

  renderContacts();
})