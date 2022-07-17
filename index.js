window.setInterval('refresh()', 3600000);

// Fetching background image and details

document.getElementById("image--settings").addEventListener("click", () => getBackgroundImage())

function getBackgroundImage() {
    fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.regular})`
        if (data.location.name) {
            document.getElementById("image--location").innerText = `${data.location.name}`
            } else {
            document.getElementById("image--location").textContent = "Unknown"
        }
        const photographer = data.user.name
        photographer[0].toUpperCase() + photographer.substring(1)
        if (photographer) {
            document.getElementById("image--photographer").textContent = `${photographer}`
            } else {
            document.getElementById("image--photographer").textContent = `Unknown`
        }
    })
    .catch(err => {
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080)`
        document.getElementById("quote--author").textContent = `By: Dodi Achmad`
    })
}

getBackgroundImage()
setInterval(36000000, getBackgroundImage)


// Getting current time

function getCurrentTime() {
    const date = new Date()
    document.getElementById("time").textContent = date.toLocaleTimeString("en-us", {timeStyle: "short"}).toLowerCase()
}
getCurrentTime()
setInterval(getCurrentTime, 30000)

// Fetching weather info

function getWeather() {
const slug1 = "80c02431694c6"
const slug4 = "67ce0c628484bfb0bdb"

navigator.geolocation.getCurrentPosition(position => {
    let latitude = position.coords.latitude
    let longitude = position.coords.longitude

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude.toFixed(2)}&lon=${longitude.toFixed(2)}&units=imperial&appid=${slug1}${slug4}`)
        .then(res => {
            if (!res.ok) {
                throw Error("Weather data not available")
            }
            return res.json()
        })
        .then(data => {
            const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            document.getElementById("weather").innerHTML = `
                <img class="weather--icon" src=${iconUrl} />
                <p class="weather--temp">${Math.round(data.main.temp)}º</p>
                <p class="weather--city">${data.name}</p>
            `
        })
        .catch(err => console.error(err))
});}

getWeather()
setInterval(getWeather, 600000)


// Fetching quote of the day

let quoteNum = Math.floor(Math.random() * 1643)

fetch(`https://type.fit/api/quotes`)
    .then(res => res.json())
    .then(data => {
        const quoteAuthor = data[quoteNum].author
        if (quoteAuthor == null) {
            quoteAuthor = "Unknown"
        }
        document.getElementById("quote").innerHTML = `<div class="quote--div"><h2><span>&#8220</span>${data[quoteNum].text}<span>&#8221</span></h2><p>-${quoteAuthor}</p></div>`
    })
    .catch(err => {
		document.getElementById("quote").innerHTML = `<div class="quote--div"><h2><span>&#8220</span>Knowing is not enough; we must apply. Willing is not enough; we must do.<span>&#8221</span></h2><p>-Johann Wolfgang von Goethe</p></div>`
    })