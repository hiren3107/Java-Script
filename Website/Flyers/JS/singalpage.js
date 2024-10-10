
function FetchingData() {
  let data = new URLSearchParams(window.location.search)
  let id = data.get("id")
  fetch(`https://online-api-bhsx.onrender.com/product?id=${id}`)
      .then((res) => {
          return res.json()
      })
      .then((res) => {
          document.getElementById("box").innerHTML = view(res)
          document.getElementById("addtocart").addEventListener("click", () => {
              addToCart(res)
          })
      })
      .catch((err) => {
          console.log(err)
      })
}


function view(arr) {
  return arr.map((Element) => {
      return `
      <center>
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
              <button id="addtocart">Add To Cart &nbsp; $${Element.price}.00+</button>
            </div>
          </div>
      </center>`
  }).join("")
}

function addToCart(res) {
  fetch(`https://online-api-bhsx.onrender.com/cart?id=${res[0].id}`)
      .then((res) => {
          return res.json()
      })
      .then((Res) => {
          if (Res.length > 0) {
            Swal.fire({
              title: "Item is Already Present in Cart !!!!!",
              showClass: {
                popup: `
                  animate__animated
                  animate__fadeInUp
                  animate__faster
                `
              },
              hideClass: {
                popup: `
                  animate__animated
                  animate__fadeOutDown
                  animate__faster
                `
              }
            });
          } else {
              fetch(`https://online-api-bhsx.onrender.com/cart`, {
                  method: "POST",
                  headers: {
                      'Content-Type': "application/json"
                  },
                  body: JSON.stringify(res[0])
              })
                  .then((Res) => {
                      return Res.json()
                  })
                  .then((Res) => {
                      console.log(Res)
                  })
                  .catch((err) => {
                      console.log(err)
                  })
          }
      })
      .catch((err) => {
          console.log(err)
      })

}


FetchingData()


