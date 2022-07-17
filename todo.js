document.getElementById("todo--image").addEventListener("click", () => todos.style.display = "flex")
document.getElementById("todo--list").addEventListener("click", () => todos.style.display = "flex")
document.getElementById("close--todo").addEventListener("click", () => todos.style.display = "none")
document.getElementById("todo--clear").addEventListener("click", removeTodos)

const todos = document.getElementById("todo--items")
const input = document.querySelector("#todo--input")
const btn = document.querySelector("#todo--submit")
const list = document.querySelector("#todo--list--items")

function addTodo(txt) {
    const liNode = document.createElement("div")
    const liImg = document.createElement("img")
    let li = document.createElement("li");
    liImg.src = "images/closetodobutton.svg"
    liImg.style.width = "20px"
    li.innerHTML = txt
    list.insertBefore(li, list.childNodes[0])
    liImg.classList.add("close--todo")
    liNode.classList.add("close--all--todo")
    list.appendChild(liNode)
    liNode.appendChild(li)
    liNode.appendChild(liImg)
    liImg.addEventListener("click", (e) => {
      liNode.parentNode.removeChild(liNode)
      savedTasks = savedTasks.filter((e) => e !== txt)
      localStorage.setItem("todo", JSON.stringify(savedTasks))
    })
  }

  // Load saved tasks
  
  let savedTasks = JSON.parse(localStorage.getItem("todo")) || [];
  
  // Add UI elements for any saved task
  
  savedTasks.forEach(addTodo)
  
  btn.addEventListener("click", (event) => {
    event.preventDefault()
    let txt = input.value
    if (txt === "") {
      alert("Please enter a todo!")
    } else {
      savedTasks.push(txt)
      localStorage.setItem("todo", JSON.stringify(savedTasks))
      input.value = ""
      addTodo(txt)
    }
  });

  // Removing items from todo list

const close = document.getElementsByClassName("close--all--todo")
function removeTodos() {
    for (let i = 0; i < close.length; i++) {
        close[i].style.display = "none"
    }
    localStorage.removeItem("todo")
}

list.addEventListener('click', function(e) {
  if (e.target.tagName == 'LI') {
    e.target.classList.toggle('checked');
  }
}, false)

// Make todos link hover on todos image hover

document.getElementById("todo--corner").addEventListener("mouseover", () => {
    document.getElementById("todo--list").style.color = "rgb(247, 207, 4)"
})

document.getElementById("todo--corner").addEventListener("mouseout", () => {
    document.getElementById("todo--list").style.color = "white"
})