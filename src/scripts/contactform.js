import ContactCollection from "./ContactCollection";
import buildContactObject from "./ContactBuilder";
import ContactList from "./ContactList";

const ContactForm = {
  buildForm: () => {
    return `
    <div class="form" id="contact-form">
      <h3>Add a New Contact</h3>
      <form action="">
        <input type="text" id="contact-name" placeholder="Name">
        <input type="tel" id="contact-phone" placeholder="Phone">
        <input type="email" id="contact-email" placeholder="Email">
      </form>
      <button id="save-contact">Save Contact</button>
    </div>`;
  },
  activateSaveButton: () => {
      document.querySelector(".output").addEventListener("click", () => {
        if(event.target.id === "save-contact"){


            const nameVal = document.querySelector("#contact-name").value;
            const phoneVal = document.querySelector("#contact-phone").value;
            const emailVal = document.querySelector("#contact-email").value;


            const objectToPost = buildContactObject(nameVal, phoneVal, emailVal);


            ContactCollection.saveNewContact(objectToPost)
            .then(() => {

                ContactList();
            })

        }

      })
  }
};

export default ContactForm;