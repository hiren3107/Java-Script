document.querySelector("#pannel").addEventListener("submit", (e) => {
    e.preventDefault

    var valid = true

    var title = document.querySelector("#titel").value
    var prise = document.querySelector("#prise").value
    var img = document.querySelector("#image").value
    var category = document.querySelector("#category").value
    var id = document.querySelector("#ID").value

    if (title.length == 0) {
        // document.querySelector("#err").innerHTML = "Detail Empty"
        alert("Detail Empty")
        valid = false
    }
    else if (prise.length == 0) {
        // document.querySelector("#err").innerHTML = "Detail Empty"
        alert("Detail Empty")
        valid = false
    }
    else if (img.length == 0) {
        // document.querySelector("#err").innerHTML = "Detail Empty"
        alert("Detail Empty")
        valid = false
    }
    else if (category.length == 0) {
        // document.querySelector("#err").innerHTML = "Detail Empty"
        alert("Detail Empty")
        valid = false
    }
    else if (id.length == 0) {
        // document.querySelector("#err").innerHTML = "Detail Empty"
        alert("Detail Empty")
        valid = false
    }

    var obj = {
        title: title,
        prise: prise,
        img: img,
        category: category,
        id : id
    }

    if (valid == true) {
        fetch(`http://localhost:3000/product`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(obj)
        }).then((Res) => {
            return Res.json()
        }).then((r) => {
            console.log(r);
        }).catch((err) => {
            console.log(err);
        })
    }
    

})