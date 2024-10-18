function fetchdata(){
    fetch(`http://localhost:3000/cart`)
    .then((Res)=>{
        return Res.json()
    }).then((r)=>{
        console.log(r);
        document.querySelector("#box").innerHTML = view(r)
    }).catch((err)=>{
        console.log(err);
    })
}
function del(id){
    console.log(id);
    fetch(`http://localhost:3000/cart/${id}`,{
        
        method:"DELETE",
    }).then((Res)=>{
        return Res.json()
    }).then((r)=>{
        console.log(r);
    }).catch((err)=>{
        console.log(err);
    })
}

function view(arr){
    return arr.map((Element)=>{
        return `
            <img src="${Element.image}" alt="" width="100px"> <br>
            <button id="cart" onclick="del(${Element.id})">delet</button>
            `
    }).join("")
}
fetchdata()