
document.getElementById("todoimage").addEventListener("click", () => todos.style.display = "flex")
document.getElementById("todolist").addEventListener("click", () => todos.style.display = "flex")
document.getElementById("closetodos").addEventListener("click", () => todos.style.display = "none")
document.getElementById("todoclear").addEventListener("click", removeAllChildNodesTodos)

let input = document.querySelector("#todosinput");
let btn = document.querySelector("#todosubmit");
let list = document.querySelector("#todoListItems");

function addTodo(txt) {
    const liNode = document.createElement("div")
    const liImg = document.createElement("img")
    let li = document.createElement("li");
    liImg.src = "images/closetodobutton.svg"
    liImg.style.width = "20px"
    li.innerHTML = txt;
    list.insertBefore(li, list.childNodes[0]);
    liImg.classList.add("closetodo");
    liNode.classList.add("closeall");
    list.appendChild(liNode)
    liNode.appendChild(li)
    liNode.appendChild(liImg);
    liImg.addEventListener("click", (e) => {
      liNode.parentNode.removeChild(liNode);
      savedTasks = savedTasks.filter((e) => e !== txt);
      localStorage.setItem("tasks", JSON.stringify(savedTasks));
    });
  }

  // Load saved tasks
  
  let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  
  // Add UI elements for any saved task
  
  savedTasks.forEach(addTodo);
  
  btn.addEventListener("click", () => {
    let txt = input.value;
    if (txt === "") {
      alert("Please enter a todo!");
    } else {
      savedTasks.push(txt);
      localStorage.setItem("tasks", JSON.stringify(savedTasks));
      input.value = "";
      addTodo(txt);
    }
  });

  // Removing items from todo list

function removeAllChildNodesTodos() {
    localStorage.clear()
    for (let i = 0; i < close.length; i++) {
        close[i].parentElement.style.display = "none"
    }
}