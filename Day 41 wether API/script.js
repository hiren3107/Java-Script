function fun() {
    var city = document.querySelector("#city").value

    var def = "";

    if(city == "")
    {
        def = "botad";
    }
    else{
        def = city;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${def}&appid=a7acb9d491231e03f5abbe20ff1345df&units=metric`)
        .then((res) => {
            return res.json()
                .then((r) => {
                    console.log(r);
                    document.querySelector("#box").innerHTML = view(r)
                }).catch((err) => {
                    console.log(err);
                })
        })
}


document.querySelector("#h").addEventListener("click", fun)

function view(arr) {
        return `
        <div id="inputbox">
        <p id="p">Current Weather</p>
    </div>
    <div id="databox">
    <h1 id="position">${arr.name}</h1>
    <div id="maindata">
            <div>
                <img src="https://openweathermap.org/img/wn/${arr.weather[0].icon}@2x.png" id="img">
            </div>
            <div id="flex">
                <h1 id="temp">${~~arr.main.temp}°</h1>
                <div>
                    <p id="c">C</p>
                    <p id="f">F</p>
                </div>
            </div>
        </div>
        <div id="sidebox">
            <div id="first">
                <h1 id="max">Temp Max</h1>
                <h1 id="maxdata">${arr.main.temp_max}°</h1>
            </div>
            <div id="first">
                <h1 id="max">Temp Min</h1>
                <h1 id="maxdata">${arr.main.temp_min}°</h1>
            </div>
            <div id="first">
                <h1 id="max">Wind</h1>
                <h1 id="maxdata">${arr.wind.speed} km/h</h1>
            </div>
            <div id="forth">
                <h1 id="max">Humidity</h1>
                <h1 id="maxdata">${arr.main.humidity}%</h1>
            </div>
        </div>
    </div>
        `
}

fun()