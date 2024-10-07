var a = localStorage.getItem("a")
document.querySelector("#plus").addEventListener("click" , () => {

    a++

    localStorage.setItem("a", a)
    
    document.querySelector("h1").innerText = a;
});


document.querySelector("#minus").addEventListener("click", () => {
  a--;

  localStorage.setItem("a", a);

  document.querySelector("h1").innerText = a;
});