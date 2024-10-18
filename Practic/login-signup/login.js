document.querySelector("#loginform").addEventListener("submit",(e)=>{
    e.preventDefault

    var loginemail = document.querySelector("#loginemail").value
    var loginpass = document.querySelector("#loginpass").value

        fetch(`http://localhost:3000/signupdata`)
        .then((Res)=>{
            return Res.json()
        }).then((r)=>{
            getdata(r)
        }).catch((err)=>{
            console.log(err);
        })

  
    
    function getdata(arr){
      var ans = arr.filter((Element)=>{
            if(loginemail == Element.email && loginpass == Element.pass)
            {
                return Element
            }
        })
    
        if(ans.length > 0){
            alert("sacha")
        }
        else{
            alert("khota")
        }
    }

})




