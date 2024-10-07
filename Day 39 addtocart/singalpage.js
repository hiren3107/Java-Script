var data = new URLSearchParams(window.location.search)
var id = data.get("id")
fetch(`http://localhost:3000/product?id=${id}`)
    .then((res) => {
        return res.json()
    }).then((Res) => {
        document.querySelector("#box").innerHTML = view(Res)
        document.querySelector("#cart").addEventListener("click", () => {
            // console.log(Res.length);
            
            if (Res.length > 0) {
               alert("che pelethi")
            } else {
                fetch(`http://localhost:3000/cart`, {
                    method: "POST",
                    headers: { "Contant-Type": "application/json" },
                    body: JSON.stringify(Res[0])
                }).then((res) => {
                    return res.json()
                }).then((r) => {
                    console.log(r);
                }).catch((err) => {
                    console.log(err);
                })
           }
        })
    }).catch((err) => {
        console.log(err);
    })

function view(arr) {
    return arr.map((Element) => {
        return `<div id="card">
            <div>
                <img src="${Element.img}" alt="${Element.title}" width="200px">
            </div>
            <button id="cart">Add To Cart</button> 
        </div>`}).join("")

}

