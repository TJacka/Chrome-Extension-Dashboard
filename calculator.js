let ac = document.getElementById("ac")
ac.innerText = "AC"
let seven = document.getElementById("seven")
seven.innerText = "7"
let eight = document.getElementById("eight")
eight.innerText = "8"
let nine = document.getElementById("nine")
nine.innerText = "9"
let divide = document.getElementById("divide")
divide.innerText = "/"
let posneg = document.getElementById("posneg")
posneg.innerText = "+/-"
let four = document.getElementById("four")
four.innerText = "4"
let five = document.getElementById("five")
five.innerText = "5"
let six = document.getElementById("six")
six.innerText = "6"
let multiply = document.getElementById("multiply")
multiply.innerText = "x"
let percent = document.getElementById("percent")
percent.innerText = "%"
let one = document.getElementById("one")
one.innerText = "1"
let two = document.getElementById("two")
two.innerText = "2"
let three = document.getElementById("three")
three.innerText = "3"
let minus = document.getElementById("minus")
minus.innerText = "-"
let point = document.getElementById("point")
point.innerText = "."
let zero = document.getElementById("zero")
zero.innerText = "0"
let equals = document.getElementById("equals")
equals.innerText = "="
let plus = document.getElementById("plus")
plus.innerText = "+"

document.getElementById("calcbtn").addEventListener("click", () => {
    document.getElementById("calculator").style.display = "flex"
})

document.addEventListener("click", event => {
    if (!document.contains(event.target)) {
        document.getElementById("calculator").style.display = "none"
    }
})

