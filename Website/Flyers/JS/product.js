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
        return `<a href="singalpage.html?id=${Element.id}">
        <div id="cart-img">
          <div id="imghover">
            <img src="${Element.img}" alt="${Element.title}" id="img">
          </div>
          <div id="textbox">
            <h1 id="title">${Element.title}</h1>
            <p>
              <span id="star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </span>
              <span id="rate">
                ${Element.review}
              </span>
            </p>
            <p id="prise">
              $${Element.price}.00+
            </p>
          </div>
        </div>
        </a>`
        }).join("")
    }



