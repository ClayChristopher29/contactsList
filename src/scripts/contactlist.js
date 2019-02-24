import BuildContact from "./Contact.js"
import ContactCollection from "./ContactCollection.js"

// A ContactList component that displays all contacts. It should import the Contact component and the ContactCollection component.


const ContactList = () => {
    ContactCollection.getAllContacts()
    .then(contacts => {
        contacts.forEach(singleContact => {
            document.querySelector(".output").innerHTML += BuildContact(singleContact);
        })

    })
}

export default ContactList;