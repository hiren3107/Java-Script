var arr = JSON.parse(localStorage.getItem("data")) || []

var valid = true

document.querySelector("#form").addEventListener("submit", (hiren) => {
    hiren.preventDefault()

    var obj = {
        titel : document.querySelector("#title").value,
        price : document.querySelector("#price").value,
        img : document.querySelector("#imgurl").value
    }

    if (obj.titel == "") {
        alert("Please Enter Title")
        valid = false
    }
    else if (obj.price == "") {
        alert("Please Enter Price")
        valid = false

    }
    else if (obj.img == "") {
        alert("Please Enter Image URL")
        valid = false

    }
        

    if (valid == true) {
        arr.push(obj)
    }

    localStorage.setItem("data", JSON.stringify(arr))
    
        document.querySelector("#title").value = ""
        document.querySelector("#price").value = ""
        document.querySelector("#imgurl").value = ""
})



function cart() {
    return arr.map((Element) => {
        return `<div>
        <div>
        <img src = "${Element.img}" alt ="${Element.titel}">
        </div>
        <div>
        <h1>${Element.titel} -- ${Element.price}</h1>
        </div>
        </div>`
    }).join("")

}

document.getElementById("jovo").innerHTML = cart()