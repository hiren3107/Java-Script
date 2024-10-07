fetch(`http://localhost:3000/product`)
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
            <div id="card">
            <div>
                <img src="${Element.img}" alt="${Element.title}">
            </div>
            <div id="text">
                <p id="title">${Element.title} - ₹ ${Element.price}</p>
                <p id="description">${Element.review}</p>

            </div>

        </div>`
        }).join("")
    }