
fetch(`http://localhost:3000/product`)
.then((Res)=>{
    return Res.json()
}).then((r)=>{
    document.querySelector("#box").innerHTML = view(r)
}).catch((err)=>{
    console.log(err);
})

function view(arr){
    return arr.map((Element)=>{
        return `
        <a href="singal.html?id=${Element.id}">
            <img src="${Element.image}" alt="" width="100px">
        </a>
            `
    }).join("")
}