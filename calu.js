let num1 = 8
let num2 = 2
let s = 0
let history = []            // <- store saved results

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

function add() {
    s = num1 + num2
    document.getElementById("sum-el").textContent = "Sum: " + s
    saveResult(s)           // automatically save this result
}
function sub() {
    s = num1 - num2
    document.getElementById("sum-el").textContent = "Sub: " + s
    saveResult(s)
}
function div() {
    s = num1 / num2
    document.getElementById("sum-el").textContent = "Div: " + s
    saveResult(s)
}
function multi() {
    s = num1 * num2
    document.getElementById("sum-el").textContent = "Multip: " + s
    saveResult(s)
}
function saveResult(value) {
    history.push(value)
    document.getElementById("save-el").textContent = "History: " + history.join(" | ")

}
function save() {
    saveResult(s)
    // show history in the element with id "save-el"

}

// function save() {
//     // manual save of the last result (keeps backward compatibility)
//     saveResult(s)
// }