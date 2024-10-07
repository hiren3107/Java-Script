var data = new URLSearchParams(window.location.search)
var id = data.get("id")
fetch(`http://localhost:3000/product?id=${id}`)
    .then((res) => {
        return res.json()
    }).then((Res) => {
        document.querySelector("#box").innerHTML = view(Res)
    }).catch((err) => {
        console.log(err);
    })

function view(arr) {
    return arr.map((Element) => {
        return `<div id="card">
            <div>
                <img src="${Element.img}" alt="${Element.title}" width="200px">
            </div>
        </div>`}).join("")
}