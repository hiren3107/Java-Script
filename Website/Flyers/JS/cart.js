fetch(`https://online-api-bhsx.onrender.com/cart`)
.then((res) => {
    return res.json()
}).then((Res) => {
    document.querySelector("#box").innerHTML = view(Res)
}).catch((err) => {
    console.log(err);
})

function view(arr) {
    console.log(arr);
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
        <div id="increment">
            <button id="inc_btn1" onclick="minus(${Element.id},${Element.qtt})">-</button>
            <input type="text" value="${Element.qtt}" disabled id="qnt">
            <button id="inc_btn2" onclick="pluse(${Element.id},${Element.qtt})">+</button>
        </div>
    </div>
 </div> 
`}).join("")
}

function dd(id){
    fetch(`https://online-api-bhsx.onrender.com/cart/${id}`,{
        method:"DELETE",
    })
    .then((res) => {
        return res.json()
    }).then((Res) => {
        console.log(Res);
        // document.querySelector("#box").innerHTML = view(Res)
    }).catch((err) => {
        console.log(err);
    })
}

function minus(id,qtt){

    var h = qtt

 
        h = h - 1;
    

    fetch(`https://online-api-bhsx.onrender.com/cart/${id}`,{
        method:"PATCH",
        headers : {
            'Content-Type' : "application/json"
        },
        body : JSON.stringify({qtt : h})
    })
    .then((res) => {
        return res.json()
    }).then((Res) => {
        console.log(Res);
        // document.querySelector("#box").innerHTML = view(Res)
    }).catch((err) => {
        console.log(err);
    })

}
function pluse(id,qtt){
    var h = qtt

        h = h + 1;
    
    fetch(`https://online-api-bhsx.onrender.com/cart/${id}`,{
        method:"PATCH",
        headers : {
            'Content-Type' : "application/json"
        },
        body : JSON.stringify({qtt : h})
    })
    .then((res) => {
        return res.json()
    }).then((Res) => {
        document.querySelector("#box").innerHTML = view(Res)
    }).catch((err) => {
        console.log(err);
    })
}