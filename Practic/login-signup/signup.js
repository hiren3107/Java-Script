
document.querySelector("#signupform").addEventListener("submit",(e)=>{
    e.preventDefault
    
    var signupemail = document.querySelector("#signupemail").value
    var signuppass = document.querySelector("#signuppass").value
    
    var valid = true
    // document.querySelector("#textemail").innerHTML = ""
    // document.querySelector("#textpass").innerHTML = ""

    if( signupemail.length == 0){
        document.querySelector("#textemail").innerHTML = "Email khali"
        valid = false
    }
    if(signuppass.length < 8)
    {
        document.querySelector("#textpass").innerHTML = "pass khali"
        valid = false
    }

    var obj = {
        email : signupemail,
        pass : signuppass
    }

    if(valid == true){
        fetch(`http://localhost:3000/signupdata`,{
            method : "POST",
            headers : {
                "Content-Type" : "application/Json"
            },
            body : JSON.stringify(obj)
        }).then((Res)=>{
            return Res.json()
        }).then((r)=>{
            console.log(r);
        }).catch((err)=>{
            console.log(err);
        })
    }


})