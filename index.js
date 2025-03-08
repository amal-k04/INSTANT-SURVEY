let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
let newDetail = ""

function increment() {
    count += 1
    countEl.textContent = count
}

saveEl.onclick = function() {
    save()
}

function submit() {
    let detail = document.getElementById("details").value;
    document.getElementById("name").textContent = detail;
    newDetail = detail
}

function save() {
    let countStr = newDetail + " : " + count
    let newLine = document.createElement("div")
    newLine.textContent = countStr
    saveEl.appendChild(newLine)
    countEl.textContent = 0
    count = 0
}
