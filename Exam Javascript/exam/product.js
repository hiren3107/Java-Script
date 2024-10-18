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
           <a href="singalepage.html?id=${Element.id}"> <div id="card">
                <div id="mainimg">
                    <img src="${Element.img}" alt="">
                </div>
                <div id="text">
                    <h1 id="tit">${Element.title}</h1>
                    <p id="p">price : ${Element.prise}₹</p>
                    <p id="c">category : ${Element.category}</p>
                </div>
            </div></a>
        `
    }).join("")
}

fetchdata()