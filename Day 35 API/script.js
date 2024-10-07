

fetch(`https://fakestoreapi.com/products`).then((r) => {
    return r.json()
}).then((res) => {
   document.getElementById("box").innerHTML = jovo(res)
}).catch((err) => {
    console.log("Error")
})

function jovo(arr) {
    return arr.map((Element) => {
        return `
        <div id="card">
            <div>
                <img src="${Element.image}" alt="${Element.title}">
            </div>
            <div id="text">
                <p id="title">${Element.title} - ₹ ${Element.price}</p>
                <p id="description">${Element.description}</p>

            </div>

        </div>
        `
    })
}