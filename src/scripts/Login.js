const handleLogin = () =>{
    const userNameVal = document.querySelector("#username-login").value;
    const passwordVal = document.querySelector("#password-login").value;
    getUserByUserName(userNameVal)
    .then((parsedUser)=>{
        if(passwordVal===parsedUser[0].password){
            sessionStorage.setItem("userId",parsedUser[0].id)


        }
        else{
            console.warn("Incorrect Password")
        }
    })

}
export default handleLogin;