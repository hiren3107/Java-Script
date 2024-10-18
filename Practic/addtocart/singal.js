function fatchdata(){

    var data = new URLSearchParams(window.location.search)
    var id = data.get("id")
    fetch(`http://localhost:3000/product?id=${id}`)
    .then((Res)=>{
        return Res.json()
    }).then((r)=>{
        document.querySelector("#box").innerHTML = view(r)
        document.querySelector("#cart").addEventListener("click",()=>{
            datapost(r)
        })
    }).catch((err)=>{
        console.log(err);
    })
}


function view(arr){
    return arr.map((Element)=>{
        return `
            <img src="${Element.image}" alt="" width="100px"> <br>
            <button id="cart">Add To Cart</button>
            `
    }).join("")
}


function datapost(h){

    fetch(`http://localhost:3000/cart?id=${h[0].id}`)
    .then((Res)=>{
        return Res.json()
    }).then((rr)=>{
        // console.log(rr);
        if(rr.length > 0){
            alert("Nikalo")
        }
        else{
            fetch(`http://localhost:3000/cart`,{
                method : "POST",
                headers : {"Content-Type" : "application/Json"},
                body : JSON.stringify({...h[0],qtt:1})
            }).then((Res)=>{
                return Res.json()
            }).then((r)=>{
                console.log(r);
            }).catch((err)=>{
                console.log(err);
            })
            alert("addddddeddddd")
        }
    }).catch((err)=>{
        console.log(err);
    })


    
}

fatchdata()