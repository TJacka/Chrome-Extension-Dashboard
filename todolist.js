// document.getElementById("todosubmit").addEventListener("click", newElement)

// // Create a new list item when clicking on the "Add" button
// function newElement() {
//     const li = document.createElement("li")
//     const inputValue = document.getElementById("todosinput").value;
//     const t = document.createTextNode(inputValue)
//     li.appendChild(t)
//     if (inputValue === '') {
//       alert("Enter a todo!")
//     } else {
//       document.getElementById("todoslistitems").appendChild(li);
//     }
//     document.getElementById("todosinput").value = ""
  
//     const span = document.createElement("SPAN")
//     const txt = document.createTextNode("\u00D7")
//     span.className = "close"
//     span.appendChild(txt)
//     li.appendChild(span)
  
//     for (i = 0; i < close.length; i++) {
//       close[i].onclick = function() {
//         const div = this.parentElement
//         div.style.display = "none"
//     }
//   }
// }

// // Create a "close" button and append it to each list item
// const myNodelist = document.getElementsByTagName("LI")
// for (let i = 0; i < myNodelist.length; i++) {
//   const span = document.createElement("SPAN")
//   const txt = document.createTextNode("\u00D7")
//   span.className = "close"
//   span.appendChild(txt)
//   myNodelist[i].appendChild(span)
// }

// // Click on a close button to hide the current list item
// const close = document.getElementsByClassName("close")
// for (let i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     const div = this.parentElement
//     div.style.display = "none"
//   }
// }

// // Add a "checked" symbol when clicking on a list item
// const list = document.querySelector('ul')
// list.addEventListener('click', function(e) {
//   if (e.target.tagName === '') {
//     e.target.classList.toggle('checked')
//   }
// }, false);



// const todos = document.getElementById("todoitems")
// document.getElementById("closebtn").addEventListener("click", () => links.style.display = "none")
// document.getElementById("homelink").addEventListener("click", () => links.style.display = "flex")
// document.getElementById("todolist").addEventListener("click", () => todos.style.display = "flex")
// document.getElementById("closetodos").addEventListener("click", () => todos.style.display = "none")
// document.getElementById("todosubmit").addEventListener("click", () => addTodo)
// // document.getElementByClass("closetodo").addEventListener("click", () => closeTodo)


// // Create a new list item 

// function addTodo() { 
//     const inputText = document.getElementById('todosinput').value
//     const listNode = document.getElementById('todolistitems')
//     const liNode = document.createElement("div")
//     const li = document.createElement("li")
//     const liImg = document.createElement("img")
//     const textNode = document.createTextNode(inputText)
//     liImg.src = "images/closetodobutton.svg"
//     liImg.style.width = "20px"
//     liImg.className = "closetodo"
//     listNode.appendChild(liNode)
//     liNode.appendChild(li)
//     liNode.appendChild(liImg)
//     li.appendChild(textNode)
// }

// function addTodo() { 
//     const inputText = document.getElementById('todosinput').value
//     const listNode = document.getElementById('todolistitems')
//     const liNode = document.createElement("div")
//     const li = document.createElement("li")
//     const liImg = document.createElement("img")
//     const textNode = document.createTextNode(inputText)
//     liImg.src = "images/closetodobutton.svg"
//     liImg.style.width = "20px"
//     liImg.setAttribute("class", "closetodo")
//     listNode.appendChild(liNode)
//     liNode.appendChild(li)
//     liNode.appendChild(liImg)
//     li.appendChild(textNode)
// }

// Create a "close" button and append it to each list item



// Click on a close button to hide the current list item



// Add a "checked" symbol when clicking on a list item



