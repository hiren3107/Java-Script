
    document.querySelector("#btn").addEventListener("click", ()=>{

        fetch(`https://dog.ceo/api/breeds/image/random`)
        .then((h)=>{
            return h.json()
        }).then((hh)=>{
            document.querySelector("#card").innerHTML = view(hh)
        }).catch((err)=>{
            console.log(err)
        })
    })

    function view (arr){
        
            return `<img src="${arr.message}" alt="image" width="650px" height="500px">`
    }