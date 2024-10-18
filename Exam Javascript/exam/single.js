function fetchdata() {
    fetch(`http://localhost:3000/product`)
        .then((Res) => {
            return Res.json()
        }).then((r) => {
            console.log(r);
            document.querySelector("#box").innerHTML = view(r)
        }).catch((err) => {
            console.log(err);
        })
}

function view(arr) {
    return arr.map((Element) => {
        return `
            <div id="card">
                <div id="mainimg">
                    <img src="${Element.img}" alt="">
                </div>
                <div id="text">
                    <h1 id="tit">${Element.title}</h1>
                    <p id="p">price : ${Element.prise}₹</p>
                    <p id="c">category : ${Element.category}</p>
                    <button id="del" onclick="del(${Element.id})">Delete</button>
                    <button id="edit" onclick="edit(${Element.id})">Edit</button>
                </div>
            </div>
        `
    }).join("")
}

fetchdata()

function del(id) {
    console.log(id);
    fetch(`http://localhost:3000/product/${id}`, {
        method : "DELETE"
    })
    
}


function edit() {
    document.querySelector("#modal").style.display = "block"
}


