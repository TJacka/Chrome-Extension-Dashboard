fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.full})`
		document.getElementById("location").textContent = `${data.location.name}`
        document.getElementById("author").textContent = `${data.user.name}`
    })
    .catch(err => {
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080)`
		document.getElementById("author").textContent = `By: Dodi Achmad`
    })

function getCurrentTime() {
    const date = new Date()
    document.getElementById("time").textContent = date.toLocaleTimeString("en-us", {timeStyle: "short"}).toLowerCase()
}

setInterval(getCurrentTime, 1000)

navigator.geolocation.getCurrentPosition(position => {
    let latitude = position.coords.latitude
    let longitude = position.coords.longitude
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude.toFixed(0)}&lon=${longitude.toFixed(1)}&units=imperial&appid=80c02431694c667ce0c628484bfb0bdb`)
        .then(res => {
            if (!res.ok) {
                throw Error("Weather data not available")
            }
            return res.json()
        })
        .then(data => {
            console.log(data)
            const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            document.getElementById("weather").innerHTML = `
                <img src=${iconUrl} />
                <p class="weather-temp">${Math.round(data.main.temp)}º</p>
                <p class="weather-city">${data.name}</p>
            `
        })
        .catch(err => console.error(err))
});
