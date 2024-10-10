var moviname = document.getElementById("search")
var type = document.querySelector("#goto")

document.querySelector("#search").addEventListener("input", () => {

    if(moviname.value)
    {
        data(moviname.value)
    }

})

document.querySelector("#goto").addEventListener("change", () => {
    if (type.value) {
        
        data(moviname.value,type.value)
    }
    // console.log(movietype.value);
    // console.log(movietype);
})

function data(movie,type="movie") {

    // console.log(type);
    // var def = "";

    // if(movie == "")
    // {
    //     def = "money";
    // }
    // else{
    //     def = movie;
    // }


    fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=5a26bb36&s=${movie}&type=${type}`)
        .then((res) => {
            return res.json()
        }).then((r) => {
            if (r.Response == 'False') {
                console.log("nathi bhai");
            }
            else {
                document.querySelector("#main").innerHTML = view(r.Search)
                // console.log(r);
            }
        }).catch((err) => {
            console.log(err);
        })

}


function view(arr){
    return arr.map((Element)=>{
      return  `
        <div id="no1">
            <img src="${Element.Poster}" alt=""/>
            <div id="detail">
                <h1 id="titel">
                ${Element.Title}
                </h1>
                <p id="ty">
                    <span id="s">Type :</span> 
                    <span>${Element.Type}</span> 
                </p>
                <p id="ty">
                    <span id="s">Year :</span> 
                    <span>${Element.Year}</span> 
                </p>
            </div>
        </div>
    `
    }).join("")
}




