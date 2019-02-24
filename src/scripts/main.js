import ContactList from "./contactlist.js"
import ContactForm from "./contactform.js"
import handleLogin from "./Login.js"
import handleLogOut from "./LogOut.js"
import handleRegister from "./register.js"

document.querySelector(".output").innerHTML = ContactForm.buildForm();


ContactForm.activateSaveButton()


ContactList()
document.querySelector("#register").addEventListener("click",()=>{
    handleRegister();
})
document.querySelector("#login").addEventListener("click",()=>{
    handleLogin();
})
document.querySelector("#logout").addEventListener("click",()=>{
    handleLogOut();
})