document.getElementById("todoimage").addEventListener("click", () => todos.style.display = "flex")
document.getElementById("todolist").addEventListener("click", () => todos.style.display = "flex")
document.getElementById("closetodos").addEventListener("click", () => todos.style.display = "none")
document.getElementById("todoclear").addEventListener("click", removeTodos)

const todos = document.getElementById("todoitems")
const input = document.querySelector("#todosinput")
const btn = document.querySelector("#todosubmit")
const list = document.querySelector("#todoListItems")

function addTodo(txt) {
    const liNode = document.createElement("div")
    const liImg = document.createElement("img")
    let li = document.createElement("li");
    liImg.src = "images/closetodobutton.svg"
    liImg.style.width = "20px"
    li.innerHTML = txt
    list.insertBefore(li, list.childNodes[0])
    liImg.classList.add("closetodo")
    liNode.classList.add("closealltodos")
    list.appendChild(liNode)
    liNode.appendChild(li)
    liNode.appendChild(liImg)
    liImg.addEventListener("click", (e) => {
      liNode.parentNode.removeChild(liNode)
      savedTasks = savedTasks.filter((e) => e !== txt)
      localStorage.setItem(todos, JSON.stringify(savedTasks))
    })
  }

  // Load saved tasks
  
  let savedTasks = JSON.parse(localStorage.getItem("todos")) || [];
  
  // Add UI elements for any saved task
  
  savedTasks.forEach(addTodo)
  
  btn.addEventListener("click", (event) => {
    event.preventDefault()
    let txt = input.value
    if (txt === "") {
      alert("Please enter a todo!")
    } else {
      savedTasks.push(txt)
      localStorage.setItem("tasks", JSON.stringify(savedTasks))
      input.value = ""
      addTodo(txt)
    }
  });

  // Removing items from todo list

const close = document.getElementsByClassName("closealltodos")
function removeTodos() {
    for (let i = 0; i < close.length; i++) {
        close[i].parentElement.style.display = "none"
    }
    localStorage.setItem("tasks", [])
}

list.addEventListener('click', function(e) {
  if (e.target.tagName == 'LI') {
    e.target.classList.toggle('checked');
  }
}, false)

// Make todos link hover on todos image hover

document.getElementById("todocorner").addEventListener("mouseover", () => {
    document.getElementById("todolist").style.color = "rgb(247, 207, 4)"
})

document.getElementById("todocorner").addEventListener("mouseout", () => {
    document.getElementById("todolist").style.color = "white"
})