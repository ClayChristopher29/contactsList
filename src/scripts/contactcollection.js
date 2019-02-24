const ContactCollection = {
    saveNewContact: (contactObj) => {
        return fetch("http://localhost:8088/contacts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contactObj)
        })
    },
    getAllContacts: () => {
        return fetch("http://localhost:8088/contacts")
        .then(r=>r.json())
    },
    getUserByUserName = (userName) => {
        return fetch(`http://localhost:8088/users?username=${userName}`)
        .then(r=>r.json())
      },
     addNewUser = (userObj) => {
        return fetch("http://localhost:8088/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(userObj)
        }).then(r=>r.json())
        }
}


export default ContactCollection;