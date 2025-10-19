// document.getElementById("count").innerText = 5;
// let firstbatch = 5
// let secondabtch = 7
// let total = firstbatch + secondabtch
// console.log(total)
// let points = 4
// let ponints2 = "10"//string
// let totalPoints = points + ponints2
// console.log(totalPoints)//104 string>number = string
// //use escap chrsacter/to seperste '' &""
//camelCase
let countEl = document.getElementById("count")
let saveEl = document.getElementById("save-el")
console.log(countEl)
let count = 0
function increment() {
    count = count + 1
    countEl.innerText = count
}
function save() {

    // saveEl.innerText += count + "-" or
    saveEl.textContent += count + "-"
    count = 0
    countEl.innerText = count

}


