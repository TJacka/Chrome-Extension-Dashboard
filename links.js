document.getElementById("close--links").addEventListener("click", () => links.style.display = "none")
document.getElementById("links--list").addEventListener("click", () => links.style.display = "flex")
document.getElementById("links--image").addEventListener("click", () => links.style.display = "flex")
document.getElementById("links--clear").addEventListener("click", removeLinks)

const links = document.getElementById("links")
const linksInput = document.getElementById("links--input")
const linksBtn = document.getElementById("links--submit")
const linksList = document.getElementById("links--list--items")

function addLink(txt) {
    const liNode = document.createElement("div")
    const liImg = document.createElement("img")
    let li = document.createElement("li")
    liImg.src = "images/closetodobutton.svg"
    liImg.style.width = "20px"
    li.innerHTML = `<a href="https://${txt}" target="_blank">${txt}</a>`
    linksList.insertBefore(li, linksList.childNodes[0])
    liImg.classList.add("close--links")
    liNode.classList.add("close--all--links")
    linksList.appendChild(liNode)
    liNode.appendChild(li)
    liNode.appendChild(liImg)
    liImg.addEventListener("click", (e) => {
      liNode.parentNode.removeChild(liNode)
      savedLinks = savedLinks.filter((e) => e !== txt)
      localStorage.setItem("links", JSON.stringify(savedLinks))
    })
  }

  // Load saved tasks
  
  let savedLinks = JSON.parse(localStorage.getItem("links")) || [];
  
  // Add UI elements for any saved task
  
  savedLinks.forEach(addLink)
  
  linksBtn.addEventListener("click", (event) => {
    event.preventDefault()
    let txt = linksInput.value
    if (txt === "") {
      alert("Please enter a link!")
    } else {
      savedLinks.push(txt)
      localStorage.setItem("links", JSON.stringify(savedLinks))
      linksInput.value = ""
      addLink(txt)
    }
  });

  // Removing items from todo list

const closeLink = document.getElementsByClassName("close--all--links")
function removeLinks() {
    for (let i = 0; i < closeLink.length; i++) {
        closeLink[i].style.display = "none"
    }
    localStorage.removeItem("links")
}

// Make links link hover on todos image hover

document.getElementById("links--corner").addEventListener("mouseover", () => {
    document.getElementById("links--list").style.color = "rgb(247, 207, 4)"
})

document.getElementById("links--corner").addEventListener("mouseout", () => {
    document.getElementById("links--list").style.color = "white"
})