const links = document.getElementById("links")
const todos = document.getElementById("todoitems")
const close = document.getElementsByClassName('closetodo')
const closelink = document.getElementsByClassName('closelink')

// Fetching background image and details

document.getElementById("imagesettings").addEventListener("click", () => getBackgroundImage())

function getBackgroundImage() {
    fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.regular})`
        
        if (data.location.name) {
            document.getElementById("location").textContent = `${data.location.name}`
            } else {
            document.getElementById("location").textContent = "Unknown"
        }
        const photographer = data.user.name
        photographer[0].toUpperCase() + photographer.substring(1)
        if (photographer) {
            document.getElementById("photographer").textContent = `${photographer}`
            } else {
            document.getElementById("photographer").textContent = `Unknown`
        }
    })
    .catch(err => {
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080)`
        document.getElementById("author").textContent = `By: Dodi Achmad`
    })
}

getBackgroundImage()


// Getting current time

function getCurrentTime() {
    const date = new Date()
    document.getElementById("time").textContent = date.toLocaleTimeString("en-us", {timeStyle: "short"}).toLowerCase()
}
getCurrentTime()


// Fetching weather info

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
                <img class="weathericon" src=${iconUrl} />
                <p class="weather-temp">${Math.round(data.main.temp)}º</p>
                <p class="weather-city">${data.name}</p>
            `
        })
        .catch(err => console.error(err))
});


// Todo List

document.getElementById("todosubmit").addEventListener("click", addTodo)
document.getElementById("todoimage").addEventListener("click", () => todos.style.display = "flex")
document.getElementById("todolist").addEventListener("click", () => todos.style.display = "flex")
document.getElementById("closetodos").addEventListener("click", () => todos.style.display = "none")
document.getElementById("todoclear").addEventListener("click", removeAllChildNodesTodos)

function getTodos() {
    for (let i = 0; i < localStorage.length; i++) {
        let todoItem = localStorage.getItem(i);
        
        const inputText = todoItem
        const listNode = document.getElementById('todoListItems')
        const textNode = document.createTextNode(inputText)
        const liNode = document.createElement("div")
        const li = document.createElement("li")
        const liImg = document.createElement("img")
        const close = document.getElementsByClassName("closetodo")
        liImg.src = "images/closetodobutton.svg"
        liImg.style.width = "20px"
        liImg.className = "closetodo"
        li.className = "liclass"
        liImg.id = `${i}`
        listNode.appendChild(liNode)
        liNode.appendChild(li)
        liNode.appendChild(liImg)
        li.appendChild(textNode)
        for (let i = 0; i < close.length; i++) {
            close[i].onclick = () => {
                close[i].parentElement.style.display = "none"
                localStorage.removeItem(i)
            } 
        }
    }
}

getTodos()


function addTodo() {
    if (document.getElementById("todosinput").value === "") {
        alert("Please enter a todo item")
        return
    }
    const inputText = document.getElementById('todosinput').value
    const listNode = document.getElementById('todoListItems')
    const liNode = document.createElement("div")
    const li = document.createElement("li")
    const liImg = document.createElement("img")
    const textNode = document.createTextNode(inputText)
    const close = document.getElementsByClassName("closetodo")
    const liclass = document.getElementsByClassName("liclass")
    liImg.src = "images/closetodobutton.svg"
    liImg.style.width = "20px"
    liImg.className = "closetodo"
    li.className = "liclass"
    listNode.appendChild(liNode)
    liNode.appendChild(li)
    liNode.appendChild(liImg)
    li.appendChild(textNode)
    localStorage.setItem(liclass.length - 1, inputText)
    document.getElementById("todosinput").value = "";  
}

// Removing items from todo list

function removeAllChildNodesTodos() {
    for (let i = 0; i < close.length; i++) {
        close[i].parentElement.style.display = "none"
    }
    localStorage.clear()
}

// Add a "checked" symbol when clicking on a list item

const list = document.getElementById('todoListItems');
list.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
  }
}, false);


// Links list

document.getElementById("closelinks").addEventListener("click", () => links.style.display = "none")
document.getElementById("linkslist").addEventListener("click", () => links.style.display = "flex")
document.getElementById("linksimage").addEventListener("click", () => links.style.display = "flex")
document.getElementById("linksubmit").addEventListener("click", addLink)
document.getElementById("linksclear").addEventListener("click", removeAllChildNodesLinks)

function addLink() {
    if (document.getElementById("linksinput").value === "") {
        alert("Please enter a link")
        return
    }
    const inputText = document.getElementById('linksinput').value
    const listNode = document.getElementById('linkListItems')
    const liNode = document.createElement("div")
    const li = document.createElement("li")
    const liImg = document.createElement("img")
    const textNode = document.createTextNode(inputText)
    const closelink = document.getElementsByClassName("closelink")
    liImg.src = "images/closetodobutton.svg"
    liImg.style.width = "20px"
    liImg.className = "closelink"
    listNode.appendChild(liNode)
    liNode.appendChild(li)
    liNode.appendChild(liImg)
    li.appendChild(textNode)
    for (let i = 0; i < closelink.length; i++) {
        closelink[i].onclick = () => {
            closelink[i].parentElement.style.display = "none"
            } 
    }
    document.getElementById("linksinput").value = "";   
}

// Removing items from links list

function removeAllChildNodesLinks() {
    for (let i = 0; i < closelink.length; i++) {
        closelink[i].parentElement.style.display = "none"
    }
}

// Add a "checked" symbol when clicking on a list item

const listlinks = document.getElementById('linkListItems');
listlinks.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
  }
}, false);


// Fetching quote of the day

let quoteNum = Math.floor(Math.random() * 1643)

fetch(`https://type.fit/api/quotes`)
    .then(res => res.json())
    .then(data => {
        const quoteAuthor = data[quoteNum].author
        if (quoteAuthor == null) {
            quoteAuthor = "Unknown"
        }
        document.getElementById("quote").innerHTML = `<div class="quotediv"><h2><span>&#8220</span>${data[quoteNum].text}<span>&#8221</span></h2><p>-${quoteAuthor}</p></div>`
    })
    .catch(err => {
		document.getElementById("quote").innerHTML = `<div class="quotediv"><h2><span>&#8220</span>Knowing is not enough; we must apply. Willing is not enough; we must do.<span>&#8221</span></h2><p>-Johann Wolfgang von Goethe</p></div>`
    })


    // Make todos link hover on todos image hover

    document.getElementById("todocorner").addEventListener("mouseover", () => {
        document.getElementById("todolist").style.color = "rgb(247, 207, 4)"
    })

    document.getElementById("todocorner").addEventListener("mouseout", () => {
        document.getElementById("todolist").style.color = "white"
    })

    
    // Make links link hover on todos image hover

    document.getElementById("linkscorner").addEventListener("mouseover", () => {
        document.getElementById("linkslist").style.color = "rgb(247, 207, 4)"
    })

    document.getElementById("linkscorner").addEventListener("mouseout", () => {
        document.getElementById("linkslist").style.color = "white"
    })
