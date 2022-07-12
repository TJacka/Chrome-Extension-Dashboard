document.getElementById("closelinks").addEventListener("click", () => links.style.display = "none")
document.getElementById("linkslist").addEventListener("click", () => links.style.display = "flex")
document.getElementById("linksimage").addEventListener("click", () => links.style.display = "flex")
document.getElementById("linksclear").addEventListener("click", removeLinks)

const links = document.getElementById("links")
const linksInput = document.querySelector("#linksinput")
const linksBtn = document.querySelector("#linksubmit")
const linksList = document.querySelector("#linkListItems")

function addLink(txt) {
    const liNode = document.createElement("div")
    const liImg = document.createElement("img")
    let li = document.createElement("li")
    liImg.src = "images/closetodobutton.svg"
    liImg.style.width = "20px"
    li.innerHTML = `<a href="https://${txt}" target="_blank">${txt}</a>`
    linksList.insertBefore(li, linksList.childNodes[0])
    liImg.classList.add("closelink")
    liNode.classList.add("closealllinks")
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

const closeLink = document.getElementsByClassName("closealllinks")
function removeLinks() {
    for (let i = 0; i < closeLink.length; i++) {
        closeLink[i].style.display = "none"
    }
    localStorage.removeItem("links")
}

// Make links link hover on todos image hover

document.getElementById("linkscorner").addEventListener("mouseover", () => {
    document.getElementById("linkslist").style.color = "rgb(247, 207, 4)"
})

document.getElementById("linkscorner").addEventListener("mouseout", () => {
    document.getElementById("linkslist").style.color = "white"
})