const Contact = (singleContactObj) => {
    return ` <div class="card" id="contact-card">
    <h3>${singleContactObj.name}</h3>
    <p>${singleContactObj.phone}</p>
    <p>${singleContactObj.email}</p>
 </div>`
 }

 export default Contact;