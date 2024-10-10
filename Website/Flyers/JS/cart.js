fetch(`https://online-api-bhsx.onrender.com/cart`)
.then((res) => {
    return res.json()
}).then((Res) => {
    document.querySelector("#box").innerHTML = view(Res)
}).catch((err) => {
    console.log(err);
})

function view(arr) {
return arr.map((Element) => {
    return `
    <div id="cartmain">
    <div id="img">
      <img src="${Element.img}" alt="${Element.title}" width="300px" height="300px">
    </div>
    <div id="text">
      <h1 id="title">${Element.title}</h1>
      <p id="prise">
       $${Element.price}.00+
      </p>
    </div>
    <div id="button">
        <button id="check" onclick=" dd(${Element.id})">Delete</button>

    </div>
 </div> 
`}).join("")
}

function dd(id){
    fetch(`https://online-api-bhsx.onrender.com/cart/${id}`,{
        method:"DELETE",
    })
    .then((res)=>{
        return res.json();
    })
}